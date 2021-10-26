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