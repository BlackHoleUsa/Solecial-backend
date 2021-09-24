const ARTWORK_TYPE = {
  IMAGE: 'image',
  MUSIC: 'music',
  VIDEO: 'video',
};

const MINT_CONTRACT_EVENTS = {
  NEW_COLLECTION: 'newCollection',
};

const AUC_CONTRACT_EVENTS = {
  NEW_AUCTION: 'newAuction',
  NEW_BID: 'newBid',
};

const AUCTION_STATUS = {
  OPEN: 'open',
  CLOSED: 'closed',
  TIMEOUT: 'timeout'
};

const MINT_STATUS = {
  PENDING: 'pending',
  COMPLETE: 'complete',
};

const SEARCH_FILTERS = {
  USERS: 'users',
  ARTWORKS: 'artworks',
  COLLECTIONS: 'collections',
};

const AUCTION_FILTERS = {
  NEW: 'new',
  HAS_OFFER: 'hasOffer',
  ON_AUCTION: 'onAuction',
};

const HISTORY_TYPE = {
  ARTWORK_CREATED: 'artworkCreated',
  ARTWORK_DELETED: 'artworkDeleted',
  AUCTION_STARTED: 'auctionStarted',
  AUCTION_END: 'auctionEnd',
  BID_PLACED: 'bidPlaced',
};

module.exports = {
  ARTWORK_TYPE,
  MINT_CONTRACT_EVENTS,
  AUCTION_STATUS,
  AUC_CONTRACT_EVENTS,
  MINT_STATUS,
  SEARCH_FILTERS,
  AUCTION_FILTERS,
  HISTORY_TYPE,
};
