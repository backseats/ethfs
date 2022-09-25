"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFileStore__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "EmptyFile",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "filename",
                type: "string",
            },
        ],
        name: "FileNotFound",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "filename",
                type: "string",
            },
        ],
        name: "FilenameExists",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "string",
                name: "filename",
                type: "string",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "metadata",
                type: "bytes",
            },
        ],
        name: "FileCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "string",
                name: "filename",
                type: "string",
            },
        ],
        name: "FileDeleted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "filename",
                type: "string",
            },
            {
                internalType: "bytes32[]",
                name: "checksums",
                type: "bytes32[]",
            },
        ],
        name: "createFile",
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
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "filename",
                type: "string",
            },
            {
                internalType: "bytes32[]",
                name: "checksums",
                type: "bytes32[]",
            },
            {
                internalType: "bytes",
                name: "extraData",
                type: "bytes",
            },
        ],
        name: "createFile",
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
        stateMutability: "nonpayable",
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
        name: "deleteFile",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "fileExists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
        name: "files",
        outputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
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
        name: "getChecksum",
        outputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
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
];
class IFileStore__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IFileStore__factory = IFileStore__factory;
IFileStore__factory.abi = _abi;
