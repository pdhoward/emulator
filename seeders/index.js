
const mongoose =            require("mongoose");
const { g, b, gr, r, y } =  require('../console')
const db =                  require("../models");
const brandData =           require("../data/brand.json")
const trendData =           require("../data/trend.json")
const venueData =           require("../data/venue.json") 

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
    db.Venue.deleteMany({})
      .then((result) => { 
        console.log(`${result.deletedCount} Venue records deleted!`)
      })
      .then(() => db.Venue.collection.insertMany(venueData))
      .then(data => {
        console.log(g(`${data.result.n} Venue records inserted!`)); 
        resolve(data)   
      })
      .catch(err => {
        reject(err)       
      });
  })
}
//seeder()
module.exports = {
  seeder
}

