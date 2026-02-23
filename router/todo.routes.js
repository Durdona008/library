const { Router } = require("express")
const { getAllProducts, getOneProduct, updateProduct, deleteProduct, addProduct } = require("../controller/todo.controller")
const authRouter = require("./auth.routes")

const productRouter = Router()

productRouter.get("/get_all_product", getAllProducts)
productRouter.get("/get_one_product/:id", getOneProduct)
productRouter.post("/add_product",authorization, addProduct)
productRouter.put("/update_product/:id",authorization, updateProduct)
productRouter.delete("/delete_product/:id",authorization , deleteProduct)

module.exports = productRouter