var express = require('express');
var router = express.Router();

const tokenController = require('../controller/tokenController')
//GET home page.

router.post("/check", function (req, res) {
    console.log(",,,,,,,,,check router,,,,,,,,,,,");
    tokenController(req, res)
});



module.exports = router;
