
var baseDir = process.cwd();
var express = require('express');
var router = express.Router();
var web3 = require(baseDir + '/modules/web3');


/* GET users listing. */
router.get('/grocirculation', async function(req, res, next) {
  let circulation = await web3.checkTotalCirculation();
    res.json({
        'circulation' : circulation
    });
});

module.exports = router;
