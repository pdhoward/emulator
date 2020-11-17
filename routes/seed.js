const {seeder} =              require('../seeders')

const seed = (router) => {
	router.use(async(req, res, next) => {    
        let data = await seeder()
        let html = `<h2>${data.result.n} records inserted!</h2>`
        res.send(html)
        next()
  })  
}

module.exports = seed
 
  
  
 

  
