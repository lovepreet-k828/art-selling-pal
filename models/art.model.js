const mongoose = require("mongoose");

const artSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    photo: { type: String, required: true, trim: true },
    price: { type: mongoose.Types.Decimal128, required: true },
    basePrice: { type: mongoose.Types.Decimal128, required: true },
    creatorName: { type: String, required: true, trim: true },
    creatorId: { type: String, required: true, trim: true },
    ownerName: { type: String, required: true, trim: true },
    ownerId: { type: String, required: true, trim: true },
    count: { type: Number, required: true },
    sell: {type: Boolean, required: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Art", artSchema);
