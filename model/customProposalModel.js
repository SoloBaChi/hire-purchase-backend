const mongoose  = require('mongoose')

const customProposal = new mongoose.Schema({
    fullName:{
      first:String,
      last:String
    },
    email:{
    type:String,
    required:true,
    unique:true
   },
   gender:String,
   address:{
    type:String,
    lowercase:true
   },
   dateOfBirth:Date,
   stateOfOrigin:String,
   bvn:String,
   NIN:Number,
   photo:String,
   guarantorDetails:{
    name:String,
    phoneNumber:Number,
    address:String,
    email:{
      type:String,
      required:true,
      unique:true
    }
   },
   product:{
    name:String,
    price:String,
    term :String,
    type:{
      type:String,
    },
    numberOfProduct:Number,
    category:String
  }
}) ;

//creacting a model and exporting it
const customProposalModel = mongoose.model('customProposalModel',customProposal);
module.exports = customProposalModel;