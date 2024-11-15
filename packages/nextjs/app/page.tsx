"use client";

import { useState } from "react";
import Link from "next/link";
import { L1ContractAddresses } from "@aztec/ethereum";
import { FeeJuicePortalAbi, InboxAbi, OutboxAbi, RollupAbi } from "@aztec/l1-artifacts";
import { JSONRPCClient } from "json-rpc-2.0";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { l2Config } from "~~/aztec.config";
import { InputBase } from "~~/components/scaffold-eth";
import { deepMergeContracts } from "~~/contracts/utils";
import { useGlobalState } from "~~/services/store/store";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const getAztecNodeClient = (aztecNodeAddress: string) => {
  const client: JSONRPCClient = new JSONRPCClient(jsonRPCRequest =>
    fetch(aztecNodeAddress, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jsonRPCRequest),
    }).then(response => {
      if (response.status === 200) {
        // Use client.receive when you received a JSON-RPC response.
        return response.json().then(jsonRPCResponse => client.receive(jsonRPCResponse));
      } else if (jsonRPCRequest.id !== undefined) {
        return Promise.reject(new Error(response.statusText));
      }
    }),
  );
  return client;
};

const Home: NextPage = () => {
  // TODO: add state for Aztec node address
  const [aztecNodeAddress, setAztecNodeAddress] = useState<string>(l2Config.rpcUrl);
  const oldContracts = useGlobalState(({ freshContractsData }) => freshContractsData);
  const setFreshContractsData = useGlobalState(({ setFreshContractsData }) => setFreshContractsData);

  const onChange = (value: string) => {
    setAztecNodeAddress(value);
  };
  const onSubmit = () => {
    const client = getAztecNodeClient(aztecNodeAddress);
    Promise.all([client.request("node_getL1ContractAddresses", []), client.request("node_getChainId", [])]).then(
      res => {
        const l1ContractAddresses = res[0] as L1ContractAddresses;
        const chainId = res[1] as number;
        console.log(l1ContractAddresses, chainId);
        const newContracts = {
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
        } as GenericContractsDeclaration;
        setFreshContractsData(deepMergeContracts(oldContracts, newContracts));
      },
    );
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Aztec Message Box</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            You can update the smart contracts from connected chain by entering the address to the Aztec node and
            clicking "update".
          </div>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            After that you can tinker and explore just like you would on a local chain.
          </div>
          <InputBase
            name="aztec-node-address"
            value={aztecNodeAddress}
            placeholder="Aztec Node Address"
            onChange={onChange}
          />
          <button className="btn btn-primary mt-4" onClick={onSubmit}>
            SUBMIT
          </button>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
