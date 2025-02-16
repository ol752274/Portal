const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@iiits\.in$/, "Only institute emails allowed"],
    },
    hostel: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
