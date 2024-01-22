const express = require("express");
const { sendEmailConttroller } = require("../controllers/portfolioController");
const router = express.Router();

router.post("/sendEmail", sendEmailConttroller);

module.exports = router;
