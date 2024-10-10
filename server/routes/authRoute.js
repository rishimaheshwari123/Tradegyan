const express = require("express")
const { registerCtrl, loginCtrl,sendMessageCtrl } = require("../controllers/authCtrl")
const router = express.Router()


router.post("/login", loginCtrl)
router.post("/register", registerCtrl)
router.post("/send-message", sendMessageCtrl)




module.exports = router