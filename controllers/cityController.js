// src/controllers/cityController.js
const City = require("../models/cityModel");
const cityService = require("../services/cityService");

exports.addCity = async (req, res) => {
  try {
    const newCity = await cityService.createCity(req.body);
    res
      .status(201)
      .json({ message: "City created successfully", city: newCity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCity = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCity = await cityService.updateCityById(id, req.body);
    if (!updatedCity)
      return res.status(404).json({ message: "City not found" });
    res
      .status(200)
      .json({ message: "City updated successfully", city: updatedCity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCity = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCity = await cityService.deleteCityById(id);
    if (!deletedCity)
      return res.status(404).json({ message: "City not found" });
    res.status(200).json({ message: "City deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCities = async (req, res) => {
  const { page = 1, limit = 10, ...filters } = req.query;
  try {
    const { cities, totalPages } = await cityService.fetchCities(
      filters,
      parseInt(limit),
      parseInt(page)
    );
    res.status(200).json({ cities, totalPages, currentPage: page });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
