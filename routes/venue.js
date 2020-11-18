const venueData =              require('../data/venue.json')

const venue = (router) => {
	router.use((req, res, next) => {  
        res.json(venueData)
        next()
  })  
}

module.exports = venue
 
  
  
 

  
