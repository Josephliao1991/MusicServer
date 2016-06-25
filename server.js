var constants       = require(process.cwd()+'/Constants/Constants');
var bodyparser      = require('body-parser');
var methodOverride  = require('method-override');
var express         = require('express');



/* Express App Setting */
var app     = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
// app.use(bodyparser.urlencoded(
//   { extended: true,
//     parameterLimit: 200, //Params Maxmin
//     limit: 100*1024 //default 100k
//   }))

/* ::JSON:: http://jsonapi.org */
app.use(bodyparser.json({ type: 'application/vnd.api+json' }))
// app.use(bodyparser.json(
// { type: 'application/vnd.api+json',
//   parameterLimit: 200,  //Params Maxmin,
//   limit:100*1024 //default 100k
// }))

app.use(methodOverride())

/* Home Page Test */
app.get('/', function (req, res) {
  res.send("[Server] : Hellow World!")
})


/* Router */
var router = require('./Router/router');
app.use('/Song', router)



/* Set Server Start Listen */
app.listen(constants.SERVER_PORT, function (error) {
  // body...
  if (error) {
    return console.log(error);
  }
  console.log("Server Is Start At "+constants.SERVER_PORT+" !!!");
})
