const trendData =              require('../data/trend.json')

const trend = (router) => {
	router.use((req, res, next) => {  
        res.json(trendData)
        next()
  })  
}

module.exports = trend
 
  
  
 

  
