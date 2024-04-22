import { AptosClient, AptosAccount } from "aptos";

// Connect to the Aptos network
const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

// Create a new account
const account = new AptosAccount();

console.log("Account Address:", account.address());
