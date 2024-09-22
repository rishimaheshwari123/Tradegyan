const express = require("express")
const { createService, getAllService, getSingleService } = require("../controllers/serviceCtrl")
const router = express.Router()


router.post("/create", createService)
router.get("/getAll", getAllService)
router.get("/get/:id", getSingleService)



module.exports = router