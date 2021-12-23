const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { ARTWORK_TYPE } = require('../utils/enums');
const { artCategories } = require('../config/roles');

const artworkSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    artist_name: {
      type: String,
      required: true,
    },
    artist_description: {
      type: String,
      required: true,
    },
    artist_url: {
      type: String,
      required: false,
      trim: true,
    },
    creater: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    artwork_url: {
      type: String,
      required: false,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    basePrice: {
      type: Number,
      required: false,
    },
    tokenId: {
      type: String,
      required: false,
    },
    amount: {
      type: String,
      required: false,
    },
    multipleNFT: {
      type: Boolean,
      required: false,
    },
    views: {
      type: Number,
      required: false,
      default: 0,
    },
    artwork_type: {
      type: String,
      required: false,
      default: ARTWORK_TYPE.ART,
    },
    meta_url: {
      type: String,
      required: false,
      trim: true,
    },
    isAuctionOpen: {
      type: Boolean,
      default: false,
    },
    openForSale: {
      type: Boolean,
      default: false,
    },
    numberOfLikes: {
      type: Number,
      default: 0,
      required: false,
    },
    group: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Group',
    },
    totalEdition: {
      type: Number,
      required: false,
    },
    edition: {
      type: Number,
      default: 0,
      required: false,
    },
    sale: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'BuySell',
    },
    auction: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Auction',
    },
    auctionMintStatus: {
      type: String,
      default: 'closed',
    },
    endTime: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

artworkSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;
