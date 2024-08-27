
const express = require("express");
const {
  addCity,
  updateCity,
  deleteCity,
  getCities,
} = require("../controllers/cityController");

const router = express.Router();

router.post("/cities", addCity);
router.put("/cities/:id", updateCity);
router.get("/cities", getCities);
router.delete("/cities/:id", deleteCity);

module.exports = router;
