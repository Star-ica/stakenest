// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./Token.sol";

/// @title StakeNest - simple staking vault. Rewards (fixed APR) are paid from a funded reserve.
contract StakeNest {
    IERC20 public immutable token;
    uint256 public immutable aprBps;
    uint256 public totalStaked;

    struct Position { uint256 amount; uint256 earned; uint256 lastUpdate; }
    mapping(address => Position) public positions;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event Claimed(address indexed user, uint256 amount);
    event Funded(address indexed from, uint256 amount);

    constructor(address _token, uint256 _aprBps) { token = IERC20(_token); aprBps = _aprBps; }

    function pending(address u) public view returns (uint256) {
        Position memory p = positions[u];
        return p.earned + (p.amount * aprBps * (block.timestamp - p.lastUpdate)) / (365 days * 10000);
    }
    function rewardReserve() public view returns (uint256) { return token.balanceOf(address(this)) - totalStaked; }

    function _accrue(address u) internal { positions[u].earned = pending(u); positions[u].lastUpdate = block.timestamp; }

    function stake(uint256 amount) external {
        require(amount > 0, "zero");
        _accrue(msg.sender);
        positions[msg.sender].amount += amount;
        totalStaked += amount;
        require(token.transferFrom(msg.sender, address(this), amount), "transfer");
        emit Staked(msg.sender, amount);
    }
    function withdraw(uint256 amount) external {
        Position storage p = positions[msg.sender];
        require(amount > 0 && p.amount >= amount, "amount");
        _accrue(msg.sender);
        p.amount -= amount;
        totalStaked -= amount;
        require(token.transfer(msg.sender, amount), "transfer");
        emit Withdrawn(msg.sender, amount);
    }
    function claim() external {
        _accrue(msg.sender);
        uint256 r = positions[msg.sender].earned;
        require(r > 0, "nothing to claim");
        require(rewardReserve() >= r, "reserve low");
        positions[msg.sender].earned = 0;
        require(token.transfer(msg.sender, r), "transfer");
        emit Claimed(msg.sender, r);
    }
    function fund(uint256 amount) external {
        require(token.transferFrom(msg.sender, address(this), amount), "transfer");
        emit Funded(msg.sender, amount);
    }
}
