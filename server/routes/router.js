const express = require("express")
const servRender = require("../services/render")

const route = express.Router()


route.get("/", servRender.homeRoutes)
route.get("/add-user", servRender.add_user)
route.get("/update-user",servRender.update_user)

module.exports = route