const { MINT_CONTRACT_INSTANCE } = require('../config/contract.config');
const { contractController } = require('../controllers');
const { MINT_CONTRACT_EVENTS } = require('../utils/enums');
// var contractInfo = require('./contractInfo');
// const Web3 = require('web3')

// const infura = "wss://rinkeby.infura.io/ws/v3/c944b72ce9b74c77aac906c6a59f4e99"
// const web3 = new Web3(new Web3.providers.WebsocketProvider(infura));

// const contract = new web3.eth.Contract(contractInfo.marketMinterabi, contractInfo.marketMinterAddress);

MINT_CONTRACT_INSTANCE.events.allEvents(async (err, ev) => {
  if (err) {
    console.error('Error', err);
    process.exit(1);
  }

  console.log('Event', ev);
  // console.log('--collection address--', ev.returnValues.CollectionAddress);

  switch (ev.event) {
    case MINT_CONTRACT_EVENTS.NEW_COLLECTION:
      // contractController.updateCollectionAddress();
      break;
  }
});

// const transferEvent = async () => {

//   console.log("Listening for transfer on eth")

//   await contract.events.newCollection()
//     .on('data', (event) => {
//       console.log("Got Event on eth")
//       // if (event.returnValues.to) {

//       to = event.returnValues.CollectionAddress
//       from = event.returnValues.owner
//       // amount = event.returnValues.value

//       // if (to == process.env.SYSTEM_ADDRESS) {
//       //   mintTrx.mint(from, amount);
//       // }
//       // else {
//       //   console.log("Ignore others")
//       // }
//       // }
//     })
//     .on('error', console.error);

// }
// transferEvent();
