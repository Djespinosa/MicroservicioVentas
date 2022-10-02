const express = require("express");
const router = express.Router();
const salesController = require("../controllers/salesController");

router.get("/", salesController.salesList)

module.exports = router;    