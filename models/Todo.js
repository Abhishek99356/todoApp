const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: { // Fixed typo here
            type: String,
            required: true, // Changed 'require' to 'required'
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 50,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now, // Changed to function reference
        },
        updateAt: {
            type: Date,
            required: true,
            default: Date.now, // Changed to function reference
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);
