import { createAztecNodeClient } from "@aztec/aztec.js";
import { InboxAbi, OutboxAbi, RollupAbi, FeeJuicePortalAbi } from "@aztec/l1-artifacts";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateDeployedContracts() {
  console.log("Generating deployed contracts...");
  const AZTEC_URL = "http://aztec-sandbox-node.localhost";
  const ETHEREUM_URL = "http://anvil-ethereum-node.localhost";
  const nodeClient = createAztecNodeClient(AZTEC_URL);
  const info = await nodeClient.getNodeInfo();

  const contracts = {
    [info.l1ChainId]: {
      Inbox: {
        address: info.l1ContractAddresses.inboxAddress.toString(),
        abi: InboxAbi,
      },
      Outbox: {
        address: info.l1ContractAddresses.outboxAddress.toString(),
        abi: OutboxAbi,
      },
      Rollup: {
        address: info.l1ContractAddresses.rollupAddress.toString(),
        abi: RollupAbi,
      },
      FeeJuicePortal: {
        address: info.l1ContractAddresses.feeJuicePortalAddress.toString(),
        abi: FeeJuicePortalAbi,
      },
    },
  };

  const chainConfig = {
    chainId: info.l1ChainId,
    rpcUrl: ETHEREUM_URL,
   };
  const deployedContractsContent = `
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

export const chainConfig = ${JSON.stringify(chainConfig, null, 2)};

const deployedContracts: GenericContractsDeclaration = ${JSON.stringify(contracts, null, 2)};

export default deployedContracts;
`;

  const outputPath = path.join(__dirname, '..', 'packages', 'nextjs', 'contracts', 'deployedContracts.ts');

  try {
    fs.writeFileSync(outputPath, deployedContractsContent);
    console.log(`Deployed contracts information written to ${outputPath}`);
  } catch (error) {
    console.error(`Error writing to ${outputPath}:`, error);
  }
};

generateDeployedContracts().catch(console.error);
