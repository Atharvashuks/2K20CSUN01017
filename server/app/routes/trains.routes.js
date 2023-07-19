const express = require("express");
const router = express.Router();

const { getALlTrains, getToken } = require("../controllers/trains.controller");

/* GET home page. */
// router.get("/showChars", showChars);

router.get("/getTrains", getALlTrains);
router.post("/getToken", getToken);

module.exports = router;

/*


*/
