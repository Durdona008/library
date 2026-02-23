const {Router} = require("express")
const { getallbooks, getonebook, addbook, updatebook, deletebook } = require("../controller/book.controller")
const { findOneAndDelete } = require("../schema/author.schema")


const bookrouter = Router()

bookrouter.get("/get_all_books",getallbooks)
bookrouter.get("/get_one_book/:id",getonebook)
bookrouter.post("/add_book" ,addbook)
bookrouter.put("/update_book/:id",updatebook)
bookrouter.delete("/delete_book/:id",deletebook)


module.exports = bookrouter