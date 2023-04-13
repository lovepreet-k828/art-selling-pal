const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  artName : {type: String, required: true, trim: true, },
  artId : {type: String, required: true, trim: true, },
  oldOwnerId : {type: String, required: true, trim: true, },
  newOwnerId : {type: String, required: true, trim: true, },
  price : {type: String, required: true, trim: true, },
  }, 
{
  timestamps: true,
});

module.exports = mongoose.model('Payment', paymentSchema);