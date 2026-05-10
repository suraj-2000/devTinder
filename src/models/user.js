const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
    },
    emailId: {
        type:String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        default: 25
    },

    gender: {
        type: String,
        validate(value) {
            if(!["male","female","others"].includes(value)) {
                throw new Error("Gender is not valid");
            }
        }
    }
},{timestamps: true});

module.exports = mongoose.model("User", userSchema);