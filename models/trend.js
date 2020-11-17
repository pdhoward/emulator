const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let trendSchema = new Schema({  
  group: { type: String, required: true },
  category: { type: String, required: true },  
  measure: Number,
  date: { type: Date, default: Date.now }
}, { collection: 'trend' });


let Trend = mongoose.model("Trend", trendSchema);

module.exports = Trend;