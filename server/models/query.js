const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
 
const QuerySchema = new mongoose.Schema({
  Outbound:{
    type: String, 
    required: true
  },
  Inbound: {
    type: String, 
    required: true
  }, 
  Earliest: {
    type: String,
    required: true
  }, 
  Latest: {
    type: String,
    required: true
  },
  Price: {
    type: Integer,
    required: true
  }
});

const Query = mongoose.model('Query', QuerySchema); 

module.exports = Query; 