const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let venueSchema = new Schema({  
  group: { type: String, required: true },   
  measure: Number,
  date: { type: Date, default: Date.now }
}, { collection: 'venue' });


let Venue = mongoose.model("Venue", trendSchema);

module.exports = Venue;