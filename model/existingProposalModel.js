const mongoose  = require('mongoose')

const existingProposal = new mongoose.Schema({
    fullName:{
      first:String,
      last:String
    },
    email:{
    type:String,
    required:true,
    unique:true
   },
   dateOfBirth:Date,
   NIN:Number,
   address:{
    type:String,
    lowercase:true
   },
   phoneNumber:Number,
   stateOfOrigin:String,
   productName:String,
   bvn:String,
   productCategory:String
}) ;

//creacting a model and exporting it
const existingProposalModel = mongoose.model('existingProposalModel',existingProposal);
module.exports = existingProposalModel;