import { createAztecNodeClient } from "@aztec/aztec.js";
import {
  InboxAbi,
  OutboxAbi,
  RollupAbi,
  FeeJuicePortalAbi,
} from "@aztec/l1-artifacts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_PATH = path.join(
  __dirname,
  "..",
  "packages",
  "nextjs",
  "contracts",
  "aztecContracts.ts"
);

async function generateDeployedContracts() {
  console.log("Generating deployed contracts...");
  const AZTEC_URL = "http://aztec-sandbox-node.localhost";
  const ETHEREUM_URL = "http://anvil-ethereum-node.localhost";
  const nodeClient = createAztecNodeClient(AZTEC_URL);

  const [l1ContractAddresses, chainId] = await Promise.all([
    nodeClient.getL1ContractAddresses(),
    nodeClient.getChainId(),
  ]);

  const contracts = {
    [chainId]: {
      Inbox: {
        address: l1ContractAddresses.inboxAddress.toString(),
        abi: InboxAbi,
      },
      Outbox: {
        address: l1ContractAddresses.outboxAddress.toString(),
        abi: OutboxAbi,
      },
      Rollup: {
        address: l1ContractAddresses.rollupAddress.toString(),
        abi: RollupAbi,
      },
      FeeJuicePortal: {
        address: l1ContractAddresses.feeJuicePortalAddress.toString(),
        abi: FeeJuicePortalAbi,
      },
    },
  };

  const chainConfig = {
    chainId: chainId,
    rpcUrl: ETHEREUM_URL,
  };

  const deployedContractsContent = `/**
 * This file is autogenerated by Scaffold-ETH (aztec-message-box)
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

export const chainConfig = ${JSON.stringify(chainConfig, null, 2)};

const aztecContracts = ${JSON.stringify(contracts, null, 2)} as const;

export default aztecContracts satisfies GenericContractsDeclaration;
`;
  await prettier.format(deployedContractsContent, { parser: "typescript" });

  try {
    fs.writeFileSync(OUTPUT_PATH, deployedContractsContent);
    console.log(`Deployed contracts information written to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error(`Error writing to ${OUTPUT_PATH}:`, error);
  }
}

generateDeployedContracts().catch(console.error);
