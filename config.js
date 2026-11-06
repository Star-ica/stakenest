// BOT Chain mainnet deployment
window.APP_CONFIG = {
  "address": "0x468Dc32289a2e86e0eC157DB515Ae0e2B56671F8",
  "slug": "stakenest",
  "name": "StakeNest",
  "accent": "#0a7f6f",
  "tagline": "Stake BOT, earn a fixed APR, withdraw any time.",
  "about": "Deposit BOT into the vault. Rewards accrue every second at the vault APR and are paid from a reward pool that anyone can fund.",
  "tokens": [],
  "amountFields": ["amount", "earned"],
  "timeFields": ["lastUpdate"],
  "stats": [
    {"label":"Total staked (BOT)","fn":"totalStaked","fmt":"token"},
    {"label":"Reward pool (BOT)","fn":"rewardReserve","fmt":"token"},
    {"label":"APR","fn":"aprBps","fmt":"bps"},
    {"label":"You staked","fn":"positions","fmt":"token","args":["me"],"pick":"amount"},
    {"label":"Your pending rewards","fn":"pending","fmt":"token","args":["me"]}
  ],
  "actions": [
    {"title":"Stake","fn":"stake","desc":"Sends this much BOT to the vault.","valueInput":"amount","inputs":[{"id":"amount","label":"Amount (BOT)","type":"amount","default":"100"}]},
    {"title":"Withdraw","fn":"withdraw","inputs":[{"id":"amount","label":"Amount (BOT)","type":"amount","default":"50"}]},
    {"title":"Claim rewards","fn":"claim","desc":"Needs rewards in the pool.","inputs":[]},
    {"title":"Fund reward pool","fn":"fund","desc":"Adds BOT to the reward pool. It cannot be taken back.","valueInput":"amount","inputs":[{"id":"amount","label":"Amount (BOT)","type":"amount","default":"500"}]}
  ],
  "views": [
    {"title":"Position of an address","fn":"positions","inputs":[{"id":"a","label":"Address","type":"address","meDefault":true}]},
    {"title":"Pending rewards of an address","fn":"pending","fmt":"token","inputs":[{"id":"a","label":"Address","type":"address","meDefault":true}]}
  ]
};