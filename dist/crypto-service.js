"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoServiceDefinition = exports.BankIdCryptoServiceDefinition = exports.CryptoDocServiceDefinition = void 0;
const crypto_bankid_1 = require("./crypto-bankid");
const crypto_common_1 = require("./crypto-common");
const crypto_doc_1 = require("./crypto-doc");
exports.CryptoDocServiceDefinition = {
    name: "CryptoDocService",
    fullName: "ua.gov.diia.crypto.CryptoDocService",
    methods: {
        docContentEnvelope: {
            name: "docContentEnvelope",
            requestType: crypto_doc_1.EnvelopFileRequest,
            requestStream: false,
            responseType: crypto_doc_1.EnvelopFileResponse,
            responseStream: false,
            options: {},
        },
        docContentDevelop: {
            name: "docContentDevelop",
            requestType: crypto_doc_1.DevelopFileRequest,
            requestStream: false,
            responseType: crypto_doc_1.DevelopFileResponse,
            responseStream: false,
            options: {},
        },
        docContentVerifyAndDevelop: {
            name: "docContentVerifyAndDevelop",
            requestType: crypto_doc_1.VerifyAndDevelopContentRequest,
            requestStream: false,
            responseType: crypto_doc_1.DevelopedDataResponse,
            responseStream: false,
            options: {},
        },
        docContentSignAndEnvelop: {
            name: "docContentSignAndEnvelop",
            requestType: crypto_doc_1.SignAndEnvelopContentRequest,
            requestStream: false,
            responseType: crypto_doc_1.EnvelopedDataResponse,
            responseStream: false,
            options: {},
        },
        docComposeGroupSignExternal: {
            name: "docComposeGroupSignExternal",
            requestType: crypto_doc_1.ComposeGroupSignRequest,
            requestStream: false,
            responseType: crypto_doc_1.ComposeGroupSignResponse,
            responseStream: false,
            options: {},
        },
        docVerifySignExternal: {
            name: "docVerifySignExternal",
            requestType: crypto_doc_1.VerifySignExternalRequest,
            requestStream: false,
            responseType: crypto_doc_1.VerifyInfoResponse,
            responseStream: false,
            options: {},
        },
        docVerifySignInternal: {
            name: "docVerifySignInternal",
            requestType: crypto_doc_1.VerifySignInternalRequest,
            requestStream: false,
            responseType: crypto_doc_1.VerifyInfoResponseInternal,
            responseStream: false,
            options: {},
        },
        docGenerateSignature: {
            name: "docGenerateSignature",
            requestType: crypto_doc_1.GenSignRequest,
            requestStream: false,
            responseType: crypto_doc_1.GenSignResponse,
            responseStream: false,
            options: {},
        },
        docSignHash: {
            name: "docSignHash",
            requestType: crypto_doc_1.SignHashRequest,
            requestStream: false,
            responseType: crypto_doc_1.SignHashResponse,
            responseStream: false,
            options: {},
        },
        docVerifyHash: {
            name: "docVerifyHash",
            requestType: crypto_doc_1.VerifyHashRequest,
            requestStream: false,
            responseType: crypto_doc_1.VerifyInfoResponse,
            responseStream: false,
            options: {},
        },
        docGenerateHash: {
            name: "docGenerateHash",
            requestType: crypto_doc_1.GenHashRequest,
            requestStream: false,
            responseType: crypto_doc_1.GenHashResponse,
            responseStream: false,
            options: {},
        },
    },
};
exports.BankIdCryptoServiceDefinition = {
    name: "BankIdCryptoService",
    fullName: "ua.gov.diia.crypto.BankIdCryptoService",
    methods: {
        generateCertificate: {
            name: "generateCertificate",
            requestType: crypto_bankid_1.GenerateCertificateRequest,
            requestStream: false,
            responseType: crypto_bankid_1.GenerateCertificateResponse,
            responseStream: false,
            options: {},
        },
        decrypt: {
            name: "decrypt",
            requestType: crypto_bankid_1.DevelopUserDataRequest,
            requestStream: false,
            responseType: crypto_bankid_1.DevelopUserDataResponse,
            responseStream: false,
            options: {},
        },
    },
};
exports.CryptoServiceDefinition = {
    name: "CryptoService",
    fullName: "ua.gov.diia.crypto.CryptoService",
    methods: {
        signAndEncrypt: {
            name: "signAndEncrypt",
            requestType: crypto_common_1.SignAndEncryptFileRequest,
            requestStream: false,
            responseType: crypto_common_1.SignAndEncryptFileResponse,
            responseStream: false,
            options: {},
        },
        encryptData: {
            name: "encryptData",
            requestType: crypto_common_1.EncryptDataRequest,
            requestStream: false,
            responseType: crypto_common_1.EncryptDataResponse,
            responseStream: false,
            options: {},
        },
        signFile: {
            name: "signFile",
            requestType: crypto_common_1.SignFileRequest,
            requestStream: false,
            responseType: crypto_common_1.SignFileResponse,
            responseStream: false,
            options: {},
        },
        signArchiveFiles: {
            name: "signArchiveFiles",
            requestType: crypto_common_1.SignEnvelopeArchiveContentRequest,
            requestStream: false,
            responseType: crypto_common_1.SignEnvelopeArchiveResponse,
            responseStream: false,
            options: {},
        },
        parseCertificate: {
            name: "parseCertificate",
            requestType: crypto_common_1.ParseCertificateRequest,
            requestStream: false,
            responseType: crypto_common_1.ParseCertificateResponse,
            responseStream: false,
            options: {},
        },
    },
};
//# sourceMappingURL=crypto-service.js.map