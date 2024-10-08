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

module.exports = { createQuery, getQueryCtrl }