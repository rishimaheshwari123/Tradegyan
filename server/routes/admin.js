const express = require("express")
const { getAllUsers,getUserById } = require("../controllers/crmcontroller")

const router = express.Router()


router.get("/alluser", getAllUsers)
router.get("/user/:id", getUserById)



module.exports = router