const { ethers } = require('hardhat')

async function main() {


  const transcation = await ethers.getContractFactory("simpleStorage")

  const contract = await transcation.deploy()
  await contract.deployed()
  // console.log(contract)
  const Nmae = await contract.storeInformation("san", "0128")
  const Nmae1 = await contract.storeInformation("santhosh", "0129")
  const ans = await contract.reteiveInfo(1);
  console.log(ans);

}
main()