const express = require("express");
const {
  createService,
  getAllService,
  getSingleService,
  getServices,
  singleServiceAdmin,
} = require("../controllers/serviceCtrl");
const router = express.Router();
const { auth } = require("../middleware/auth");

router.post("/create", createService);
router.get("/getAll", getAllService);
router.get("/get/:id", getSingleService);
router.get("/get/admin/:id", singleServiceAdmin);
router.get("/getAllServices", auth, getServices);

module.exports = router;
