const User = require("../models/authModel");

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



module.exports = { getAllUsers,getUserById };
