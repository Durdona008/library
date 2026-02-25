const { Schema, model } = require("mongoose");

const author = new Schema({
  fulname: {
    type: String,
    required: [true, "full name berilishi shart"],
    minLenght: [3, "kamida 3 ta xarfdan iborat bolishi shart"],
    maxLenght: [50, "kopi bilan 50 ta harfdan iborat bolishi kerak"],
    set: (value) => value.trim(),
    match : /^[a-zA-Z/s]+$/

  },
  birthdate: {
    type: Date,
    required: true,
  },
  deathdate: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
    trim: true,
    enum: {
      values: ["TEMURIYLAR DAVRI", "SOVET DAVRI", "JADID DAVRI", "MUSTAQILLIK DAVRI"],
      message: "{VALUE} bunday qiymat qabul qilinmaydi"
    }
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
  },
  phoneNumber:{
    type:String,
    required:true,
    validate:{
      validator:function(value){
        return /^\+998\d{2} \d{3} \d{2} \ d{2}/.test(value)
      },
      message:"phone number +998x xxx xx xx shunday function bolishi kerak"
    }
  }

}, {
  versionKey: false,
  timestamps: true
});
Author.statics.findByfulname= function (value){
   return this.find({fulname:value})
}


const authorSchema = model("author", author)
module.exports = authorSchema