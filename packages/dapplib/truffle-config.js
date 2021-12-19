require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rate sister pulp hunt deputy success shield'; 
let testAccounts = [
"0x4b0223e9b888219222af7dc14b46c018762b5269bcd0908225b1803b2d278fc4",
"0x18c2f6ab769f212b4977d932f11c00c5c64b885331fab7b1deadbfdbf3e17777",
"0x032f42bf58cd7c0358de090d69b9920fc0e31d1f2c0ef1fd94d1fb2ff65611d1",
"0x576d795a16487859524592fb52f66b7ad4e16b59e768f56b1f2bd362cbd40ca4",
"0x023314b493744c697b02801bf06742402b07e490e700e64e6b4756f673e1ef7d",
"0x1f91ff7004250238a0e1af77114ac3963719dddcafaf4e729fa6e4c30e69ceff",
"0x4b1160d7bb65ac19341299f5c5b25b39c072213447802752cf325de10c432889",
"0x33173a8c7fffd7da9ff071c802715f561c02fa59242a43128b1e39ae97891c81",
"0x7cbedc131f863b23d9120f75e982dfbfc935fc5a4491b492f8af1be9cf4dc79b",
"0x552abe00d4273126a02b4d8ce601b5894750143b5ff4ac323bb75207b83bfa1d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


