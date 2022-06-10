const { expect } = require("chai");
const { ethers, deployments, waffle } = require("hardhat");

describe("ForceHack", async () => {
  beforeEach(async function () {
    const { deployer } = await getNamedAccounts();
    owner = deployer;
    await deployments.fixture(["all"]);
    forceHack = await ethers.getContract("ForceHack");
    force = await ethers.getContract("Force");
  });

  it("Should send the some tokens to force", async () => {
    await forceHack.sendToForce(force.address, { value: 1000 });
    const balance = await waffle.provider.getBalance(force.address);
    expect(balance.toNumber()).to.greaterThan(0);
  });
});
