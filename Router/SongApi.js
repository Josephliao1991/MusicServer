var express = require('express');
var router  = express.Router()
module.exports = router

var Controller = require('../Controller/Controller');

var tmpSong = [
  {
    name    : "XYZ",
    singer  : "AAA",
  },
  {
    name    : "WWW",
    singer  : "XXX",
  }
]

router.get('/Fetch', function (req, res) {
  /* localhost:8080?para1=1&para2=2 */

  /*Send To Controller*/
  res.json({success:true, message:"Fetch Success", code:200, data: tmpSong})
})


router.post('/New', function (req, res) {
  /* localhost:8080?para1=1&para2=2 */
  var name    = req.body.name
  var singer  = req.body.singer

  if (name == null || singer == null) {
    return res.json({success:false, message:"Lost Parameter", code:0})
  }

  var song = {
    name    : name,
    singer  : singer
  }
  tmpSong.push(song)

  /*Send To Controller*/
  res.json({success:true, message:"New Success", code:200})

})
