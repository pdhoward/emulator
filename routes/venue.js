const venueData =              require('../data/venue.json')

const venue = (router) => {
	router.get((req, res, next) => {  
        res.json(venueData)
        next()
  })  
}

module.exports = seed
 
  
  
 

  
