/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type FileStruct = {
  size: PromiseOrValue<BigNumberish>;
  contentType: PromiseOrValue<string>;
  contentEncoding: PromiseOrValue<string>;
  checksums: PromiseOrValue<BytesLike>[];
};

export type FileStructOutput = [BigNumber, string, string, string[]] & {
  size: BigNumber;
  contentType: string;
  contentEncoding: string;
  checksums: string[];
};

export interface DirectoryInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "createFile(string,(uint256,string,string,bytes32[]))": FunctionFragment;
    "deleteFile(string)": FunctionFragment;
    "fileExists(string)": FunctionFragment;
    "fileStore()": FunctionFragment;
    "filenames(uint256)": FunctionFragment;
    "files(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "readFile(string)": FunctionFragment;
    "readFileData(string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "createFile"
      | "deleteFile"
      | "fileExists"
      | "fileStore"
      | "filenames"
      | "files"
      | "owner"
      | "pendingOwner"
      | "readFile"
      | "readFileData"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createFile",
    values: [PromiseOrValue<string>, FileStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFile",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fileExists",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "fileStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "filenames",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "files",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "readFile",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "readFileData",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createFile", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deleteFile", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fileExists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fileStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "filenames", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "files", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "readFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readFileData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "FileCreated(string,bytes32,uint256,string,string)": EventFragment;
    "FileDeleted(string)": EventFragment;
    "OwnershipTransferStarted(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FileCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FileDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface FileCreatedEventObject {
  filename: string;
  checksum: string;
  size: BigNumber;
  contentType: string;
  contentEncoding: string;
}
export type FileCreatedEvent = TypedEvent<
  [string, string, BigNumber, string, string],
  FileCreatedEventObject
>;

export type FileCreatedEventFilter = TypedEventFilter<FileCreatedEvent>;

export interface FileDeletedEventObject {
  filename: string;
}
export type FileDeletedEvent = TypedEvent<[string], FileDeletedEventObject>;

export type FileDeletedEventFilter = TypedEventFilter<FileDeletedEvent>;

export interface OwnershipTransferStartedEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<
  [string, string],
  OwnershipTransferStartedEventObject
>;

export type OwnershipTransferStartedEventFilter =
  TypedEventFilter<OwnershipTransferStartedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Directory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DirectoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createFile(
      filename: PromiseOrValue<string>,
      file: FileStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteFile(
      filename: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fileExists(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    fileStore(overrides?: CallOverrides): Promise<[string]>;

    filenames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    files(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    readFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[FileStructOutput] & { file: FileStructOutput }>;

    readFileData(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createFile(
    filename: PromiseOrValue<string>,
    file: FileStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteFile(
    filename: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fileExists(
    filename: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  fileStore(overrides?: CallOverrides): Promise<string>;

  filenames(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  files(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  readFile(
    filename: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<FileStructOutput>;

  readFileData(
    filename: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    createFile(
      filename: PromiseOrValue<string>,
      file: FileStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fileExists(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fileStore(overrides?: CallOverrides): Promise<string>;

    filenames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    files(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    readFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<FileStructOutput>;

    readFileData(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "FileCreated(string,bytes32,uint256,string,string)"(
      filename?: PromiseOrValue<string> | null,
      checksum?: PromiseOrValue<BytesLike> | null,
      size?: null,
      contentType?: null,
      contentEncoding?: null
    ): FileCreatedEventFilter;
    FileCreated(
      filename?: PromiseOrValue<string> | null,
      checksum?: PromiseOrValue<BytesLike> | null,
      size?: null,
      contentType?: null,
      contentEncoding?: null
    ): FileCreatedEventFilter;

    "FileDeleted(string)"(
      filename?: PromiseOrValue<string> | null
    ): FileDeletedEventFilter;
    FileDeleted(
      filename?: PromiseOrValue<string> | null
    ): FileDeletedEventFilter;

    "OwnershipTransferStarted(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferStartedEventFilter;
    OwnershipTransferStarted(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferStartedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createFile(
      filename: PromiseOrValue<string>,
      file: FileStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteFile(
      filename: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fileExists(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fileStore(overrides?: CallOverrides): Promise<BigNumber>;

    filenames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    files(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    readFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readFileData(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createFile(
      filename: PromiseOrValue<string>,
      file: FileStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteFile(
      filename: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fileExists(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fileStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    filenames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    files(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readFileData(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
