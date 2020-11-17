const fs =        require('fs');
const brandData = require("../data")
const trendData = require("../data")

///////////////////////////////////////
/// convert test data for emulate  ///
/////////////////////////////////////


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
      fs.writeFile(savPath, data, function (err) {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }

const convertBrand = (savPath, data) => {
    return new Promise(function (resolve, reject) {
      //
    })
  }
const convertTrend = (savPath, data) => {
    return new Promise(function (resolve, reject) {
      //
    })
  }
const results = await readFile('path')
results += ' test manipulation'
await writeFile('path', results)
// done writing file, can do other things