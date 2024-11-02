// routes/complaintRoutes.js
const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintTracker');
const Complaint = require('../models/complainTracker');

router.get('/current-month-data', complaintController.getCurrentMonthData);
router.get('/monthly-trend', complaintController.getPastMonthsData);
router.get('/annual-trend', complaintController.getPastYearsData);



// router.post('/add', async (req, res) => {
//     const { year, month, source, receivedFrom, received, resolved, pending } = req.body;

//     try {
//         // Get the current date and calculate the month and year
//         const currentDate = new Date();
//         const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
//         const lastMonthYear = lastMonthDate.getFullYear();
//         const lastMonth = lastMonthDate.toLocaleString("default", { month: "long", year: "numeric" });

//         // Query the database to get pending complaints from the last month
//         const lastMonthComplaints = await Complaint.find({
//             year: lastMonthYear.toString(),
//             month: lastMonth,
//         });

//         // Calculate pendingLastMonth from the fetched data
//         const pendingLastMonth = lastMonthComplaints.reduce((total, complaint) => total + complaint.pending, 0);

//         // Create a new complaint document
//         const newComplaint = new Complaint({
//             year,
//             month,
//             source,
//             receivedFrom,
//             received,
//             resolved,
//             pending,
//             pendingLastMonth,
//             pendingComplaintsLessThanThreeMonths: 0, // Initialize as needed
//             averageResolutionTime: 0, // Initialize as needed
//         });

//         // Save the new complaint to the database
//         await newComplaint.save();
//         res.status(201).json({ message: 'Complaint added successfully', data: newComplaint });
//     } catch (error) {
//         console.error('Error adding complaint:', error);
//         res.status(500).json({ message: 'Error adding complaint', error });
//     }
// });

// router.post('/add', async (req, res) => {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth() + 1; // `getMonth()` returns 0-11, so add 1 for 1-12

//   const { source, receivedFrom, received, resolved, pending } = req.body;

//   try {
//     // Check if a complaint already exists for the current month and year
//     const existingComplaint = await Complaint.findOne({ year, month });

//     if (existingComplaint) {
//       // Update the existing complaint
//       existingComplaint.source = source;
//       existingComplaint.receivedFrom = receivedFrom;
//       existingComplaint.received = received;
//       existingComplaint.resolved = resolved;
//       existingComplaint.pending = pending;

//       await existingComplaint.save();
//       res.status(200).json({ message: 'Complaint updated successfully', data: existingComplaint });
//     } else {
//       // If no existing complaint, create a new one
//       const newComplaint = new Complaint({
//         year,
//         month,
//         source,
//         receivedFrom,
//         received,
//         resolved,
//         pending,
//         pendingLastMonth: 0, // Initialize as needed
//         pendingComplaintsLessThanThreeMonths: 0, // Initialize as needed
//         averageResolutionTime: 0, // Initialize as needed
//       });

//       await newComplaint.save();
//       res.status(201).json({ message: 'Complaint added successfully', data: newComplaint });
//     }
//   } catch (error) {
//     console.error('Error adding or updating complaint:', error);
//     res.status(500).json({ message: 'Error adding or updating complaint', error });
//   }
// });


