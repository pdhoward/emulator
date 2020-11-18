
///////////////////////////////////////////////////////////////
////////           atlas code pattern                  ///////
//////            mainline processing                 ///////
////// c strategic machines 2018 all rights reserved ///////
///////////////////////////////////////////////////////////

const express =               require('express');
const path =                  require('path');
const { g, b, gr, r, y } =    require('../console');

// Express app
const app = express();
const Port = process.env.RUN_PORT || 5000

//////////////////////////////////////////////////////////////////////////
////////////////////  Register Middleware       /////////////////////////
////////////////////////////////////////////////////////////////////////

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../public')))

const isDev = (app.get('env') === 'development');
console.log('isDev: ' + isDev);

 //////////////////////////////////////////////////////
 ////////// Register and Config Routes ///////////////
 ////////////////////////////////////////////////////
const about =               express.Router()
const header =              express.Router()
const seed =                express.Router()
const venue =               express.Router()
const brand =               express.Router()
const trend =               express.Router()

require('../routes/about')(about)
require('../routes/seed')(seed)
require('../routes/header')(header)
require('../routes/venue')(venue)
require('../routes/brand')(brand)
require('../routes/trend')(trend)

/////////////////////////////////////////////////////////
/////////////////// API CATALOGUE //////////////////////
///////////////////////////////////////////////////////

app.use(header)
app.get('/about', about)
app.get('/seed', seed)
app.get('/api/venue', [venue])
app.get('/api/brand', [brand])
app.get('/api/trend', [trend])

// start server
app.listen(Port, () => console.log(`listening on port ${Port}`))
