const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
          },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            // required: true,

        },

        password: {
            type: String,
            required: true,
        },
        whatsappNumber :{
            type: String,
            required: true,
        },
        contactNumber :{
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "Admin", "SuperAdmin"],
            default: "user",
            required: true,
        },
        isSubcription:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Service',
            }
        ],
        token: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);