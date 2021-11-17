const { AUCTION_CONTRACT_INSTANCE, MINT_SINGLE_CONTRACT_INSTANCE } = require('../config/contract.config');
const { contractController } = require('../controllers');
const { MINT_CONTRACT_EVENTS, AUC_CONTRACT_EVENTS } = require('../utils/enums');
// var contractInfo = require('./contractInfo');
// const Web3 = require('web3')

// const infura = "wss://rinkeby.infura.io/ws/v3/c944b72ce9b74c77aac906c6a59f4e99"
// const web3 = new Web3(new Web3.providers.WebsocketProvider(infura));

// const contract = new web3.eth.Contract(contractInfo.marketMinterabi, contractInfo.marketMinterAddress);

MINT_SINGLE_CONTRACT_INSTANCE.events.allEvents(async (err, ev) => {
  if (err) {
    console.error('Error', err);
    return;
  }

  console.log('Event', ev);

  switch (ev.event) {
    case MINT_CONTRACT_EVENTS.NEW_COLLECTION:
      console.log("ev.returnValues",ev.returnValues);
      const { CollectionAddress, owner, colName } = ev.returnValues;
      contractController.updateCollectionAddress(CollectionAddress, owner, colName);
      break;
    default:
      console.log('happy');
  }
});

AUCTION_CONTRACT_INSTANCE.events.allEvents(async (err, ev) => {
  if (err) {
    console.error('Error', err);
    return;
  }

  console.log('Event', ev.event);

  switch (ev.event) {
    case AUC_CONTRACT_EVENTS.NEW_AUCTION:
      console.log('Auction Event', ev.event);
      const { colAddress, tokenId, aucId } = ev.returnValues;
      console.log("colAddress, tokenId, aucId", colAddress, tokenId, aucId);
      contractController.handleNewAuction(colAddress, tokenId, aucId);
      break;
    case AUC_CONTRACT_EVENTS.NEW_BID:
      contractController.handleNewBid(ev.returnValues);
      break;
    case AUC_CONTRACT_EVENTS.CLAIM_SALE:
      console.log('Event', ev);
      contractController.handleNFTSale(ev.returnValues);
      break;
    case AUC_CONTRACT_EVENTS.NFT_CLAIM:
      contractController.handleNFTClaim(ev.returnValues);
      break;
    case AUC_CONTRACT_EVENTS.CLAIM_BACK:
      contractController.handleClaimBack(ev.returnValues);
      break;
    case AUC_CONTRACT_EVENTS.NEW_SALE:
      contractController.handleNewSale(ev.returnValues);
      break;
    case AUC_CONTRACT_EVENTS.SALE_CANCELLED:
      contractController.handleCancelSale(ev.returnValues);
      break;
    case AUC_CONTRACT_EVENTS.SALE_COMPLETED:
      contractController.handleSaleComplete(ev.returnValues);
      break;
    default:
      console.log('done');
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
