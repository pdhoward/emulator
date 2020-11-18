const trendData =              require('../data/trend.json')

const trend = (router) => {
	router.get((req, res, next) => {  
        res.json(trendData)
        next()
  })  
}

module.exports = trend
 
  
  
 

  
