const fs =          require('fs');
const {venueData} = require("../data")
const {brandData} = require("../data")
const {trendData} = require("../data")

///////////////////////////////////////
/// convert test data for emulate  ///
/////////////////////////////////////
const trendCategory = {
    '2008': 'August',
    '2009': 'September',
    '2010': 'October',
    '2011': 'November',
    '2012': 'December'
    
}
const sumTrendCategory = {
    'August': 0,
    'September': 0,
    'October': 0,
    'November': 0,
    'December': 0
    
}

const sumDecemberBrandMessages = {
    'Nabisco': 0,
    'Kraft': 0,
    'Kelloggs': 0,
    'P&G': 0,
    'Coca-Cola': 0
}
const brandCategory = {
    'Oranges': 'Nabisco',
    'Apples': 'Kraft',
    'Grapes': 'Kelloggs',
    'Figs': 'P&G',
    'Mango': 'Coca-Cola'
   
}
const venueGroups = {
    'Sam': 'City Market',
    'Peter': 'Main Market',
    'John': 'Country Market',
    'Rick': 'Little Market',
    'Lenny': 'Up Market',
    'Paul': 'New Market',
    'Steve': 'Fresh Market',
    'All': 'All'
}

const readFile = (srcPath) => {
    return new Promise(function (resolve, reject) {
      fs.readFile(srcPath, 'utf8', function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
  
const writeFile = (savPath, data) => {
    return new Promise(function (resolve, reject) {
      fs.writeFile(savPath, JSON.stringify(data, null, 2), function (err) {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
const convertVenue = (savPath, data) => {
    return new Promise(function (resolve, reject) {
      //
    })
  }
const convertBrand = (savPath, data) => {
    return new Promise(function (resolve, reject) {
      //
    })
  }
const convertTrend = (data) => {
    return new Promise(function (resolve, reject) {
      let result = data.map(d => {
         let n = {} 
         n.group = venueGroups[d.group]
         n.category = trendCategory[d.category]
         n.measure = Math.floor(Math.random() * 10000) + 750
         sumTrendCategory[n.category] = sumTrendCategory[n.category] + n.measure
         return n
      }).map(t => {
        if (t.group === 'All') {
            t.measure = sumTrendCategory[t.category]
        }
        return t
      })
      resolve(result)
    })
  }

const process = async () => {
    const results = await convertTrend(trendData)
    console.log(results)
    await writeFile('./data/trend.json', results)
    // done writing file, can do other things
}

process()
