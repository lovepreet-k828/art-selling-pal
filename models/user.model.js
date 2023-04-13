const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  photo: { type: String, required: true, trim: true },
  fName: {type: String, trim: true, },
  lName: {type: String, trim: true, },
  country: {type: String, trim: true, },
  state: {type: String, trim: true, },
  cityVillage: {type: String, trim: true, },
  password: {type: String,  trim: true, },
  email: {type: String,  trim: true },
  nft:{type: Number, required: true},
}, 
{
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);