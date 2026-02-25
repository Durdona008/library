const { Schema, model } = require("mongoose");

const book = new Schema({
  title: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 200,

  },
  pages: {
    type: Number,
    required: true,
    min: [3, "kamida 3ta sahifa bolishi kerak"],
    max: [5000, "kopi bn 5000 "]
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
    enum: {
values: ["TEMURIYLAR DAVRI", "SOVET DAVRI", "JADID DAVRI", "MUSTAQILLIK DAVRI"],
      message: "{VALUE} bunday qiymat qabul qilinmaydi"
    }
      
  
  },
  genre: {
    type: String,
    required: true,
    enum: {
      values: ["COMEDY", "ROMANCE", "THRILLER", "HORROR", "ACTION", "DOCUMENTRY", "SCIENCE FICTION", "FANTASY",
        "HISTORY"],
      message: "{VALUE} bunday qiymat qabul qilinmaydi"
    
    }
      
  },
  imageurl: {
    type: String,
    required: true,
  }

}, {
  versionKey: false,
  timestamps: true
});

const bookSchema = model("book", book)
module.exports = bookSchema