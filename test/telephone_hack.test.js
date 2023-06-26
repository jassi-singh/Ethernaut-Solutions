const { expect } = require("chai");
const { ethers, deployments, network } = require("hardhat");

describe("TelephoneHack", async () => {
  const chainId = network.config.chainId;
  let owner, telephoneHack, telephone;
  beforeEach(async function () {
    if (chainId === 31337) {
      await deployments.fixture(["Telephone", "TelephoneHack"]);
      telephoneHack = await ethers.getContract("TelephoneHack");
      telephone = await ethers.getContract("Telephone");
      owner = await telephone.owner();
    } else {
      telephoneHack = await ethers.getContractAt(
        "TelephoneHack",
        "0x9A5b833df27376Baa6B5538c38d127EA5bc085aE"
      );
      telephone = await ethers.getContractAt(
        "Telephone",
        "0xf6D58BA559bEE48102717b05d5eF53AdBDE93E54"
      );
      owner = await telephone.owner();
    }
  });

  it("Should change the owner of Telephone", async () => {
    const tx = await telephoneHack.hackTelephone();
    await tx.wait();
    const newOwner = await telephone.owner();
    expect(newOwner).not.equal(owner);
  });
});
