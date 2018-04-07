 bitcoin = require('bitcoinjs-lib');

function rng () { return Buffer.from('zzzttyyzzzzzzzzzzzzzzzzzzzuuuzzz') }



var keyPair = bitcoin.ECPair.makeRandom({ network: bitcoin.networks.testnet, rng: rng })

console.log(keyPair.toWIF());

var key = bitcoin.ECPair.fromWIF(
'cRgnQe1TQngWfnsLo9YUExBjx3iVKNHu2ZfiRcUivATuojDdzdus',
 bitcoin.networks.testnet);

console.log(key.getAddress());
console.log(key.getPublicKeyBuffer().toString('hex'));
var tx = new bitcoin.TransactionBuilder(bitcoin.networks.testnet);
tx.addInput("1a66ddebd10d0d5c102339cf12955934dc60983cf760a111653c8aba0e6dac3b", 0);
tx.addOutput("mfhfG8BiHjMzmJoyeXavTUmSUxRAdpQ7Ce", 32489000);
tx.sign(0, key);
console.log(tx.build().toHex());

