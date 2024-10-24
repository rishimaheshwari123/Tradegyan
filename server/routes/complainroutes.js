// routes/complaintRoutes.js
const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintTracker');
const Complaint = require('../models/complainTracker');

router.get('/current-month-data', complaintController.getCurrentMonthData);
router.get('/monthly-trend', complaintController.getPastMonthsData);
router.get('/annual-trend', complaintController.getPastYearsData);



router.post('/add', async (req, res) => {
    const { year, month, source, receivedFrom, received, resolved, pending } = req.body;

    try {
        // Get the current date and calculate the month and year
        const currentDate = new Date();
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        const lastMonthYear = lastMonthDate.getFullYear();
        const lastMonth = lastMonthDate.toLocaleString("default", { month: "long", year: "numeric" });

        // Query the database to get pending complaints from the last month
        const lastMonthComplaints = await Complaint.find({
            year: lastMonthYear.toString(),
            month: lastMonth,
        });

        // Calculate pendingLastMonth from the fetched data
        const pendingLastMonth = lastMonthComplaints.reduce((total, complaint) => total + complaint.pending, 0);

        // Create a new complaint document
        const newComplaint = new Complaint({
            year,
            month,
            source,
            receivedFrom,
            received,
            resolved,
            pending,
            pendingLastMonth,
            pendingComplaintsLessThanThreeMonths: 0, // Initialize as needed
            averageResolutionTime: 0, // Initialize as needed
        });

        // Save the new complaint to the database
        await newComplaint.save();
        res.status(201).json({ message: 'Complaint added successfully', data: newComplaint });
    } catch (error) {
        console.error('Error adding complaint:', error);
        res.status(500).json({ message: 'Error adding complaint', error });
    }
});


const generateDummyComplaints = () => {
    const complaints = [];
    const currentDate = new Date();
    
    // Loop through each month for the last 2 years and the current month
    for (let i = 0; i < 24; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      
      const year = date.getFullYear();
      const month = date.toLocaleString("default", { month: "long", year: "numeric" }); // "September 2024"
  
      const complaint = {
        year: `${year}-${year + 1}`, // Example: "2023-24"
        month: month,
        source: "Directly From Investors", // Change as needed
        receivedFrom: "Investor", // Change as needed
        received: 0, // Random number of received complaints
        resolved: 0, // Random number of resolved complaints
        pending: 0, // Random number of pending complaints
        pendingLastMonth: 0,
        pendingComplaintsLessThanThreeMonths: 0,
        averageResolutionTime:0, // Random average resolution time
      };
  
      complaints.push(complaint);
    }
  
    return complaints;
  };
  
  // Route to add dummy complaints
  router.post("/add-dummy-complaints", async (req, res) => {
    try {
      const dummyComplaints = generateDummyComplaints();
      await Complaint.insertMany(dummyComplaints); // Insert all dummy complaints into the database
      res.status(201).json({ message: "Dummy complaints added successfully", dummyComplaints });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error adding dummy complaints", error });
    }
  });


module.exports = router;
