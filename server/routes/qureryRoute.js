const express = require("express")
const { createQuery, getQueryCtrl } = require("../controllers/queryCtrl")

const router = express.Router()


router.post("/create", createQuery)
router.get("/getAll", getQueryCtrl)



module.exports = router