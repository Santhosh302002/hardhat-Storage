const { ethers, run, network } = require('hardhat')
require("dotenv").config()

async function main() {

  console.log("Deploying..")
  const transcation = await ethers.getContractFactory("simpleStorage")
  const contract = await transcation.deploy()
  await contract.deployed()
  console.log("Deployed..")
  console.log(contract.address)
  const Nmae = await contract.storeInformation("san", "0128")
  const Nmae1 = await contract.storeInformation("santhosh", "0129")
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    verify(contract.address, [])
  }
  const ans1 = await contract.reteiveInfoName(0);
  const ans2 = await contract.reteiveInfoReg(0);
  // const ans = await contract.storeNumber("10")
  // const rev = await contract.reteiveNumver()
  console.log(ans1);
  console.log(ans2);


}
async function verify(contractAdress, args) {
  try {
    await run("verify:verify", {
      address: contractAdress,
      constructorArguments: args,
    }
    )
  } catch (e) {

  }
}
main()
