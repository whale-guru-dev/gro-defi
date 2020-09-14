var baseDir = process.cwd();
var Web3 = require('web3');

async function checkTotalCirculation() {
    const contractABI = require(baseDir + '/modules/web3/contracts/tokenContract.json');
    const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/22b3a0111f044886851607de576d0253'));

    try {
        const totalBalance = 1000000000000000000000000/Math.pow(10, 18);

        const contractInstance = await new web3.eth.Contract(contractABI, "0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0");
    
        let selfBalance = await contractInstance.methods.balanceOf("0x9d2197c5f0ca91b460ecba5becf47e51308d3ca3").call();
        selfBalance = selfBalance / Math.pow(10, 18);
    
        let walletBalance = await contractInstance.methods.balanceOf("0x7674d2a14076e8af53ac4ba9bbcf0c19febe8899").call();
        walletBalance = walletBalance / Math.pow(10, 18);
    
        let circulation = totalBalance - selfBalance - walletBalance;
        
        return circulation;
    } catch(error) {
        console.log(error);
    }
}

exports.checkTotalCirculation = checkTotalCirculation;


async function checkTotalSupply() {
    const contractABI = require(baseDir + '/modules/web3/contracts/tokenContract.json');
    const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/22b3a0111f044886851607de576d0253'));

    try {
        const contractInstance = await new web3.eth.Contract(contractABI, "0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0");

        let totalBalance = await contractInstance.methods.totalSupply().call();
        totalBalance = totalBalance / Math.pow(10, 18);

        return totalBalance.toFixed(18);
    } catch(error) {
        console.log(error);
    }
}

exports.checkTotalSupply = checkTotalSupply;