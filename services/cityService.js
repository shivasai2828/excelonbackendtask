// src/services/cityService.js
const City = require("../models/cityModel");

exports.createCity = async (cityData) => {
  const city = new City(cityData);
  return await city.save();
};

exports.updateCityById = async (id, cityData) => {
  return await City.findByIdAndUpdate(id, cityData, { new: true });
};

exports.deleteCityById = async (id) => {
  return await City.findByIdAndDelete(id);
};

exports.fetchCities = async (filters, limit, page) => {
  const cities = await City.find(filters)
    .limit(limit)
    .skip((page - 1) * limit)
    .exec();
  const count = await City.countDocuments(filters);
  return {
    cities,
    totalPages: Math.ceil(count / limit),
  };
};