router.post('/add', async (req, res) => {
  const { year, month, source, receivedFrom, received, resolved, pending } = req.body;

  try {
    // Validate month format
    const validMonths = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];

    if (!validMonths.includes(month)) {
      return res.status(400).json({ message: 'Invalid month. Please provide a valid month name.' });
    }

    const formattedYear = year.includes('-') ? year : `${year}-${parseInt(year) + 1}`;
    const formattedMonth = `${month} ${new Date().getFullYear()}`; // Format as "Month Year"

    // Check if a complaint for the given year and month already exists
    let complaint = await Complaint.findOne({
      year: formattedYear,
      month: formattedMonth,
    });

    // If the complaint exists, update it
    if (complaint) {
      complaint.source = source;
      complaint.receivedFrom = receivedFrom;
      complaint.received += Number(received); // Add to existing received count
      complaint.resolved += Number(resolved); // Add to existing resolved count
      complaint.pending += Number(pending); // Add to existing pending count

      // Optionally update other fields as needed
      const lastMonthDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
      const lastMonthYear = lastMonthDate.getFullYear();
      const lastMonth = lastMonthDate.toLocaleString("default", { month: "long", year: "numeric" });

      const lastMonthComplaints = await Complaint.find({
        year: lastMonthYear.toString(),
        month: lastMonth,
      });

      complaint.pendingLastMonth = lastMonthComplaints.reduce((total, c) => total + c.pending, 0);
      
      await complaint.save();
      return res.status(200).json({ message: 'Complaint updated successfully', data: complaint });
    }

    // If no existing complaint, create a new one
    const newComplaint = new Complaint({
      year: formattedYear,
      month: formattedMonth,
      source,
      receivedFrom,
      received: Number(received),
      resolved: Number(resolved),
      pending: Number(pending),
      pendingLastMonth: 0, // Initialize as needed
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
        received: 2, // Random number of received complaints
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

// Route to edit a specific month’s complaint
// router.put('/edit/:id', async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   try {
//       const updatedComplaint = await Complaint.findByIdAndUpdate(id, updatedData, { new: true });

//       if (!updatedComplaint) {
//           return res.status(404).json({ message: 'Complaint not found' });
//       }

//       res.status(200).json({ message: 'Complaint updated successfully', data: updatedComplaint });
//   } catch (error) {
//       console.error('Error updating complaint:', error);
//       res.status(500).json({ message: 'Error updating complaint', error });
//   }
// });








// Helper function to get the last 5 months
const getLast5Months = () => {
  const months = [];
  const currentDate = new Date();

  for (let i = 0; i < 5; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    months.push({
      year: date.getFullYear(),
      month: date.toLocaleString("default", { month: "long" }),
    });
  }

  return months;
};

// Route to get complaints for the last 5 months
router.get('/last-5-months', async (req, res) => {
  try {
    const months = getLast5Months();
    const complaints = await Promise.all(
      months.map(async ({ year, month }) => {
        const complaint = await Complaint.findOne({ year, month });
        return complaint || {
          year,
          month,
          source: "",
          receivedFrom: "",
          received: 0,
          resolved: 0,
          pending: 0,
          pendingLastMonth: 0,
          pendingComplaintsLessThanThreeMonths: 0,
          averageResolutionTime: 0,
        };
      })
    );

    res.status(200).json({ complaints });
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ message: 'Error fetching complaints', error });
  }
});

// Route to add or update a complaint for the current month
router.post('/add-or-update-current-month', async (req, res) => {
  const { source, receivedFrom, received, resolved, pending } = req.body;

  try {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString("default", { month: "long" });

    // Check if a complaint already exists for the current month
    let complaint = await Complaint.findOne({ year, month });

    if (!complaint) {
      // If no complaint exists, create one with default values
      complaint = new Complaint({
        year,
        month,
        source,
        receivedFrom,
        received: 0,
        resolved: 0,
        pending: 0,
        pendingLastMonth: 0,
        pendingComplaintsLessThanThreeMonths: 0,
        averageResolutionTime: 0,
      });
    }

    // Update the complaint with new values
    complaint.source = source || complaint.source;
    complaint.receivedFrom = receivedFrom || complaint.receivedFrom;
    complaint.received = received || complaint.received;
    complaint.resolved = resolved || complaint.resolved;
    complaint.pending = pending || complaint.pending;

    await complaint.save();

    res.status(201).json({ message: 'Complaint added or updated successfully', data: complaint });
  } catch (error) {
    console.error('Error adding or updating complaint:', error);
    res.status(500).json({ message: 'Error adding or updating complaint', error });
  }
});

// Route to edit a specific complaint by ID
router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedComplaint = await Complaint.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedComplaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    res.status(200).json({ message: 'Complaint updated successfully', data: updatedComplaint });
  } catch (error) {
    console.error('Error updating complaint:', error);
    res.status(500).json({ message: 'Error updating complaint', error });
  }
});


module.exports = router;
