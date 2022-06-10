const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;

  if (chainId === 31337) {
    force = await deploy("Force", {
      from: deployer,
      args: [],
      log: true,
    });

    console.log("\tForce is Deployed at : ", force.address);
  }
};

module.exports.tags = ["all", "Force"];
