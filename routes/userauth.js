const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

//Initializing
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
const user = require("../models/signupmodels");
const AuthMid = require("../middleware/authmid");


router.post("/signup", async(req, res) => {
    try {

        if (!req.body.emailId ||
            !req.body.password ||
            !req.body.fullName
        ) {
            console.log("please fill all the details..!!")
            return res
                .status(400)
                .json({ message: "Please Fill All The Details..!!" });
        } else if (req.body.password.length < 8) {
            return res
                .status(400)
                .json({ message: "Minimum Password Length Is 8 Characters" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        console.log(hashedPass);
        const userExist = await user.findOne({ emailId: req.body.emailId });
        console.log(userExist);
        if (userExist) {
            res.status(400).json({ message: "Email-Id Already Registered..!!" });
        }
        console.log("1")
        const newUser = new user({
            fullName: req.body.fullName,
            emailId: req.body.emailId,
            password: hashedPass,
        });
        console.log(req.body.emailId);
        newUser
            .save()
            .then((data) => {
                res.status(200).json({
                    message: "Registration Successfull..!!",
                    data,
                });
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post("/login", async(req, res) => {
    try {
        let token;
        // console.log(req.data)
        console.log(req.body);
        console.log(req.body.logEmail);
        console.log(req.body.logPass);
        if (!req.body.logEmail || !req.body.logPass) {
            return res
                .status(400)
                .json({ message: "Please Fill All The Details..!!" });
        }
        const userLogin = await user.findOne({ emailId: req.body.logEmail });
        if (userLogin === null) {
            console.log("inside null");
            res
                .status(400)
                .json({ message: "Email-Id Not Recognized Please SignUp With Us" });
        } else {
            console.log("User Does Exist..!!", userLogin.emailId);
            const userLogPass = await bcrypt.compare(
                req.body.logPass,
                userLogin.password
            );
            // res.header('Access-Control-Allow-Origin', "*");
            // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            // res.header('Access-Control-Allow-Credentials', true);
            if (userLogin && userLogPass) {
                token = await userLogin.generateAuthToken();
                console.log("Server is getting token", token);
                res.cookie("stgUserToken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true,
                });
                console.log("Token Stored As Cookie..!!");
                console.log("user's Id", userLogin._id);
                res.status(200).json({ message: `Login SuccessFull..!!`, id: userLogin._id });

            } else {
                console.log("PassWord Entered is", userLogPass);
                return res.status(400).json({ "message": "InCorrect Password" });
            }
        }
    } catch (err) {
        console.log(err);
    }
});


router.patch("/resetpass/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log(temp)
            const result = await user.findByIdAndUpdate(temp, req.body, { new: true });
            console.log(result);
            res.status(200).json({ message: "Password Updated..!!" });
        } else {
            res.status(404).json({ message: "Something went Wrong..!!" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get("/forgotpass/:emailid", async(req, res) => {
    try {
        const temp = req.params.emailid;
        if (temp !== null) {
            console.log(temp)
            const result = await user.findOne({ emailId: temp });
            console.log(result);
            if (result) {
                res.status(200).send(result);
            } else {
                res.status(404).json({ message: "Email Not Recognized Please Signup With Us..!!" });
            }
        } else {
            res.status(400).json({ message: "Please Fill The Email-Id Field..!!" });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})



router.get("/main", AuthMid, (req, res) => {
    console.log("entered in about");
    res.status(200).send(req.rootUser);
});

router.get("/logout", (req, res) => {
    console.log("loging out initiated");
    res.clearCookie("stgUserToken", { path: "/" });
    res.status(200).send("User LoggedOut");
});
module.exports = router;