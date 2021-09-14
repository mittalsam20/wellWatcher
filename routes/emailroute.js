const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser")
const fetch = require("node-fetch");
router.use(bodyParser.urlencoded({ extended: false }));

router.post("/selfproxy/:Email", (req, res) => {
    try {
        const Key = "ji5gzJYlaRp86krIbRJsRcOHBxnaLzMc"
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://ipqualityscore.com/api/json/email/${Key}/${req.params.Email}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                // console.log(data.valid)
                if (
                    data.valid &&
                    data.overall_score > 2 &&
                    data.smtp_score > 1 &&
                    !data.disposable &&
                    data.dns_valid &&
                    !data.honeypot
                ) {
                    res.status(200).json({ message: "Email is Correct" })
                } else {
                    res.json({ message: "Invalid Email..!!" })
                }
            })
            .catch(error => console.log('error', error));
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;