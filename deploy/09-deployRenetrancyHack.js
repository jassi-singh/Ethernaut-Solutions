module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  reentrance = await deploy("ReentranceHack", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log("\tReentranceHack is Deployed at : ", reentrance.address);
};

module.exports.tags = ["all", "Reentrance", "ReentranceHack"];
