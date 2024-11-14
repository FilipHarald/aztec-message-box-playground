import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { createPXEClient, waitForPXE } from "@aztec/aztec.js";
import { InboxAbi, OutboxAbi } from "@aztec/l1-artifacts";
import fs from "fs";
import path from "path";
import { GenericContractsDeclaration } from "../../nextjs/utils/scaffold-eth/contract";

const playground: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  console.log("Playground start!");
  const AZTEC_URL = "http://aztec-sandbox-node.localhost";
  const pxe = createPXEClient(AZTEC_URL);
  await waitForPXE(pxe);
  const info = await pxe.getNodeInfo();

  const contracts: GenericContractsDeclaration = {
    [info.l1ChainId]: {
      ["Inbox"]: {
        address: info.l1ContractAddresses.inboxAddress,
        abi: InboxAbi,
      },
      ["Outbox"]: {
        address: info.l1ContractAddresses.outboxAddress,
        abi: OutboxAbi,
      },
    },
  };

  const deployedContractsContent = `
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

export const deployedContracts: GenericContractsDeclaration = ${JSON.stringify(contracts, null, 2)};
`;

  const outputPath = path.join(__dirname, "..", "..", "nextjs", "contracts", "deployedContracts.ts");

  try {
    fs.writeFileSync(outputPath, deployedContractsContent);
    console.log(`Deployed contracts information written to ${outputPath}`);
  } catch (error) {
    console.error(`Error writing to ${outputPath}:`, error);
  }
};

export default playground;
