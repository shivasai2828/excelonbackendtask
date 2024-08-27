const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const citySchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  name: { type: String, unique: true, required: true },
  population: { type: Number, required: true },
  country: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

module.exports = mongoose.model("City", citySchema);
