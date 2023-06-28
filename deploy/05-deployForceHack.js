const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const forceHack = await deploy("ForceHack", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log("\tForceHack is Deployed at : ", forceHack.address);
};

module.exports.tags = ["all", "Force", "ForceHack"];
