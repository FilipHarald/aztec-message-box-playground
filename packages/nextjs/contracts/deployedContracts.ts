
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

export const chainConfig = {
  "chainId": 31337,
  "rpcUrl": "http://anvil-ethereum-node.localhost"
};

const deployedContracts: GenericContractsDeclaration = {
  "31337": {
    "Inbox": {
      "address": "0xba94c268049dd87ded35f41f6d4c7542b4bdb767",
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
      "address": "0x72c1e366e34ac57376bc71bda0c093b89adb57ee",
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
    }
  }
};

export default deployedContracts;
