const brandData =              require('../data/brand.json')

const brand = (router) => {
	router.use((req, res, next) => {  
        res.json(brandData)
        next()
  })  
}

module.exports = brand
 
  
  
 

  
