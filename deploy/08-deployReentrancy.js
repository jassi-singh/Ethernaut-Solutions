module.exports = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  reentrance = await deploy("Reentrance", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log("\tReentrance is Deployed at : ", reentrance.address);
};

module.exports.tags = ["all", "Reentrance"];
