require("dotenv").config();

var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    develop: {
      host: "localhost",
      port: 7545, // Match default network 'ganache'
      network_id: 5777,
      gas: 6721975, // Truffle default development block gas limit
      gasPrice: 200000000000,
      solc: {
        version: "0.5.0",
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
    ropsten: {
      networkCheckTimeout: 100000,
      provider: function() {
        return new HDWalletProvider(
          process.env.OPERATOR_PRIVATE_KEY,
          "https://ropsten.infura.io/v3/".concat(process.env.INFURA_PROJECT_ID)
        );
      },
      network_id: 3,
      gas: 6721975,
    },
    bsctestnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.OPERATOR_PRIVATE_KEY,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      from: 0,
    },
  },
  rpc: {
    host: "localhost",
    post: 8080,
  },
  mocha: {
    useColors: true,
  },
  compilers: {
    solc: {
      version: "0.6.6",
    },
  },
};
