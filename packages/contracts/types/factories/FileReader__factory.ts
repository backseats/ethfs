/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FileReader, FileReaderInterface } from "../FileReader";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "FileNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "getFile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "pointer",
                type: "address",
              },
            ],
            internalType: "struct Content[]",
            name: "contents",
            type: "tuple[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "pointer",
                type: "address",
              },
            ],
            internalType: "struct Content[]",
            name: "contents",
            type: "tuple[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    name: "readFile",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "readFile",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6108ff61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80633bb2c4ce14610050578063473aa2a51461007957806360f9bb1114610099575b600080fd5b61006361005e366004610510565b6100ac565b604051610070919061065f565b60405180910390f35b61008c610087366004610672565b610130565b604051610070919061068b565b6100636100a73660046106f8565b610276565b60606100d38260000151604080518281016060018252910181526000602090910190815290565b905060005b82602001515181101561012a5761011882610113856020015184815181106101025761010261078d565b602002602001015160200151610362565b6103a3565b80610122816107b9565b9150506100d8565b50919050565b604080518082019091526000815260606020820152600073__$5c09f8e56d170cbd9f4382764db85fd796$__633a6e674c6040518163ffffffff1660e01b8152600401602060405180830381865af4158015610190573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b491906107d2565b6001600160a01b0316634641dce6846040518263ffffffff1660e01b81526004016101e191815260200190565b602060405180830381865afa1580156101fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022291906107d2565b90506001600160a01b0381166102535760405163a4b13c7360e01b8152600481018490526024015b60405180910390fd5b61025c81610362565b80602001905181019061026f91906107ef565b9392505050565b6060600073__$5c09f8e56d170cbd9f4382764db85fd796$__6321ea07e16040518163ffffffff1660e01b8152600401602060405180830381865af41580156102c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e791906107d2565b6001600160a01b031663e0876aa8846040518263ffffffff1660e01b8152600401610312919061065f565b600060405180830381865afa15801561032f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261035791908101906107ef565b905061026f816100ac565b6060813b80610379576311052bb46000526004601cfd5b600181039050604051915061ffe0603f820116820160405280825280600160208401853c50919050565b601f1982015182518251603f199092019182906103c090836108da565b111561041e5760405162461bcd60e51b815260206004820152602760248201527f44796e616d69634275666665723a20417070656e64696e67206f7574206f66206044820152663137bab732399760c91b606482015260840161024a565b610428848461042e565b50505050565b8051602082019150808201602084510184015b81841015610459578351815260209384019301610441565b505082510190915250565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561049d5761049d610464565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156104cc576104cc610464565b604052919050565b600067ffffffffffffffff8211156104ee576104ee610464565b5060051b60200190565b6001600160a01b038116811461050d57600080fd5b50565b6000602080838503121561052357600080fd5b823567ffffffffffffffff8082111561053b57600080fd5b8185019150604080838803121561055157600080fd5b61055961047a565b83358152848401358381111561056e57600080fd5b80850194505087601f85011261058357600080fd5b83359250610598610593846104d4565b6104a3565b83815260069390931b840185019285810190898511156105b757600080fd5b948601945b848610156106005783868b0312156105d45760008081fd5b6105dc61047a565b86358152878701356105ed816104f8565b81890152825294830194908601906105bc565b95820195909552979650505050505050565b6000815180845260005b818110156106385760208185018101518683018201520161061c565b8181111561064a576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061026f6020830184610612565b60006020828403121561068457600080fd5b5035919050565b602080825282518282015282810151604080840181905281516060850181905260009392830191849160808701905b808410156106ec578451805183528601516001600160a01b0316868301529385019360019390930192908201906106ba565b50979650505050505050565b6000602080838503121561070b57600080fd5b823567ffffffffffffffff8082111561072357600080fd5b818501915085601f83011261073757600080fd5b81358181111561074957610749610464565b61075b601f8201601f191685016104a3565b9150808252868482850101111561077157600080fd5b8084840185840137600090820190930192909252509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016107cb576107cb6107a3565b5060010190565b6000602082840312156107e457600080fd5b815161026f816104f8565b6000602080838503121561080257600080fd5b825167ffffffffffffffff8082111561081a57600080fd5b8185019150604080838803121561083057600080fd5b61083861047a565b83518152848401518381111561084d57600080fd5b80850194505087601f85011261086257600080fd5b83519250610872610593846104d4565b83815260069390931b8401850192858101908985111561089157600080fd5b948601945b848610156106005783868b0312156108ae5760008081fd5b6108b661047a565b86518152878701516108c7816104f8565b8189015282529483019490860190610896565b600082198211156108ed576108ed6107a3565b50019056fea164736f6c634300080d000a";

type FileReaderConstructorParams =
  | [linkLibraryAddresses: FileReaderLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FileReaderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class FileReader__factory extends ContractFactory {
  constructor(...args: FileReaderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        FileReader__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: FileReaderLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$5c09f8e56d170cbd9f4382764db85fd796\\$__", "g"),
      linkLibraryAddresses["packages/contracts/src/DataStores.sol:DataStores"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FileReader> {
    return super.deploy(overrides || {}) as Promise<FileReader>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FileReader {
    return super.attach(address) as FileReader;
  }
  override connect(signer: Signer): FileReader__factory {
    return super.connect(signer) as FileReader__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FileReaderInterface {
    return new utils.Interface(_abi) as FileReaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FileReader {
    return new Contract(address, _abi, signerOrProvider) as FileReader;
  }
}

export interface FileReaderLibraryAddresses {
  ["packages/contracts/src/DataStores.sol:DataStores"]: string;
}
