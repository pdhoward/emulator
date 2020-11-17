const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let brandsSchema = new Schema({  
  group: { type: String, required: true },
  category: { type: String, required: true },  
  measure: Number,
  date: { type: Date, default: Date.now }
}, { collection: 'brands' });

let Brands = mongoose.model("Brands", brandsSchema);

module.exports = Brands;