const express = require("express")
const { registerCtrl, loginCtrl,sendMessageCtrl,fetchMyProfile } = require("../controllers/authCtrl")
const { auth } = require("../middleware/auth")
const router = express.Router()

router.post("/login", loginCtrl)
router.post("/register", registerCtrl)
router.post("/send-message", sendMessageCtrl)

router.get("/fetchMyProfile",auth,fetchMyProfile )



module.exports = router