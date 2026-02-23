const { Schema , model} = require("mongoose");

const book = new Schema({
  title: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
   publishedyear: {
    type: Number,
    required: true,
  },
   publishedhome: {
    type: String,
    required: true,
  },
   description: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
   genre: {
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

const bookSchema = model("book",book)
module.exports= bookSchema