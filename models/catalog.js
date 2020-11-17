const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// note in this schema, the collection is explicitly name, rather than
// relying on the default naming convention of mongo
let catalogSchema = new Schema({  
  productname: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: Number,
  date: { type: Date, default: Date.now }
}, { collection: 'catalog' });

catalogSchema.index({productname: "text", description: "text"})

let Catalog = mongoose.model("Catalog", catalogSchema);

module.exports = Catalog;