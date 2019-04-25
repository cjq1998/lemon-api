var express = require('express');
var router = express.Router();
let { getUser } = require("./user-api");

router.get("/getUser", getUser);
module.exports = router;