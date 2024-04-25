import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';

// Set up Aptos client with custom configuration
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);

async function main() {
  // Fetch data from the Aptos chain
  const ledgerInfo = await aptos.getLedgerInfo();
  console.log('Ledger Info:', ledgerInfo);
}

main().catch(console.error);