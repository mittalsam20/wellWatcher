const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    patientName: {
        type: String,
        require: true,
        min: 3,
        max: 60,
    },
    gender: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
        min: 3,
        max: 200,
    },
    dob: {
        type: Date,
        require: true,
    },
    password: {
        type: String,
        require: true,
        min: 8,
        unique: true
    },
    dpic: {
        type: String,
        default: "",
    },
    coverpic: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        max: 60,
    },
    city: {
        type: String,
        max: 60,
    },
    from: {
        type: String,
        max: 50,
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3],
    }

}, { timestamps: true });


module.exports = mongoose.model("Patient", PatientSchema);