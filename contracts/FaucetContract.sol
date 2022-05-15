// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
	// Function called when you make a tx that doesn't specify function name to call.
	
	// External functions are part of the contract interface, which means they can be called from other contracts and/or txs.

  receive() external payable {}
}
