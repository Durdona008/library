const { Schema , model} = require("mongoose");

const author = new Schema({
  fulname: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
   deathdate: {
    type: Date,
    required: true,
  },
   period: {
    type: String,
    required: true,
  },
   bio: {
    type: String,
    required: true,
  },
   work: {
    type: String,
    required: true,
  },
   imageurl: {
    type: String,
    required: true,
  }
  
},{
    versionKey : false , 
    timestamps : true
});

const authorSchema = model("author",author)
module.exports= authorSchema