const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const collectionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    coverImage: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      typetype: String,
      required: false,
    },
    artworks: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
collectionSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
