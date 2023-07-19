const express = require("express");
const router = express.Router();

const { getALlTrains } = require("../controllers/trains.controller");

/* GET home page. */
// router.get("/showChars", showChars);

router.get("/getTrains", getALlTrains);

module.exports = router;

/*


*/
