const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");

describe("TelephoneHack", async () => {
  let owner;
  beforeEach(async function () {
    const { deployer } = await getNamedAccounts();
    owner = deployer;
    await deployments.fixture(["all"]);
    telephoneHack = await ethers.getContract("TelephoneHack");
    telephone = await ethers.getContract("Telephone");
  });

  it("Should change the owner of Telephone", async () => {
    for (let index = 0; index < 10; index++) {
      await telephoneHack.hackTelephone();
    }
    const newOwner = await telephone.owner();

    expect(newOwner).to.equal(owner);
  });
});
