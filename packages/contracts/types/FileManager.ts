/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface FileManagerInterface extends utils.Interface {
  functions: {
    "contentStore()": FunctionFragment;
    "fileStore()": FunctionFragment;
    "readFileData(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "contentStore" | "fileStore" | "readFileData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contentStore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fileStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "readFileData",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "contentStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fileStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readFileData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FileManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FileManagerInterface;

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
    contentStore(overrides?: CallOverrides): Promise<[string]>;

    fileStore(overrides?: CallOverrides): Promise<[string]>;

    readFileData(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;
  };

  contentStore(overrides?: CallOverrides): Promise<string>;

  fileStore(overrides?: CallOverrides): Promise<string>;

  readFileData(
    filename: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    contentStore(overrides?: CallOverrides): Promise<string>;

    fileStore(overrides?: CallOverrides): Promise<string>;

    readFileData(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    contentStore(overrides?: CallOverrides): Promise<BigNumber>;

    fileStore(overrides?: CallOverrides): Promise<BigNumber>;

    readFileData(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    contentStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fileStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readFileData(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
