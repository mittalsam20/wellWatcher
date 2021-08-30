const express = require("express");
const router = express.router();
cont bodyparser = require("body-parser");
const bcrypt = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));