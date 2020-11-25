var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Security', function(req, res, next) {
  res.render('security');
});

router.get('/tokens', function(req, res, next) {
  res.render('tokens');
});


module.exports = router;
