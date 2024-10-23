// controllers/complaintController.js
const Complaint = require('../models/complainTracker');

// Helper function to get the current month and year
const getCurrentMonthAndYear = () => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return { month, year };
};
// Get data for the current month
// Get data for the current month
exports.getCurrentMonthData = async (req, res) => {
  try {
    const { month, year } = getCurrentMonthAndYear();
    console.log(`Looking for data for month: ${month} ${year}`);

    const currentMonthData = await Complaint.aggregate([
      {
        $match: {
          month: `${month} ${year}`
        }
      },
      {
        $group: {
          _id: null,
          received: { $sum: "$received" },
          resolved: { $sum: "$resolved" },
          pending: { $sum: "$pending" },
          pendingLastMonth: { $sum: "$pendingLastMonth" },
          pendingComplaintsLessThanThreeMonths: { $sum: "$pendingComplaintsLessThanThreeMonths" },
          averageResolutionTime: { $avg: "$averageResolutionTime" }
        }
      }
    ]);

    // Check if currentMonthData is empty
    if (currentMonthData.length === 0) {
      return res.status(404).json({ message: 'No data found for the specified month.' });
    }

    // Create sources with correct data structure
    const sources = [
      { name: "Directly From Investors", data: currentMonthData[0] },
      { name: "SEBI (SCORES)", data: currentMonthData[0] },
      { name: "Other Sources (If Any)", data: currentMonthData[0] },
    ];

    // Calculate Grand Total
    const grandTotal = {
      received: currentMonthData[0].received || 0,
      resolved: currentMonthData[0].resolved || 0,
      pending: currentMonthData[0].pending || 0,
      pendingLastMonth: currentMonthData[0].pendingLastMonth || 0,
      pendingComplaintsLessThanThreeMonths: currentMonthData[0].pendingComplaintsLessThanThreeMonths || 0,
      averageResolutionTime: currentMonthData[0].averageResolutionTime || 0,
    };

    res.status(200).json({
      monthEndData: {
        month: `${month} ${year}`,
        sources,
        grandTotal,
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



  
  // Get data for past months
// Get data for past months
exports.getPastMonthsData = async (req, res) => {
  try {
    const currentDate = new Date();
    const pastMonthsData = [];

    // Loop through the last 12 months
    for (let i = 0; i < 12; i++) {
      const date = new Date(currentDate);
      date.setMonth(currentDate.getMonth() - i);
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      
      // Create the month string in the format "Month Year"
      const monthString = `${month} ${year}`;

      // Aggregate data for the specific month and year
      const monthData = await Complaint.aggregate([
        {
          $match: {
            month: monthString
          }
        },
        {
          $group: {
            _id: null,
            received: { $sum: "$received" },
            resolved: { $sum: "$resolved" },
            pending: { $sum: "$pending" }
          }
        }
      ]);

      // Check if monthData exists and push to array
      if (monthData.length > 0) {
        pastMonthsData.push({
          month: monthString,
          received: monthData[0].received || 0,
          resolved: monthData[0].resolved || 0,
          pending: monthData[0].pending || 0,
        });
      } else {
        // If no data found for that month, push zeros
        pastMonthsData.push({
          month: monthString,
          received: 0,
          resolved: 0,
          pending: 0,
        });
      }
    }

    res.status(200).json({ pastMonthsData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  
  // Get data for past years
// Get data for past years
exports.getPastYearsData = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const pastYearsData = [];

    // Loop through the last 5 years
    for (let i = 0; i < 5; i++) {
      const year = currentYear - i;
      const yearString = `${year}-${year + 1}`;

      // Aggregate data for the specific year
      const yearData = await Complaint.aggregate([
        {
          $match: {
            year: yearString
          }
        },
        {
          $group: {
            _id: null,
            received: { $sum: "$received" },
            resolved: { $sum: "$resolved" },
            pending: { $sum: "$pending" },
          }
        }
      ]) || [{ received: 0, resolved: 0, pending: 0 }];

      pastYearsData.push({
        year: yearString,
        received: yearData.length > 0 ? yearData[0].received || 0 : 0,
        resolved: yearData.length > 0 ? yearData[0].resolved || 0 : 0,
        pending: yearData.length > 0 ? yearData[0].pending || 0 : 0,
      });
    }

    // Calculate Grand Total for past years
    const grandTotal = {
      received: pastYearsData.reduce((acc, curr) => acc + curr.received, 0),
      resolved: pastYearsData.reduce((acc, curr) => acc + curr.resolved, 0),
      pending: pastYearsData.reduce((acc, curr) => acc + curr.pending, 0),
    };

    res.status(200).json({
      pastYearsData,
      grandTotal,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  
  