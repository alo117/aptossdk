import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';
import { Account } from './account';

// Set up Aptos client with custom configuration
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);

async function main() {
  // Fetch data from the Aptos chain
  const ledgerInfo = await aptos.getLedgerInfo();
  console.log('Ledger Info:', ledgerInfo);
}

const aliceAccount = new Account('0x1234', 1000);
console.log('Alice Account:', aliceAccount);

aptos.getLedgerInfo().then((ledgerInfo) => {
  console.log('Ledger Info:', ledgerInfo);

main().catch(console.error);