const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer, deployer2 } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;

  if (chainId === 31337) {
    telephone = await deploy("Telephone", {
      from: deployer2,
      args: [],
      log: true,
    });

    console.log("\tTelephone is Deployed at : ", telephone.address);
  }
};

module.exports.tags = ["all", "Telephone"];
