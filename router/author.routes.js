const { Router } = require("express")
const { getallauthors, getoneauthor, addauthor, updateauthor, deleteauthor } = require("../controller/author.controller")

const authorrouter = Router()

authorrouter.get("/get_all_authors", getallauthors)
authorrouter.get("/get_one_author/name ", getoneauthor)
authorrouter.get("/search", search)
authorrouter.post("/add_author", addauthor)
authorrouter.put("/update_author/:id", updateauthor)
authorrouter.delete("/delete_author/:id", deleteauthor)


module.exports = authorrouter