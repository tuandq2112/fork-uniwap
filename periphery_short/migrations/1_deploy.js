require('dotenv').config();
const UniswapV2Router02 = artifacts.require('UniswapV2Router02');
const { WETH } = require('../constant');

module.exports = async function(deployer) {
  try {
    await deployer.deploy(
      UniswapV2Router02,
      '0xb1D4813c9802e7bC3c5076F17D62c4A0312Ea795' /* Replace your factory address at here */,
      WETH,
      {
        gas: 8000000,
        from: process.env.OPERATOR_ADDRESS,
      }
    );
  } catch (err) {
    console.log(err);
  }
};
