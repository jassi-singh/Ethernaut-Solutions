const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;

  if (chainId === 31337) {
    coinFlip = await deploy("CoinFlip", {
      from: deployer,
      args: [],
      log: true,
    });

    console.log("\tCoinFlip is Deployed at : ", coinFlip.address);
  }
};

module.exports.tags = ["all", "CoinFlip"];
