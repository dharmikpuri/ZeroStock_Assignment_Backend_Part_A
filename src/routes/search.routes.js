const express = require("express");
const router = express.Router();

const { getAllInventory } = require("../controllers/search.controller");

// GET /api/search
router.get("/search", getAllInventory);

module.exports = router;