require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind hole give nature swap task'; 
let testAccounts = [
"0xffb035bc097fe3a38c56325d573aeb4e5e07295436042e769931ec635a1701e7",
"0x22c20679c25f1d9bc5e69156c0fe9f0c8602be78427dedafd34ad9f7daf30159",
"0x566e8e6e572e68d9683964903a40eb183f2f8fdf25dd90ac6f6b1e439ecbda21",
"0x4ce302445808231a13ae5ed7ae10a8e4c36c81447e2a16efc10967eb561697b9",
"0xd1f00e54c8f8188c075b0b86d141dfa4923ca90ad81149b10fae9a1d88f8903e",
"0x065684cf2dab94699371c6c05a49a0c215fbacba3c2dbbbfa3fdae89bfa070a2",
"0xff1113c8c3e79c87ba57730657508ed6b717250fa982d95e6c5a08a96e0bec7f",
"0xf39b51066cfb6bc8429866ce22ed9b0ddbaa0f59596a6f72c1da55a8afb707c9",
"0xc6524b5e612eb50065fd3c66773eae2e6e8b151cf9302cadf6435fa3d14d1b32",
"0x7ad7c9369156f559854596ce49b5aae119d25a62cec1cf353935187fa8198e1b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

