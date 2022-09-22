/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FileManager, FileManagerInterface } from "../FileManager";

const _abi = [
  {
    inputs: [],
    name: "ChainNotSupported",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    name: "InvalidCodeAtRange",
    type: "error",
  },
  {
    inputs: [],
    name: "contentStore",
    outputs: [
      {
        internalType: "contract ContentStore",
        name: "",
        type: "ContentStore",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fileStore",
    outputs: [
      {
        internalType: "contract FileStore",
        name: "",
        type: "FileStore",
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
    name: "readFileData",
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
  "0x61078e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806321ea07e1146100505780633a6e674c146100755780638c2ae3311461007d575b600080fd5b61005861009d565b6040516001600160a01b0390911681526020015b60405180910390f35b6100586100d8565b61009061008b36600461050f565b610113565b60405161006c91906105f1565b60004660018190036100b157600091505090565b507fa76502998eff87fba27b2646ba22d1c2b2208f239b074dd0a9a7df688501c847919050565b60004660018190036100ec57600091505090565b507f72e1d468e3ab07cc77731310b6c8dd5256e97c3128b5ba2e2093c0d747b9a35c919050565b6060600061011f6100d8565b6001600160a01b0316634641dce661013561009d565b6001600160a01b031663a52e640e866040518263ffffffff1660e01b815260040161016091906105f1565b602060405180830381865afa15801561017d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a19190610604565b6040518263ffffffff1660e01b81526004016101bf91815260200190565b602060405180830381865afa1580156101dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610200919061061d565b9050600061020d8261030d565b8060200190518101906102209190610646565b8051604080518083016060018252910181526000602090910181815294509091505b816020015151811015610305576102f3846102ee61025e6100d8565b6001600160a01b0316634641dce68660200151868151811061028257610282610724565b60200260200101516040518263ffffffff1660e01b81526004016102a891815260200190565b602060405180830381865afa1580156102c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e9919061061d565b61030d565b610323565b806102fd81610750565b915050610242565b505050919050565b606061031d8260016000196103b3565b92915050565b601f1982015182518251603f199092019182906103409083610769565b11156103a35760405162461bcd60e51b815260206004820152602760248201527f44796e616d69634275666665723a20417070656e64696e67206f7574206f66206044820152663137bab732399760c91b60648201526084015b60405180910390fd5b6103ad8484610469565b50505050565b6060833b60008190036103d6575050604080516020810190915260008152610462565b808411156103f4575050604080516020810190915260008152610462565b838310156104265760405163162544fd60e11b815260048101829052602481018590526044810184905260640161039a565b838303848203600082821061043b578261043d565b815b60408051603f8301601f19168101909152818152955090508087602087018a3c505050505b9392505050565b8051602082019150808201602084510184015b8184101561049457835181526020938401930161047c565b505082510190915250565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156104d8576104d861049f565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156105075761050761049f565b604052919050565b6000602080838503121561052257600080fd5b823567ffffffffffffffff8082111561053a57600080fd5b818501915085601f83011261054e57600080fd5b8135818111156105605761056061049f565b610572601f8201601f191685016104de565b9150808252868482850101111561058857600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b818110156105ca576020818501810151868301820152016105ae565b818111156105dc576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061046260208301846105a4565b60006020828403121561061657600080fd5b5051919050565b60006020828403121561062f57600080fd5b81516001600160a01b038116811461046257600080fd5b6000602080838503121561065957600080fd5b825167ffffffffffffffff8082111561067157600080fd5b908401906040828703121561068557600080fd5b61068d6104b5565b8251815283830151828111156106a257600080fd5b80840193505086601f8401126106b757600080fd5b8251828111156106c9576106c961049f565b8060051b92506106da8584016104de565b81815292840185019285810190898511156106f457600080fd5b948601945b84861015610712578551825294860194908601906106f9565b95830195909552509695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016107625761076261073a565b5060010190565b6000821982111561077c5761077c61073a565b50019056fea164736f6c634300080d000a";

type FileManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FileManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FileManager__factory extends ContractFactory {
  constructor(...args: FileManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FileManager> {
    return super.deploy(overrides || {}) as Promise<FileManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FileManager {
    return super.attach(address) as FileManager;
  }
  override connect(signer: Signer): FileManager__factory {
    return super.connect(signer) as FileManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FileManagerInterface {
    return new utils.Interface(_abi) as FileManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FileManager {
    return new Contract(address, _abi, signerOrProvider) as FileManager;
  }
}
