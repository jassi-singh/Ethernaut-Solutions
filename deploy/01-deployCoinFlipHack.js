const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;

  const coinFlipAddress =
    chainId === 31337
      ? (await ethers.getContract("CoinFlip")).address
      : "0x37456850971E6Fd71bA6e7B95C45664aaE857bc9"; /// put instance of CoinFlip contract here

  const coinFlipHack = await deploy("CoinFlipHack", {
    from: deployer,
    args: [coinFlipAddress],
    log: true,
  });

  console.log("\tCoinFlipHack is Deployed at : ", coinFlipHack.address);
};

module.exports.tags = ["all", "CoinFlip", "CoinFlipHack"];
