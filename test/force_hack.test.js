const { expect } = require("chai");
const { ethers, deployments, network } = require("hardhat");

describe("ForceHack", async () => {
  beforeEach(async function () {
    const chainId = network.config.chainId;
    if (chainId === 31337) await deployments.fixture(["Force"]);
    forceHack = await ethers.getContract("ForceHack");
    if (chainId !== 31337)
      force = await ethers.getContractAt(
        "Force",
        "0x458C026783bF0B90d2967E6315115b4CB821f1bE"
      );
    else force = await ethers.getContract("Force");
  });

  it("Should send the some tokens to force", async () => {
    tx = await forceHack.sendToForce(force.address, { value: 1000 });
    await tx.wait();
    const balance = await ethers.provider.getBalance(force.address);
    expect(balance.toNumber()).to.greaterThan(0);
  });
});
