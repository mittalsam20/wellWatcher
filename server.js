//Packages
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");
const cors = require("cors");

//Intialization
const app = express();

// Server Middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Importing Routes
const Port = process.env.PORT || 5000;
const authRoute = require("./routes/auth");
const routerUrls = require("./routes/emailroute");

//DB Connection
dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => { console.log("Database connected..!!!") })
    .catch((e) => { console.log(e); });


//Multer Portion
app.use("/recording", express.static("upload"));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload")
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage
        // limits: { fileSize: 1024 * 1024 * 5 }
})

// Upload API
app.post("/app/upload", upload.single("recording"), (req, res) => {
    console.log(req.file);
    const recording_url = `/recording/${req.file.filename}`;
    const newrecording = new recording({
        recordingFileName: req.file.filename,
        recordingPath: req.file.path,
        recordingUrl: recording_url
    })
    console.log(req.file.path);
    console.log(recording_url);
    newrecording.save().then(data => {
            res.status(200).json(data);
            // console.log(json(data));
        }).catch(error => { res.status(500).json(error) })
        // res.status(200).json({
        //     success: 1,
        //     recording_url: recording_url,
        //     recodring_path:req.file.path
        // })
})




//Calling Of All Routes
app.use("/app", routerUrls);
app.use("/app", authRoute);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })
})

//Server Listening At This Port
app.listen(Port, () => { console.log(`Server has started listening on Port ${Port}`) })