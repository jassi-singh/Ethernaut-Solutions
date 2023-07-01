const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer, deployer2 } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;

  if (chainId === 31337) {
    king = await deploy("King", {
      from: deployer2,
      args: [],
      log: true,
      value: 1000000
    });

    console.log("\tKing is Deployed at : ", king.address);
  }
};

module.exports.tags = ["all", "King"];
