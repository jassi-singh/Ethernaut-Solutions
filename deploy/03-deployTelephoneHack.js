const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;

  const telephoneAddress =
    chainId === 31337
      ? (await ethers.getContract("Telephone")).address
      : "0xf6D58BA559bEE48102717b05d5eF53AdBDE93E54";

  const telephoneHack = await deploy("TelephoneHack", {
    from: deployer,
    args: [telephoneAddress],
    log: true,
  });

  console.log("\tTelephoneHack is Deployed at : ", telephoneHack.address);
};

module.exports.tags = ["all", "Telephone", "TelephoneHack"];
