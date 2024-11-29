const express = require("express")
const servRender = require("../services/render")
const controller = require("../controller/controller")

const route = express.Router()


route.get("/", servRender.homeRoutes)
route.get("/add-user", servRender.add_user)
route.get("/update-user",servRender.update_user)



//API
route.post("/api/users",controller.create)
route.get("/api/users",controller.find)
route.put("/api/users/:id",controller.update)
route.delete("/api/users/:id",controller.delete)


module.exports = route