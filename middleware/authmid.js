const user = require("../models/signupmodels")
const jwt = require("jsonwebtoken")

const AuthMid = async(req, res, next) => {
    try {
        const token = req.cookies.stgUserToken;
        console.log("reached");
        console.log(token);
        const verifyToken = jwt.verify(token, "illbethebestworkharder")
        console.log("verifying token true or not", verifyToken)
        const rootUser = await user.findOne({ _id: verifyToken._id, "tokens.token": token })
        if (!rootUser) { throw new Error("User Not Found..!!") }
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (err) {
        res.status(401).send("UnAuthorized:No Token is Being Provided.")
        console.log(err);
    }
}
module.exports = AuthMid;