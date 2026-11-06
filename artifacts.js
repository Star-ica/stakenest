// ABI of the deployed StakeNest contract (native BOT version) on BOT Chain mainnet.
// The empty accrue() and stakes() functions are left out on purpose.
window.ARTIFACTS = {
  main: {
    abi: [
      "function aprBps() view returns (uint256)",
      "function totalStaked() view returns (uint256)",
      "function positions(address) view returns (uint256 amount, uint256 earned, uint256 lastUpdate)",
      "function pending(address u) view returns (uint256)",
      "function rewardReserve() view returns (uint256)",
      "function stake() payable",
      "function withdraw(uint256 amount)",
      "function claim()",
      "function fund() payable",
      "event Staked(address indexed user, uint256 amount)",
      "event Withdrawn(address indexed user, uint256 amount)",
      "event Claimed(address indexed user, uint256 amount)",
      "event Funded(address indexed from, uint256 amount)"
    ]
  }
};