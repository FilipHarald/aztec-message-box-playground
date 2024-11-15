"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  // TODO: add state for Aztec node address
  // TODO: add onSubmit function for updating smart contracts
  //    1. retreive chainId from Aztec node
  //    2. retreive contract-addresses from Aztec node
  //    3. update aztecContracts with addresses and ABIs (for correct chainId)
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
          {/* TODO: add input for Aztec node address */}
          {/* TODO: add button for submit */}
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
