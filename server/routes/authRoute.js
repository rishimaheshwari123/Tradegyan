const express = require("express")
const { registerCtrl, loginCtrl, sendMessageCtrl, fetchMyProfile, getSingleUserCtrl, verifyUserCtrl } = require("../controllers/authCtrl")
const { auth } = require("../middleware/auth")
const { sendServiceEnrolledMessage } = require("../controllers/serviceCtrl")
const router = express.Router()

router.post("/login", loginCtrl)
router.post("/register", registerCtrl)
router.put("/verify/:id", auth, verifyUserCtrl)
router.post("/send-message", sendMessageCtrl)
router.post("/send-message/:serviceId", sendServiceEnrolledMessage)

router.get("/fetchMyProfile", auth, fetchMyProfile)
router.get("/get/:id", getSingleUserCtrl)



module.exports = router