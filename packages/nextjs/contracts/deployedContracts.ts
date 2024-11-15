
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

export const chainConfig = {
  "chainId": 31337,
  "rpcUrl": "http://anvil-ethereum-node.localhost"
};

const deployedContracts: GenericContractsDeclaration = {
  "31337": {
    "Inbox": {
      "address": "0xed179b78d5781f93eb169730d8ad1be7313123f4",
      "abi": [
        {
          "type": "constructor",
          "inputs": [
            {
              "name": "_rollup",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "_height",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "ROLLUP",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "consume",
          "inputs": [
            {
              "name": "_toConsume",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "getRoot",
          "inputs": [
            {
              "name": "_blockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "inProgress",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "sendL2Message",
          "inputs": [
            {
              "name": "_recipient",
              "type": "tuple",
              "internalType": "struct DataStructures.L2Actor",
              "components": [
                {
                  "name": "actor",
                  "type": "bytes32",
                  "internalType": "bytes32"
                },
                {
                  "name": "version",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ]
            },
            {
              "name": "_content",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_secretHash",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "totalMessagesInserted",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "trees",
          "inputs": [
            {
              "name": "blockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "nextIndex",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "event",
          "name": "MessageSent",
          "inputs": [
            {
              "name": "l2BlockNumber",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
            },
            {
              "name": "index",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            },
            {
              "name": "hash",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
            }
          ],
          "anonymous": false
        },
        {
          "type": "error",
          "name": "Inbox__ActorTooLarge",
          "inputs": [
            {
              "name": "actor",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "Inbox__ContentTooLarge",
          "inputs": [
            {
              "name": "content",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "Inbox__MustBuildBeforeConsume",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Inbox__SecretHashTooLarge",
          "inputs": [
            {
              "name": "secretHash",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "Inbox__Unauthorized",
          "inputs": []
        }
      ]
    },
    "Outbox": {
      "address": "0x1016b5aaa3270a65c315c664ecb238b6db270b64",
      "abi": [
        {
          "type": "constructor",
          "inputs": [
            {
              "name": "_rollup",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "ROLLUP",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract Rollup"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "consume",
          "inputs": [
            {
              "name": "_message",
              "type": "tuple",
              "internalType": "struct DataStructures.L2ToL1Msg",
              "components": [
                {
                  "name": "sender",
                  "type": "tuple",
                  "internalType": "struct DataStructures.L2Actor",
                  "components": [
                    {
                      "name": "actor",
                      "type": "bytes32",
                      "internalType": "bytes32"
                    },
                    {
                      "name": "version",
                      "type": "uint256",
                      "internalType": "uint256"
                    }
                  ]
                },
                {
                  "name": "recipient",
                  "type": "tuple",
                  "internalType": "struct DataStructures.L1Actor",
                  "components": [
                    {
                      "name": "actor",
                      "type": "address",
                      "internalType": "address"
                    },
                    {
                      "name": "chainId",
                      "type": "uint256",
                      "internalType": "uint256"
                    }
                  ]
                },
                {
                  "name": "content",
                  "type": "bytes32",
                  "internalType": "bytes32"
                }
              ]
            },
            {
              "name": "_l2BlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "_leafIndex",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "_path",
              "type": "bytes32[]",
              "internalType": "bytes32[]"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "getRootData",
          "inputs": [
            {
              "name": "_l2BlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "root",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "minHeight",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "hasMessageBeenConsumedAtBlockAndIndex",
          "inputs": [
            {
              "name": "_l2BlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "_leafIndex",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bool",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "insert",
          "inputs": [
            {
              "name": "_l2BlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "_root",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_minHeight",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "event",
          "name": "MessageConsumed",
          "inputs": [
            {
              "name": "l2BlockNumber",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
            },
            {
              "name": "root",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
            },
            {
              "name": "messageHash",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
            },
            {
              "name": "leafIndex",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "RootAdded",
          "inputs": [
            {
              "name": "l2BlockNumber",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
            },
            {
              "name": "root",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
            },
            {
              "name": "minHeight",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "error",
          "name": "MerkleLib__InvalidRoot",
          "inputs": [
            {
              "name": "expected",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "actual",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "leaf",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "leafIndex",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Outbox__AlreadyNullified",
          "inputs": [
            {
              "name": "l2BlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "leafIndex",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Outbox__BlockNotProven",
          "inputs": [
            {
              "name": "l2BlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Outbox__InsertingInvalidRoot",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Outbox__InvalidChainId",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Outbox__InvalidPathLength",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Outbox__InvalidRecipient",
          "inputs": [
            {
              "name": "expected",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "actual",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "Outbox__NothingToConsumeAtBlock",
          "inputs": [
            {
              "name": "l2BlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Outbox__Unauthorized",
          "inputs": []
        }
      ]
    },
    "Rollup": {
      "address": "0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6",
      "abi": [
        {
          "type": "constructor",
          "inputs": [
            {
              "name": "_fpcJuicePortal",
              "type": "address",
              "internalType": "contract IFeeJuicePortal"
            },
            {
              "name": "_sysstia",
              "type": "address",
              "internalType": "contract ISysstia"
            },
            {
              "name": "_vkTreeRoot",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_protocolContractTreeRoot",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_ares",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "_validators",
              "type": "address[]",
              "internalType": "address[]"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "ASSET",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract IERC20"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "CLAIM_DURATION_IN_L2_SLOTS",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "EPOCH_DURATION",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "FEE_JUICE_PORTAL",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract IFeeJuicePortal"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "GENESIS_TIME",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Timestamp"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "INBOX",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract IInbox"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "L1_BLOCK_AT_GENESIS",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "OUTBOX",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract IOutbox"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "PROOF_COMMITMENT_ESCROW",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract IProofCommitmentEscrow"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "PROOF_COMMITMENT_MIN_BOND_AMOUNT_IN_TST",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "SLOT_DURATION",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "SYSSTIA",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract ISysstia"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "TARGET_COMMITTEE_SIZE",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "VERSION",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "addValidator",
          "inputs": [
            {
              "name": "_validator",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "archive",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "archiveAt",
          "inputs": [
            {
              "name": "_blockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "blocks",
          "inputs": [
            {
              "name": "blockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "archive",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "blockHash",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "slotNumber",
              "type": "uint256",
              "internalType": "Slot"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "canProposeAtTime",
          "inputs": [
            {
              "name": "_ts",
              "type": "uint256",
              "internalType": "Timestamp"
            },
            {
              "name": "_archive",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Slot"
            },
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "canPrune",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "bool",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "claimEpochProofRight",
          "inputs": [
            {
              "name": "_quote",
              "type": "tuple",
              "internalType": "struct EpochProofQuoteLib.SignedEpochProofQuote",
              "components": [
                {
                  "name": "quote",
                  "type": "tuple",
                  "internalType": "struct EpochProofQuoteLib.EpochProofQuote",
                  "components": [
                    {
                      "name": "epochToProve",
                      "type": "uint256",
                      "internalType": "Epoch"
                    },
                    {
                      "name": "validUntilSlot",
                      "type": "uint256",
                      "internalType": "Slot"
                    },
                    {
                      "name": "bondAmount",
                      "type": "uint256",
                      "internalType": "uint256"
                    },
                    {
                      "name": "prover",
                      "type": "address",
                      "internalType": "address"
                    },
                    {
                      "name": "basisPointFee",
                      "type": "uint32",
                      "internalType": "uint32"
                    }
                  ]
                },
                {
                  "name": "signature",
                  "type": "tuple",
                  "internalType": "struct SignatureLib.Signature",
                  "components": [
                    {
                      "name": "isEmpty",
                      "type": "bool",
                      "internalType": "bool"
                    },
                    {
                      "name": "v",
                      "type": "uint8",
                      "internalType": "uint8"
                    },
                    {
                      "name": "r",
                      "type": "bytes32",
                      "internalType": "bytes32"
                    },
                    {
                      "name": "s",
                      "type": "bytes32",
                      "internalType": "bytes32"
                    }
                  ]
                }
              ]
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "computeTxsEffectsHash",
          "inputs": [
            {
              "name": "_body",
              "type": "bytes",
              "internalType": "bytes"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "pure"
        },
        {
          "type": "function",
          "name": "eip712Domain",
          "inputs": [],
          "outputs": [
            {
              "name": "fields",
              "type": "bytes1",
              "internalType": "bytes1"
            },
            {
              "name": "name",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "version",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "chainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "verifyingContract",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "salt",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "extensions",
              "type": "uint256[]",
              "internalType": "uint256[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "epochProofVerifier",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract IVerifier"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "epochs",
          "inputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "outputs": [
            {
              "name": "sampleSeed",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "nextSeed",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getClaimableEpoch",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getCurrentEpoch",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getCurrentEpochCommittee",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address[]",
              "internalType": "address[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getCurrentProposer",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getCurrentSlot",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Slot"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getEpochAt",
          "inputs": [
            {
              "name": "_ts",
              "type": "uint256",
              "internalType": "Timestamp"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getEpochAtSlot",
          "inputs": [
            {
              "name": "_slotNumber",
              "type": "uint256",
              "internalType": "Slot"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "stateMutability": "pure"
        },
        {
          "type": "function",
          "name": "getEpochCommittee",
          "inputs": [
            {
              "name": "_epoch",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "address[]",
              "internalType": "address[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getEpochForBlock",
          "inputs": [
            {
              "name": "blockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getEpochProofPublicInputs",
          "inputs": [
            {
              "name": "_epochSize",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "_args",
              "type": "bytes32[7]",
              "internalType": "bytes32[7]"
            },
            {
              "name": "_fees",
              "type": "bytes32[]",
              "internalType": "bytes32[]"
            },
            {
              "name": "_aggregationObject",
              "type": "bytes",
              "internalType": "bytes"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bytes32[]",
              "internalType": "bytes32[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getEpochToProve",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getPendingBlockNumber",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getProposerAt",
          "inputs": [
            {
              "name": "_ts",
              "type": "uint256",
              "internalType": "Timestamp"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getProvenBlockNumber",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getSlotAt",
          "inputs": [
            {
              "name": "_ts",
              "type": "uint256",
              "internalType": "Timestamp"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Slot"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getTimestampForSlot",
          "inputs": [
            {
              "name": "_slotNumber",
              "type": "uint256",
              "internalType": "Slot"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "Timestamp"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getValidatorAt",
          "inputs": [
            {
              "name": "_index",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getValidatorCount",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getValidators",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address[]",
              "internalType": "address[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "isValidator",
          "inputs": [
            {
              "name": "_validator",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bool",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "owner",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "proofClaim",
          "inputs": [],
          "outputs": [
            {
              "name": "epochToProve",
              "type": "uint256",
              "internalType": "Epoch"
            },
            {
              "name": "basisPointFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bondAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bondProvider",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "proposerClaimant",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "propose",
          "inputs": [
            {
              "name": "_header",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "_archive",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_blockHash",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_txHashes",
              "type": "bytes32[]",
              "internalType": "bytes32[]"
            },
            {
              "name": "_signatures",
              "type": "tuple[]",
              "internalType": "struct SignatureLib.Signature[]",
              "components": [
                {
                  "name": "isEmpty",
                  "type": "bool",
                  "internalType": "bool"
                },
                {
                  "name": "v",
                  "type": "uint8",
                  "internalType": "uint8"
                },
                {
                  "name": "r",
                  "type": "bytes32",
                  "internalType": "bytes32"
                },
                {
                  "name": "s",
                  "type": "bytes32",
                  "internalType": "bytes32"
                }
              ]
            },
            {
              "name": "_body",
              "type": "bytes",
              "internalType": "bytes"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "proposeAndClaim",
          "inputs": [
            {
              "name": "_header",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "_archive",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_blockHash",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_txHashes",
              "type": "bytes32[]",
              "internalType": "bytes32[]"
            },
            {
              "name": "_signatures",
              "type": "tuple[]",
              "internalType": "struct SignatureLib.Signature[]",
              "components": [
                {
                  "name": "isEmpty",
                  "type": "bool",
                  "internalType": "bool"
                },
                {
                  "name": "v",
                  "type": "uint8",
                  "internalType": "uint8"
                },
                {
                  "name": "r",
                  "type": "bytes32",
                  "internalType": "bytes32"
                },
                {
                  "name": "s",
                  "type": "bytes32",
                  "internalType": "bytes32"
                }
              ]
            },
            {
              "name": "_body",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "_quote",
              "type": "tuple",
              "internalType": "struct EpochProofQuoteLib.SignedEpochProofQuote",
              "components": [
                {
                  "name": "quote",
                  "type": "tuple",
                  "internalType": "struct EpochProofQuoteLib.EpochProofQuote",
                  "components": [
                    {
                      "name": "epochToProve",
                      "type": "uint256",
                      "internalType": "Epoch"
                    },
                    {
                      "name": "validUntilSlot",
                      "type": "uint256",
                      "internalType": "Slot"
                    },
                    {
                      "name": "bondAmount",
                      "type": "uint256",
                      "internalType": "uint256"
                    },
                    {
                      "name": "prover",
                      "type": "address",
                      "internalType": "address"
                    },
                    {
                      "name": "basisPointFee",
                      "type": "uint32",
                      "internalType": "uint32"
                    }
                  ]
                },
                {
                  "name": "signature",
                  "type": "tuple",
                  "internalType": "struct SignatureLib.Signature",
                  "components": [
                    {
                      "name": "isEmpty",
                      "type": "bool",
                      "internalType": "bool"
                    },
                    {
                      "name": "v",
                      "type": "uint8",
                      "internalType": "uint8"
                    },
                    {
                      "name": "r",
                      "type": "bytes32",
                      "internalType": "bytes32"
                    },
                    {
                      "name": "s",
                      "type": "bytes32",
                      "internalType": "bytes32"
                    }
                  ]
                }
              ]
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "protocolContractTreeRoot",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "prune",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "quoteToDigest",
          "inputs": [
            {
              "name": "quote",
              "type": "tuple",
              "internalType": "struct EpochProofQuoteLib.EpochProofQuote",
              "components": [
                {
                  "name": "epochToProve",
                  "type": "uint256",
                  "internalType": "Epoch"
                },
                {
                  "name": "validUntilSlot",
                  "type": "uint256",
                  "internalType": "Slot"
                },
                {
                  "name": "bondAmount",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "prover",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "basisPointFee",
                  "type": "uint32",
                  "internalType": "uint32"
                }
              ]
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "removeValidator",
          "inputs": [
            {
              "name": "_validator",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "renounceOwnership",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "setAssumeProvenThroughBlockNumber",
          "inputs": [
            {
              "name": "blockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "setEpochVerifier",
          "inputs": [
            {
              "name": "_verifier",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "setProtocolContractTreeRoot",
          "inputs": [
            {
              "name": "_protocolContractTreeRoot",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "setVkTreeRoot",
          "inputs": [
            {
              "name": "_vkTreeRoot",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "setupEpoch",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "status",
          "inputs": [
            {
              "name": "myHeaderBlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "provenBlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "provenArchive",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "pendingBlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "pendingArchive",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "archiveOfMyBlock",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "provenEpochNumber",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "submitEpochRootProof",
          "inputs": [
            {
              "name": "_epochSize",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "_args",
              "type": "bytes32[7]",
              "internalType": "bytes32[7]"
            },
            {
              "name": "_fees",
              "type": "bytes32[]",
              "internalType": "bytes32[]"
            },
            {
              "name": "_aggregationObject",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "_proof",
              "type": "bytes",
              "internalType": "bytes"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "tips",
          "inputs": [],
          "outputs": [
            {
              "name": "pendingBlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "provenBlockNumber",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "transferOwnership",
          "inputs": [
            {
              "name": "newOwner",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "validateEpochProofRightClaimAtTime",
          "inputs": [
            {
              "name": "_ts",
              "type": "uint256",
              "internalType": "Timestamp"
            },
            {
              "name": "_quote",
              "type": "tuple",
              "internalType": "struct EpochProofQuoteLib.SignedEpochProofQuote",
              "components": [
                {
                  "name": "quote",
                  "type": "tuple",
                  "internalType": "struct EpochProofQuoteLib.EpochProofQuote",
                  "components": [
                    {
                      "name": "epochToProve",
                      "type": "uint256",
                      "internalType": "Epoch"
                    },
                    {
                      "name": "validUntilSlot",
                      "type": "uint256",
                      "internalType": "Slot"
                    },
                    {
                      "name": "bondAmount",
                      "type": "uint256",
                      "internalType": "uint256"
                    },
                    {
                      "name": "prover",
                      "type": "address",
                      "internalType": "address"
                    },
                    {
                      "name": "basisPointFee",
                      "type": "uint32",
                      "internalType": "uint32"
                    }
                  ]
                },
                {
                  "name": "signature",
                  "type": "tuple",
                  "internalType": "struct SignatureLib.Signature",
                  "components": [
                    {
                      "name": "isEmpty",
                      "type": "bool",
                      "internalType": "bool"
                    },
                    {
                      "name": "v",
                      "type": "uint8",
                      "internalType": "uint8"
                    },
                    {
                      "name": "r",
                      "type": "bytes32",
                      "internalType": "bytes32"
                    },
                    {
                      "name": "s",
                      "type": "bytes32",
                      "internalType": "bytes32"
                    }
                  ]
                }
              ]
            }
          ],
          "outputs": [],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "validateHeader",
          "inputs": [
            {
              "name": "_header",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "_signatures",
              "type": "tuple[]",
              "internalType": "struct SignatureLib.Signature[]",
              "components": [
                {
                  "name": "isEmpty",
                  "type": "bool",
                  "internalType": "bool"
                },
                {
                  "name": "v",
                  "type": "uint8",
                  "internalType": "uint8"
                },
                {
                  "name": "r",
                  "type": "bytes32",
                  "internalType": "bytes32"
                },
                {
                  "name": "s",
                  "type": "bytes32",
                  "internalType": "bytes32"
                }
              ]
            },
            {
              "name": "_digest",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_currentTime",
              "type": "uint256",
              "internalType": "Timestamp"
            },
            {
              "name": "_txsEffectsHash",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_flags",
              "type": "tuple",
              "internalType": "struct DataStructures.ExecutionFlags",
              "components": [
                {
                  "name": "ignoreDA",
                  "type": "bool",
                  "internalType": "bool"
                },
                {
                  "name": "ignoreSignatures",
                  "type": "bool",
                  "internalType": "bool"
                }
              ]
            }
          ],
          "outputs": [],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "vkTreeRoot",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "event",
          "name": "EIP712DomainChanged",
          "inputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "L2BlockProposed",
          "inputs": [
            {
              "name": "blockNumber",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
            },
            {
              "name": "archive",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "L2ProofVerified",
          "inputs": [
            {
              "name": "blockNumber",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
            },
            {
              "name": "proverId",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "OwnershipTransferred",
          "inputs": [
            {
              "name": "previousOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "newOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "ProofRightClaimed",
          "inputs": [
            {
              "name": "epoch",
              "type": "uint256",
              "indexed": true,
              "internalType": "Epoch"
            },
            {
              "name": "bondProvider",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "proposer",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            },
            {
              "name": "currentSlot",
              "type": "uint256",
              "indexed": false,
              "internalType": "Slot"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "PrunedPending",
          "inputs": [
            {
              "name": "provenBlockNumber",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            },
            {
              "name": "pendingBlockNumber",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "error",
          "name": "AddressEmptyCode",
          "inputs": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "AddressInsufficientBalance",
          "inputs": [
            {
              "name": "account",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "FailedInnerCall",
          "inputs": []
        },
        {
          "type": "error",
          "name": "HeaderLib__InvalidHeaderSize",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "HeaderLib__InvalidSlotNumber",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "Slot"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "Slot"
            }
          ]
        },
        {
          "type": "error",
          "name": "InvalidShortString",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Leonidas__InsufficientAttestations",
          "inputs": [
            {
              "name": "minimumNeeded",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "provided",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Leonidas__InsufficientAttestationsProvided",
          "inputs": [
            {
              "name": "minimumNeeded",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "provided",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Leonidas__InvalidProposer",
          "inputs": [
            {
              "name": "expected",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "actual",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "MathOverflowedMulDiv",
          "inputs": []
        },
        {
          "type": "error",
          "name": "OwnableInvalidOwner",
          "inputs": [
            {
              "name": "owner",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "OwnableUnauthorizedAccount",
          "inputs": [
            {
              "name": "account",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InsufficientBondAmount",
          "inputs": [
            {
              "name": "minimum",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "provided",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InsufficientFundsInEscrow",
          "inputs": [
            {
              "name": "required",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "available",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidArchive",
          "inputs": [
            {
              "name": "expected",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "actual",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidBasisPointFee",
          "inputs": [
            {
              "name": "basisPointFee",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidBlockHash",
          "inputs": [
            {
              "name": "expected",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "actual",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidBlockNumber",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidChainId",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidEpoch",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "Epoch"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidInHash",
          "inputs": [
            {
              "name": "expected",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "actual",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidPreviousArchive",
          "inputs": [
            {
              "name": "expected",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "actual",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidPreviousBlockHash",
          "inputs": [
            {
              "name": "expected",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "actual",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidProof",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Rollup__InvalidTimestamp",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "Timestamp"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "Timestamp"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__InvalidVersion",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__NoEpochToProve",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Rollup__NonZeroDaFee",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Rollup__NonZeroL2Fee",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Rollup__NotClaimingCorrectEpoch",
          "inputs": [
            {
              "name": "expected",
              "type": "uint256",
              "internalType": "Epoch"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "Epoch"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__NotInClaimPhase",
          "inputs": [
            {
              "name": "currentSlotInEpoch",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "claimDuration",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__NothingToPrune",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Rollup__ProofRightAlreadyClaimed",
          "inputs": []
        },
        {
          "type": "error",
          "name": "Rollup__QuoteExpired",
          "inputs": [
            {
              "name": "currentSlot",
              "type": "uint256",
              "internalType": "Slot"
            },
            {
              "name": "quoteSlot",
              "type": "uint256",
              "internalType": "Slot"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__SlotAlreadyInChain",
          "inputs": [
            {
              "name": "lastSlot",
              "type": "uint256",
              "internalType": "Slot"
            },
            {
              "name": "proposedSlot",
              "type": "uint256",
              "internalType": "Slot"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__TimestampInFuture",
          "inputs": [
            {
              "name": "max",
              "type": "uint256",
              "internalType": "Timestamp"
            },
            {
              "name": "actual",
              "type": "uint256",
              "internalType": "Timestamp"
            }
          ]
        },
        {
          "type": "error",
          "name": "Rollup__UnavailableTxs",
          "inputs": [
            {
              "name": "txsHash",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ]
        },
        {
          "type": "error",
          "name": "SafeERC20FailedOperation",
          "inputs": [
            {
              "name": "token",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "SampleLib__IndexOutOfBounds",
          "inputs": [
            {
              "name": "requested",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bound",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "SignatureLib__CannotVerifyEmpty",
          "inputs": []
        },
        {
          "type": "error",
          "name": "SignatureLib__InvalidSignature",
          "inputs": [
            {
              "name": "expected",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "recovered",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "StringTooLong",
          "inputs": [
            {
              "name": "str",
              "type": "string",
              "internalType": "string"
            }
          ]
        }
      ]
    },
    "FeeJuicePortal": {
      "address": "0x0165878a594ca255338adfa4d48449f69242eb8f",
      "abi": [
        {
          "type": "constructor",
          "inputs": [
            {
              "name": "_registry",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "_underlying",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "_l2TokenAddress",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "L2_TOKEN_ADDRESS",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "REGISTRY",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract IRegistry"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "UNDERLYING",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "contract IERC20"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "canonicalRollup",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "depositToAztecPublic",
          "inputs": [
            {
              "name": "_to",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "_amount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "_secretHash",
              "type": "bytes32",
              "internalType": "bytes32"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "distributeFees",
          "inputs": [
            {
              "name": "_to",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "_amount",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "initialize",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "initialized",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "bool",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "event",
          "name": "DepositToAztecPublic",
          "inputs": [
            {
              "name": "to",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
            },
            {
              "name": "amount",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            },
            {
              "name": "secretHash",
              "type": "bytes32",
              "indexed": false,
              "internalType": "bytes32"
            },
            {
              "name": "key",
              "type": "bytes32",
              "indexed": false,
              "internalType": "bytes32"
            },
            {
              "name": "index",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "FeesDistributed",
          "inputs": [
            {
              "name": "to",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "amount",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "error",
          "name": "AddressEmptyCode",
          "inputs": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "AddressInsufficientBalance",
          "inputs": [
            {
              "name": "account",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "FailedInnerCall",
          "inputs": []
        },
        {
          "type": "error",
          "name": "FeeJuicePortal__AlreadyInitialized",
          "inputs": []
        },
        {
          "type": "error",
          "name": "FeeJuicePortal__InvalidInitialization",
          "inputs": []
        },
        {
          "type": "error",
          "name": "FeeJuicePortal__Unauthorized",
          "inputs": []
        },
        {
          "type": "error",
          "name": "SafeERC20FailedOperation",
          "inputs": [
            {
              "name": "token",
              "type": "address",
              "internalType": "address"
            }
          ]
        }
      ]
    }
  }
};

export default deployedContracts;
