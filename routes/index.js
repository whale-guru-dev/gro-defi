var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/token-info', function(req, res, next) {
  res.render('tokens');
});

router.get('/Security', function(req, res, next) {
  res.render('security');
});

module.exports = router;
