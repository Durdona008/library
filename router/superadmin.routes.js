const { Router } = require("express");
const { updateRole } = require("../controller/superadmin.controller");
const superadminMiddleware = require("../middleware/superadmin.middleware");

const superadminRouter = Router();
superadminRouter.put("/update_role/:id", superadminMiddleware,updateRole);
superadminRouter.post("/delete/:id",superadminMiddleware, deleteUser);
module.exports = superadminRouter;