const express = require("express")
const { getAllUsers,getUserById ,downloadUsersExcel} = require("../controllers/crmcontroller")

const router = express.Router()


router.get("/alluser", getAllUsers)
router.get("/user/:id", getUserById)
router.get("/alluser/download", downloadUsersExcel)



module.exports = router