const { ethers, network } = require("hardhat");

module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;

  const telephoneAddress =
    chainId === 31337
      ? (await ethers.getContract("Telephone")).address
      : "0x4e099594eb999E90569399a2452Ee1f7672c582c";

  const telephoneHack = await deploy("TelephoneHack", {
    from: deployer,
    args: [telephoneAddress],
    log: true,
  });

  console.log("\tTelephoneHack is Deployed at : ", telephoneHack.address);
};

module.exports.tags = ["all", "TelephoneHack"];
