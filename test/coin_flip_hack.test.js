const { expect } = require("chai");
const { ethers, deployments, waffle, network } = require("hardhat");

describe("CoinFlipHack", async () => {
  let coinFlipHack, coinFlip;
  beforeEach(async function () {
    const chainId = network.config.chainId;
    if (chainId === 31337) {
      await deployments.fixture(["CoinFlipHack", "CoinFlip"]);
      coinFlipHack = await ethers.getContract("CoinFlipHack");
      coinFlip = await ethers.getContract("CoinFlip");
    } else {
      coinFlipHack = await ethers.getContractAt(
        "CoinFlipHack",
        "0x3cF8Ddac0dF8e842e47a6B4EF73999eF5DacA006"
      );
      coinFlip = await ethers.getContractAt(
        "CoinFlip",
        "0x37456850971E6Fd71bA6e7B95C45664aaE857bc9"
      );
    }
  });

  it("Should win 10 times in a row", async () => {
    for (let index = 0; index < 10; index++) {
      const tx = await coinFlipHack.hackCoinFlip();
      await tx.wait();
    }
    const wins = await coinFlip.consecutiveWins();
    expect(Number(wins)).to.greaterThanOrEqual(10);
  });
});
