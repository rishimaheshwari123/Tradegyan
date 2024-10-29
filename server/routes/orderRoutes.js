const express = require("express")
const router = express.Router()

const{
    auth,
    
  
}= require("../middleware/auth")



const {
    capturePayment,
    paymentVerification,enrollInService
 
} = require("../controllers/payment")


router.post("/capturePayment", auth,  capturePayment)
router.post("/verifyPayment", auth,  paymentVerification)
router.post("/enrolledUser", auth,  enrollInService)



module.exports = router
