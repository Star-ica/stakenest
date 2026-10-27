// Edit address to point this front end at an existing deployment.
window.APP_CONFIG = {
  "address": "",
  "slug": "stakenest",
  "name": "StakeNest",
  "accent": "#0a7f6f",
  "tagline": "Stake a token, earn a fixed APR, withdraw any time.",
  "about": "Deposit the stake token into the vault. Rewards accrue every second at the vault APR and are paid from a reward pool that anyone can fund.",
  "tokens": [
    "token"
  ],
  "deploy": {
    "tokens": [
      {
        "name": "Stake Token",
        "symbol": "STK"
      }
    ],
    "args": [
      "$t0",
      1000
    ]
  },
  "amountFields": [
    "amount",
    "earned"
  ],
  "timeFields": [
    "lastUpdate"
  ],
  "stats": [
    {
      "label": "Total staked",
      "fn": "totalStaked",
      "fmt": "token"
    },
    {
      "label": "Reward pool",
      "fn": "rewardReserve",
      "fmt": "token"
    },
    {
      "label": "APR",
      "fn": "aprBps",
      "fmt": "bps"
    },
    {
      "label": "You staked",
      "fn": "positions",
      "fmt": "token",
      "args": [
        "me"
      ],
      "pick": "amount"
    },
    {
      "label": "Your pending rewards",
      "fn": "pending",
      "fmt": "token",
      "args": [
        "me"
      ]
    }
  ],
  "actions": [
    {
      "title": "Stake",
      "fn": "stake",
      "inputs": [
        {
          "id": "amount",
          "label": "Amount",
          "type": "amount",
          "default": "100"
        }
      ]
    },
    {
      "title": "Withdraw",
      "fn": "withdraw",
      "inputs": [
        {
          "id": "amount",
          "label": "Amount",
          "type": "amount",
          "default": "50"
        }
      ]
    },
    {
      "title": "Claim rewards",
      "fn": "claim",
      "desc": "Needs rewards in the pool. Fund it below first on a fresh deploy.",
      "inputs": []
    },
    {
      "title": "Fund reward pool",
      "fn": "fund",
      "inputs": [
        {
          "id": "amount",
          "label": "Amount",
          "type": "amount",
          "default": "500"
        }
      ]
    }
  ],
  "views": [
    {
      "title": "Position of an address",
      "fn": "positions",
      "inputs": [
        {
          "id": "a",
          "label": "Address",
          "type": "address",
          "meDefault": true
        }
      ]
    }
  ]
};
