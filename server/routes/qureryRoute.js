const express = require("express")
const { createQuery, getQueryCtrl, deleteQueryCtrl, updateQuery } = require("../controllers/queryCtrl")

const router = express.Router()


router.post("/create", createQuery)
router.get("/getAll", getQueryCtrl)
router.delete("/delete/:id", deleteQueryCtrl)
router.put("/update/:id", updateQuery)



module.exports = router