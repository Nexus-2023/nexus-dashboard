//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SSVToken is ERC20{

    constructor() ERC20("SSV Token", "SSV") {
        _mint(msg.sender, 1000000000000000000000);
    }

}