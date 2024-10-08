const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
    {
        beginningOfTheMonth: {
            type: String,
            required: true,
            trim: true,
        },
        duringTheMonth: {
            type: String,
            required: true,
            trim: true,
        },
        redolvedDuringTheMonth: {
            type: String,
            required: true,
            trim: true,
        },
        pendingEndOfTheMonth: {
            type: String,
            required: true,
            trim: true,
        },
        reasonForPending: {
            type: String,
            required: true,
            trim: true,
        },

    },

    { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);