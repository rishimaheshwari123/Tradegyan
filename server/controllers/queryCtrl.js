const queryModel = require("../models/queryModel")


const createQuery = async (req, res) => {
    try {

        const { beginningOfTheMonth, duringTheMonth, redolvedDuringTheMonth, pendingEndOfTheMonth, reasonForPending } = req.body;
        if (!beginningOfTheMonth || !duringTheMonth || !redolvedDuringTheMonth || !pendingEndOfTheMonth || !reasonForPending) {
            return res.status(404).json({
                success: false,
                message: "Please Provide All Fields"
            })
        }
        const query = await queryModel.create({ beginningOfTheMonth, duringTheMonth, redolvedDuringTheMonth, pendingEndOfTheMonth, reasonForPending })

        return res.status(201).json({
            success: true,
            message: "Query create successfully!",
            query
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating query"
        })
    }
}


const getQueryCtrl = async (req, res) => {
    try {
        const queries = await queryModel.find({});
        return res.status(200).json({
            success: true,
            queries
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating query"
        })
    }
}

const deleteQueryCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await queryModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Complaints Deleted Successfully!"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in deleting query"
        })
    }
}


const updateQuery = async (req, res) => {
    try {
        const { id } = req.params; // Get the id from request parameters

        // Find the existing query to get the current values
        const existingQuery = await queryModel.findById(id);

        if (!existingQuery) {
            return res.status(404).json({
                success: false,
                message: "Query not found",
            });
        }

        // Update only the fields provided in the request body
        const updatedFields = {
            beginningOfTheMonth: req.body.beginningOfTheMonth || existingQuery.beginningOfTheMonth,
            duringTheMonth: req.body.duringTheMonth || existingQuery.duringTheMonth,
            redolvedDuringTheMonth: req.body.redolvedDuringTheMonth || existingQuery.redolvedDuringTheMonth,
            pendingEndOfTheMonth: req.body.pendingEndOfTheMonth || existingQuery.pendingEndOfTheMonth,
            reasonForPending: req.body.reasonForPending || existingQuery.reasonForPending,
        };

        // Update the query with the new or unchanged values
        const updatedQuery = await queryModel.findByIdAndUpdate(
            id,
            updatedFields,
            { new: true, runValidators: true } // Return the updated document and run validation
        );

        return res.status(200).json({
            success: true,
            message: "Query updated successfully!",
            query: updatedQuery,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in updating query",
        });
    }
};

module.exports = { createQuery, getQueryCtrl, deleteQueryCtrl, updateQuery }