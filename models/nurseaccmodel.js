const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const nurseSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    adminRights: {
        type: Boolean,
        default: false
    },
    password: { type: String, required: true },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    date: { type: Date, default: Date.now }
})

nurseSchema.methods.generateAuthToken = async function() {
    let curtoken = jwt.sign({ _id: this._id }, "illbethebestworkharder")
    this.tokens = this.tokens.concat({ token: curtoken })
    await this.save();
    return curtoken;
}

module.exports = mongoose.model("nurse", nurseSchema);