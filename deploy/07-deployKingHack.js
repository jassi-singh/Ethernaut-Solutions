const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  kingHack = await deploy("KingHack", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log("\tKingHack is Deployed at : ", kingHack.address);
};

module.exports.tags = ["all", "King", "KingHack"];
