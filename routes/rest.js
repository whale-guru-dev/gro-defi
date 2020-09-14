
var baseDir = process.cwd();
var express = require('express');
var router = express.Router();
var web3 = require(baseDir + '/modules/web3');


router.get('/grocirculation', async function(req, res, next) {
  let circulation = await web3.checkTotalCirculation();
    res.send(circulation.toString())
});

router.get('/totalsupply', async function(req, res, next) {
    let totalsupply = await web3.checkTotalSupply();
    res.send(totalsupply.toString())
});

module.exports = router;
