const express = require('express');
const router = express.Router();
const { getDashboardStats,incrementVisitCount} = require('../controllers/dashboard');
// Route to get dashboard statistics
router.get('/dashboard', getDashboardStats);
router.post('/visit', incrementVisitCount);

module.exports = router;
