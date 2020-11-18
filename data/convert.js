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

const decemberVenueMeasure = {
  'City Market': 0,
  'Main Market': 0,
  'Country Market': 0,
  'Little Market': 0,
  'Up Market': 0,
  'New Market': 0,
  'Fresh Market': 0,
  'All': 0
  
}
const brandCategory = {
    'Oranges': 'Nabisco',
    'Apples': 'Kraft',
    'Grapes': 'Kelloggs',
    'Figs': 'P&G',
    'Mangos': 'Coca-Cola'
   
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
const convertVenue = () => {
    return new Promise(function (resolve, reject) {
      let venueArr = []
      for (const venue in decemberVenueMeasure){
          let obj = {}
          let measure = (decemberVenueMeasure[venue] / decemberVenueMeasure['All']).toFixed(2)
          if (venue != 'All'){
            obj.group = venue 
            obj.measure = measure
            venueArr.push(obj)
          }         
      }
      resolve(venueArr)
    })
  }
const convertBrand = (data) => {
    return new Promise(function (resolve, reject) {
      let result = data.map(d => {
        let n = {} 
        n.group = venueGroups[d.group]
        n.category = brandCategory[d.category]
        n.measure = Math.floor(Math.random() * 1000) + 120
        if (decemberVenueMeasure[n.group] > n.measure) {
          decemberVenueMeasure[n.group] = decemberVenueMeasure[n.group] - n.measure
        } else {
          n.measure = decemberVenueMeasure[n.group]
          decemberVenueMeasure[n.group] = 0
        }              
        return n
     })
    resolve(result)
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
        if (t.category === 'December') {
          decemberVenueMeasure[t.group] = t.measure
        }
        
        return t
      })
      resolve(result)
    })
  }

const process = async () => {
    console.log(`----TREND DATA ----`)
    let results = await convertTrend(trendData)
    console.log(results)
    console.log(decemberVenueMeasure)   
    await writeFile('./data/trend.json', results)

    console.log(`----VENUE DATA ----`)
    results = await convertVenue()
    console.log(results)      
    await writeFile('./data/venue.json', results)
    
    console.log(`------BRAND DATA -------`)
    results = await convertBrand(brandData)
    console.log(results)
    console.log(decemberVenueMeasure)  
    await writeFile('./data/brand.json', results)
    // done writing file, can do other things
}

process()
