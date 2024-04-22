import { Aptos } from '@aptos-labs/ts-sdk';

// Set up Aptos
const aptos = new Aptos(); // default to devnet

// Fetch data from the chain
const ledgerInfo = await aptos.getLedgerInfo();
const modules = await aptos.getAccountModules({ accountAddress: "0x123" });
const tokens = await aptos.getAccountOwnedTokens({ accountAddress: "0x123" });

// Transfer APT coin transaction
const transaction = await aptos.transferCoinTransaction({
  sender: alice,
  recipient: "0xbob", // Example recipient address
  amount: 100,
});
const pendingTransaction = await aptos.signAndSubmitTransaction({
  signer: alice,
  transaction,
});

// Build and submit transaction
// (Code for generating account key pair, funding account, building transaction, and submitting transaction)
