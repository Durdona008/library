const { error } = require("console")
const { connect } = require("http2")
const mongoose = require("mongoose")

async function connectdb() {
   
    await mongoose.connect(process.env.MONGO_URI).then(()=> console.log("connected to db"))
    .catch((error) => console.log(error.message))
}

module.exports= connectdb