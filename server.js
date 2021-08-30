//Packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require('cookie-parser');

//Intialization
const app = express();
const Port = process.env.PORT || 5000;

// Server Middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Importing Routes
const authRoute = require("./routes/auth");

//DB Connection
dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}, () => console.log("Database Connected successfully..!!"));

//Calling of All Routes
app.use("/app", authRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client_side/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client_side", "build", "index.html"));
    })
}

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })
})


//Server Listening At This Port
app.listen(Port, () => { console.log(`Server has started listening on Port ${Port}`) })