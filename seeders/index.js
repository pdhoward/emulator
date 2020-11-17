
const mongoose =            require("mongoose");
const { g, b, gr, r, y } =  require('../console')
const db =                  require("../models");
const {brandData} =         require("../data")
const {trendData} =         require("../data")

mongoose.connect(process.env.ATLAS_METRICS || "mongodb://localhost/metrics", {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// seed the database with a fresh set of documents

const seeder = () => {
  return new Promise((resolve, reject) => {
    db.Brands.deleteMany({})
      .then((result) => {    
        console.log(`${result.deletedCount} Brand records deleted!`)
      })
      .then(() => db.Brands.collection.insertMany(brandData))
      .then(data => {
        console.log(g(`${data.result.n} Brand records inserted!`)); 
        resolve(data)   
      })
      .catch(err => {
        reject(err)       
      });
    
    db.Trend.deleteMany({})
      .then((result) => {    
        console.log(`${result.deletedCount} Trend records deleted!`)
      })
      .then(() => db.Trend.collection.insertMany(trendData))
      .then(data => {
        console.log(g(`${data.result.n} Trend records inserted!`)); 
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

