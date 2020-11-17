
const mongoose =            require("mongoose");
const { g, b, gr, r, y } =  require('../console')
const db =                  require("../models");
const {catalogSeed} =         require("../data")

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/uncc", {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// seed the database with a fresh set of documents

const seeder = () => {
  return new Promise((resolve, reject) => {
    db.Catalog.deleteMany({})
      .then((result) => {    
        console.log(`${result.deletedCount} records deleted!`)
      })
      .then(() => db.Catalog.collection.insertMany(catalogSeed))
      .then(data => {
        console.log(g(`${data.result.n} records inserted!`)); 
        resolve(data)   
      })
      .catch(err => {
        reject(err)       
      });
  })
}

module.exports = {
  seeder
}

