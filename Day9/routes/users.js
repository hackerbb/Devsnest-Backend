var express = require('express');
var router = express.Router();
var app = express()
const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')))
// router.use(express.static(public\\images\\'))
/* GET users listing. */
router.get('/file/:name', function (req, res, next) {
  let html = '<!Doctype><head></head><body><div><em>Update url to download file (ex http://localhost:3000/users/file/download2.jfif)</em> <div></body>'
  res.send(html)
  res.sendFile(req.params.name, { root: 'public\\images\\'} );
})

module.exports = router;
