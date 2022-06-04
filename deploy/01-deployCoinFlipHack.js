const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;

  const coinFlipAddress =
    chainId === 31337
      ? (await ethers.getContract("CoinFlip")).address
      : "0x4dF32584890A0026e56f7535d0f2C6486753624f";

  const coinFlipHack = await deploy("CoinFlipHack", {
    from: deployer,
    args: [coinFlipAddress],
    log: true,
  });

  console.log("\tCoinFlipHack is Deployed at : ", coinFlipHack.address);
};

module.exports.tags = ["all", "CoinFlipHack"];
