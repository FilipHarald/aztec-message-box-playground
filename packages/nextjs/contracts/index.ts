import { deepMergeContracts } from "./utils";
import aztecContractsData from "~~/contracts/aztecContracts";
import deployedContractsData from "~~/contracts/deployedContracts";
import externalContractsData from "~~/contracts/externalContracts";

export const externalContracts = deepMergeContracts(externalContractsData, aztecContractsData);

export const contractsData = deepMergeContracts(deployedContractsData, externalContracts);
