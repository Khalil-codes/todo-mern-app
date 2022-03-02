const mongoose = require("mongoose");

// Todo Schema
const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Please Add Text Field"],
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Todo", todoSchema);
