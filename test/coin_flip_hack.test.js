const { expect } = require("chai");
const { ethers, deployments, waffle, network } = require("hardhat");

describe("CoinFlipHack", async () => {
  beforeEach(async function () {
    await deployments.fixture(["all"]);
    coinFlipHack = await ethers.getContract("CoinFlipHack");
    coinFlip = await ethers.getContract("CoinFlip");
  });

  it("Should win 10 times in a row", async () => {
    for (let index = 0; index < 10; index++) {
      await coinFlipHack.hackCoinFlip();
    }
    const wins = await coinFlip.consecutiveWins();

    expect(wins).to.equal(10);
  });
});
