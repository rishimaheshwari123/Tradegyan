const User = require("../models/authModel");
const xlsx = require('xlsx');
// Get all users
// In your user controller or route handler
const getAllUsers = async (req, res) => {
  const { page = 1, limit = 10, searchQuery = '', sortOrder = 'newest' } = req.query;

  try {

      // Construct the query for searching users
      const query = {};
      if (searchQuery) {
          query.$or = [
              { name: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive search for name
              { email: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive search for email
              { contactNumber: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive search for email
              { whatsappNumber: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive search for email
          ];
      }

      // Count total matching users based on the query
      const totalUsers = await User.countDocuments(query);

      // Fetch users with sorting applied before pagination
      const users = await User.find(query)
          .sort({ createdAt: sortOrder === 'newest' ? -1 : 1 }) // Sort based on createdAt field
          .skip((page - 1) * limit)
          .limit(Number(limit)); // Pagination

      // Success response
      return res.status(200).json({
          success: true,
          message: "Users retrieved successfully",
          data: users,
          totalPages: Math.ceil(totalUsers / limit), // Calculate total pages
      });
  } catch (error) {
      console.error(error); // Log error for debugging

      // Error response
      return res.status(500).json({
          success: false,
          message: "An error occurred while retrieving users",
          error: error.message, // Include the error message
      });
  }
};








const getUserById = async (req, res) => {
  try {
      const userId = req.params.id; // Get the user ID from request parameters

      // Check if ID is provided
      if (!userId) {
          return res.status(400).json({
              success: false,
              message: "User ID is required",
          });
      }

      // Fetch user by ID and populate the isSubcription field
      const user = await User.findById(userId).populate('isSubcription'); // Populate the isSubcription field

      if (!user) {
          return res.status(404).json({
              success: false,
              message: "User not found",
          });
      }

      res.status(200).json({
          success: true,
          message: "User fetched successfully",
          data: user,
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: "Error fetching user",
          error: error.message,
      });
  }
};

const downloadUsersExcel = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
  
        // Map the user data to an array of objects
        const usersData = users.map(user => ({
            Name: user.name,
            Email: user.email,
            WhatsAppNumber: user.whatsappNumber,
            ContactNumber: user.contactNumber,
            CreatedAt: user.createdAt.toLocaleString(), // Format date
        }));
  
        // Create a new workbook and a worksheet
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(usersData);
  
        // Append the worksheet to the workbook
        xlsx.utils.book_append_sheet(wb, ws, "Users");
  
        // Generate a buffer for the Excel file
        const excelBuffer = xlsx.write(wb, { bookType: 'xlsx', type: 'buffer' });
  
        // Set the response headers
        res.setHeader('Content-Disposition', 'attachment; filename=users.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  
        // Send the buffer in the response
        res.send(excelBuffer);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while downloading the Excel file",
            error: error.message,
        });
    }
};


module.exports = { getAllUsers,getUserById ,downloadUsersExcel};
