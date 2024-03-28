"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseCertificateResponse = exports.ParseCertificateRequest = exports.Archive = exports.SignEnvelopeArchiveResponse = exports.ArchFile = exports.SignEnvelopeArchiveContentRequest = exports.SignFileResponse = exports.SignFileRequest = exports.EncryptDataResponse = exports.EncryptDataRequest = exports.SignAndEncryptFileResponse = exports.SignAndEncryptFileRequest = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
function createBaseSignAndEncryptFileRequest() {
    return { file: "", fileName: "", certificate: "" };
}
exports.SignAndEncryptFileRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.file !== "") {
            writer.uint32(10).string(message.file);
        }
        if (message.fileName !== "") {
            writer.uint32(18).string(message.fileName);
        }
        if (message.certificate !== "") {
            writer.uint32(26).string(message.certificate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignAndEncryptFileRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.file = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fileName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.certificate = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            file: isSet(object.file) ? String(object.file) : "",
            fileName: isSet(object.fileName) ? String(object.fileName) : "",
            certificate: isSet(object.certificate) ? String(object.certificate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.file !== "") {
            obj.file = message.file;
        }
        if (message.fileName !== "") {
            obj.fileName = message.fileName;
        }
        if (message.certificate !== "") {
            obj.certificate = message.certificate;
        }
        return obj;
    },
    create(base) {
        return exports.SignAndEncryptFileRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignAndEncryptFileRequest();
        message.file = object.file ?? "";
        message.fileName = object.fileName ?? "";
        message.certificate = object.certificate ?? "";
        return message;
    },
};
function createBaseSignAndEncryptFileResponse() {
    return { fileContent: "", fileName: "" };
}
exports.SignAndEncryptFileResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fileContent !== "") {
            writer.uint32(10).string(message.fileContent);
        }
        if (message.fileName !== "") {
            writer.uint32(18).string(message.fileName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignAndEncryptFileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fileContent = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fileName = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fileContent: isSet(object.fileContent) ? String(object.fileContent) : "",
            fileName: isSet(object.fileName) ? String(object.fileName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fileContent !== "") {
            obj.fileContent = message.fileContent;
        }
        if (message.fileName !== "") {
            obj.fileName = message.fileName;
        }
        return obj;
    },
    create(base) {
        return exports.SignAndEncryptFileResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignAndEncryptFileResponse();
        message.fileContent = object.fileContent ?? "";
        message.fileName = object.fileName ?? "";
        return message;
    },
};
function createBaseEncryptDataRequest() {
    return { data: "", certificate: "" };
}
exports.EncryptDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.certificate !== "") {
            writer.uint32(18).string(message.certificate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncryptDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.certificate = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? String(object.data) : "",
            certificate: isSet(object.certificate) ? String(object.certificate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data !== "") {
            obj.data = message.data;
        }
        if (message.certificate !== "") {
            obj.certificate = message.certificate;
        }
        return obj;
    },
    create(base) {
        return exports.EncryptDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEncryptDataRequest();
        message.data = object.data ?? "";
        message.certificate = object.certificate ?? "";
        return message;
    },
};
function createBaseEncryptDataResponse() {
    return { encryptedData: "" };
}
exports.EncryptDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.encryptedData !== "") {
            writer.uint32(10).string(message.encryptedData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncryptDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.encryptedData = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { encryptedData: isSet(object.encryptedData) ? String(object.encryptedData) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.encryptedData !== "") {
            obj.encryptedData = message.encryptedData;
        }
        return obj;
    },
    create(base) {
        return exports.EncryptDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEncryptDataResponse();
        message.encryptedData = object.encryptedData ?? "";
        return message;
    },
};
function createBaseSignFileRequest() {
    return { file: "", fileName: "", certificate: "", external: false, appendCert: false };
}
exports.SignFileRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.file !== "") {
            writer.uint32(10).string(message.file);
        }
        if (message.fileName !== "") {
            writer.uint32(18).string(message.fileName);
        }
        if (message.certificate !== "") {
            writer.uint32(26).string(message.certificate);
        }
        if (message.external === true) {
            writer.uint32(32).bool(message.external);
        }
        if (message.appendCert === true) {
            writer.uint32(40).bool(message.appendCert);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignFileRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.file = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fileName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.certificate = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.external = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.appendCert = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            file: isSet(object.file) ? String(object.file) : "",
            fileName: isSet(object.fileName) ? String(object.fileName) : "",
            certificate: isSet(object.certificate) ? String(object.certificate) : "",
            external: isSet(object.external) ? Boolean(object.external) : false,
            appendCert: isSet(object.appendCert) ? Boolean(object.appendCert) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.file !== "") {
            obj.file = message.file;
        }
        if (message.fileName !== "") {
            obj.fileName = message.fileName;
        }
        if (message.certificate !== "") {
            obj.certificate = message.certificate;
        }
        if (message.external === true) {
            obj.external = message.external;
        }
        if (message.appendCert === true) {
            obj.appendCert = message.appendCert;
        }
        return obj;
    },
    create(base) {
        return exports.SignFileRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignFileRequest();
        message.file = object.file ?? "";
        message.fileName = object.fileName ?? "";
        message.certificate = object.certificate ?? "";
        message.external = object.external ?? false;
        message.appendCert = object.appendCert ?? false;
        return message;
    },
};
function createBaseSignFileResponse() {
    return { fileContent: "", fileName: "" };
}
exports.SignFileResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fileContent !== "") {
            writer.uint32(10).string(message.fileContent);
        }
        if (message.fileName !== "") {
            writer.uint32(18).string(message.fileName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignFileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fileContent = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fileName = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fileContent: isSet(object.fileContent) ? String(object.fileContent) : "",
            fileName: isSet(object.fileName) ? String(object.fileName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fileContent !== "") {
            obj.fileContent = message.fileContent;
        }
        if (message.fileName !== "") {
            obj.fileName = message.fileName;
        }
        return obj;
    },
    create(base) {
        return exports.SignFileResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignFileResponse();
        message.fileContent = object.fileContent ?? "";
        message.fileName = object.fileName ?? "";
        return message;
    },
};
function createBaseSignEnvelopeArchiveContentRequest() {
    return { uuid: "", files: [] };
}
exports.SignEnvelopeArchiveContentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        for (const v of message.files) {
            exports.ArchFile.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignEnvelopeArchiveContentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.uuid = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.files.push(exports.ArchFile.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            uuid: isSet(object.uuid) ? String(object.uuid) : "",
            files: Array.isArray(object?.files) ? object.files.map((e) => exports.ArchFile.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uuid !== "") {
            obj.uuid = message.uuid;
        }
        if (message.files?.length) {
            obj.files = message.files.map((e) => exports.ArchFile.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SignEnvelopeArchiveContentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignEnvelopeArchiveContentRequest();
        message.uuid = object.uuid ?? "";
        message.files = object.files?.map((e) => exports.ArchFile.fromPartial(e)) || [];
        return message;
    },
};
function createBaseArchFile() {
    return { name: "", file: "", signature: "" };
}
exports.ArchFile = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.file !== "") {
            writer.uint32(18).string(message.file);
        }
        if (message.signature !== "") {
            writer.uint32(26).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArchFile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.file = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signature = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            file: isSet(object.file) ? String(object.file) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.file !== "") {
            obj.file = message.file;
        }
        if (message.signature !== "") {
            obj.signature = message.signature;
        }
        return obj;
    },
    create(base) {
        return exports.ArchFile.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseArchFile();
        message.name = object.name ?? "";
        message.file = object.file ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
};
function createBaseSignEnvelopeArchiveResponse() {
    return { archive: undefined };
}
exports.SignEnvelopeArchiveResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.archive !== undefined) {
            exports.Archive.encode(message.archive, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignEnvelopeArchiveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.archive = exports.Archive.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { archive: isSet(object.archive) ? exports.Archive.fromJSON(object.archive) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.archive !== undefined) {
            obj.archive = exports.Archive.toJSON(message.archive);
        }
        return obj;
    },
    create(base) {
        return exports.SignEnvelopeArchiveResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignEnvelopeArchiveResponse();
        message.archive = (object.archive !== undefined && object.archive !== null)
            ? exports.Archive.fromPartial(object.archive)
            : undefined;
        return message;
    },
};
function createBaseArchive() {
    return { file: "", name: "" };
}
exports.Archive = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.file !== "") {
            writer.uint32(10).string(message.file);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArchive();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.file = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { file: isSet(object.file) ? String(object.file) : "", name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.file !== "") {
            obj.file = message.file;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Archive.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseArchive();
        message.file = object.file ?? "";
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseParseCertificateRequest() {
    return { encodedCertificate: "" };
}
exports.ParseCertificateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.encodedCertificate !== "") {
            writer.uint32(10).string(message.encodedCertificate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParseCertificateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.encodedCertificate = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { encodedCertificate: isSet(object.encodedCertificate) ? String(object.encodedCertificate) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.encodedCertificate !== "") {
            obj.encodedCertificate = message.encodedCertificate;
        }
        return obj;
    },
    create(base) {
        return exports.ParseCertificateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParseCertificateRequest();
        message.encodedCertificate = object.encodedCertificate ?? "";
        return message;
    },
};
function createBaseParseCertificateResponse() {
    return {
        issuer: "",
        issuerCN: "",
        serial: "",
        subject: "",
        subjCN: "",
        subjOrg: "",
        subjOrgUnit: "",
        subjTitle: "",
        subjState: "",
        subjLocality: "",
        subjFullName: "",
        subjAddress: "",
        subjPhone: "",
        subjEMail: "",
        subjDNS: "",
        subjEDRPOUCode: "",
        subjDRFOCode: "",
        subjNBUCode: "",
        subjSPFMCode: "",
        subjOCode: "",
        subjOUCode: "",
        subjUserCode: "",
        certBeginTime: undefined,
        certEndTime: undefined,
    };
}
exports.ParseCertificateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.issuerCN !== "") {
            writer.uint32(18).string(message.issuerCN);
        }
        if (message.serial !== "") {
            writer.uint32(26).string(message.serial);
        }
        if (message.subject !== "") {
            writer.uint32(34).string(message.subject);
        }
        if (message.subjCN !== "") {
            writer.uint32(42).string(message.subjCN);
        }
        if (message.subjOrg !== "") {
            writer.uint32(50).string(message.subjOrg);
        }
        if (message.subjOrgUnit !== "") {
            writer.uint32(58).string(message.subjOrgUnit);
        }
        if (message.subjTitle !== "") {
            writer.uint32(66).string(message.subjTitle);
        }
        if (message.subjState !== "") {
            writer.uint32(74).string(message.subjState);
        }
        if (message.subjLocality !== "") {
            writer.uint32(82).string(message.subjLocality);
        }
        if (message.subjFullName !== "") {
            writer.uint32(98).string(message.subjFullName);
        }
        if (message.subjAddress !== "") {
            writer.uint32(106).string(message.subjAddress);
        }
        if (message.subjPhone !== "") {
            writer.uint32(114).string(message.subjPhone);
        }
        if (message.subjEMail !== "") {
            writer.uint32(122).string(message.subjEMail);
        }
        if (message.subjDNS !== "") {
            writer.uint32(130).string(message.subjDNS);
        }
        if (message.subjEDRPOUCode !== "") {
            writer.uint32(138).string(message.subjEDRPOUCode);
        }
        if (message.subjDRFOCode !== "") {
            writer.uint32(146).string(message.subjDRFOCode);
        }
        if (message.subjNBUCode !== "") {
            writer.uint32(154).string(message.subjNBUCode);
        }
        if (message.subjSPFMCode !== "") {
            writer.uint32(162).string(message.subjSPFMCode);
        }
        if (message.subjOCode !== "") {
            writer.uint32(170).string(message.subjOCode);
        }
        if (message.subjOUCode !== "") {
            writer.uint32(178).string(message.subjOUCode);
        }
        if (message.subjUserCode !== "") {
            writer.uint32(186).string(message.subjUserCode);
        }
        if (message.certBeginTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.certBeginTime), writer.uint32(194).fork()).ldelim();
        }
        if (message.certEndTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.certEndTime), writer.uint32(202).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParseCertificateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.issuerCN = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.serial = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.subject = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.subjCN = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.subjOrg = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.subjOrgUnit = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.subjTitle = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.subjState = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.subjLocality = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.subjFullName = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.subjAddress = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.subjPhone = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.subjEMail = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.subjDNS = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.subjEDRPOUCode = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.subjDRFOCode = reader.string();
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.subjNBUCode = reader.string();
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.subjSPFMCode = reader.string();
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.subjOCode = reader.string();
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.subjOUCode = reader.string();
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.subjUserCode = reader.string();
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.certBeginTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.certEndTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            issuerCN: isSet(object.issuerCN) ? String(object.issuerCN) : "",
            serial: isSet(object.serial) ? String(object.serial) : "",
            subject: isSet(object.subject) ? String(object.subject) : "",
            subjCN: isSet(object.subjCN) ? String(object.subjCN) : "",
            subjOrg: isSet(object.subjOrg) ? String(object.subjOrg) : "",
            subjOrgUnit: isSet(object.subjOrgUnit) ? String(object.subjOrgUnit) : "",
            subjTitle: isSet(object.subjTitle) ? String(object.subjTitle) : "",
            subjState: isSet(object.subjState) ? String(object.subjState) : "",
            subjLocality: isSet(object.subjLocality) ? String(object.subjLocality) : "",
            subjFullName: isSet(object.subjFullName) ? String(object.subjFullName) : "",
            subjAddress: isSet(object.subjAddress) ? String(object.subjAddress) : "",
            subjPhone: isSet(object.subjPhone) ? String(object.subjPhone) : "",
            subjEMail: isSet(object.subjEMail) ? String(object.subjEMail) : "",
            subjDNS: isSet(object.subjDNS) ? String(object.subjDNS) : "",
            subjEDRPOUCode: isSet(object.subjEDRPOUCode) ? String(object.subjEDRPOUCode) : "",
            subjDRFOCode: isSet(object.subjDRFOCode) ? String(object.subjDRFOCode) : "",
            subjNBUCode: isSet(object.subjNBUCode) ? String(object.subjNBUCode) : "",
            subjSPFMCode: isSet(object.subjSPFMCode) ? String(object.subjSPFMCode) : "",
            subjOCode: isSet(object.subjOCode) ? String(object.subjOCode) : "",
            subjOUCode: isSet(object.subjOUCode) ? String(object.subjOUCode) : "",
            subjUserCode: isSet(object.subjUserCode) ? String(object.subjUserCode) : "",
            certBeginTime: isSet(object.certBeginTime) ? fromJsonTimestamp(object.certBeginTime) : undefined,
            certEndTime: isSet(object.certEndTime) ? fromJsonTimestamp(object.certEndTime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if (message.issuerCN !== "") {
            obj.issuerCN = message.issuerCN;
        }
        if (message.serial !== "") {
            obj.serial = message.serial;
        }
        if (message.subject !== "") {
            obj.subject = message.subject;
        }
        if (message.subjCN !== "") {
            obj.subjCN = message.subjCN;
        }
        if (message.subjOrg !== "") {
            obj.subjOrg = message.subjOrg;
        }
        if (message.subjOrgUnit !== "") {
            obj.subjOrgUnit = message.subjOrgUnit;
        }
        if (message.subjTitle !== "") {
            obj.subjTitle = message.subjTitle;
        }
        if (message.subjState !== "") {
            obj.subjState = message.subjState;
        }
        if (message.subjLocality !== "") {
            obj.subjLocality = message.subjLocality;
        }
        if (message.subjFullName !== "") {
            obj.subjFullName = message.subjFullName;
        }
        if (message.subjAddress !== "") {
            obj.subjAddress = message.subjAddress;
        }
        if (message.subjPhone !== "") {
            obj.subjPhone = message.subjPhone;
        }
        if (message.subjEMail !== "") {
            obj.subjEMail = message.subjEMail;
        }
        if (message.subjDNS !== "") {
            obj.subjDNS = message.subjDNS;
        }
        if (message.subjEDRPOUCode !== "") {
            obj.subjEDRPOUCode = message.subjEDRPOUCode;
        }
        if (message.subjDRFOCode !== "") {
            obj.subjDRFOCode = message.subjDRFOCode;
        }
        if (message.subjNBUCode !== "") {
            obj.subjNBUCode = message.subjNBUCode;
        }
        if (message.subjSPFMCode !== "") {
            obj.subjSPFMCode = message.subjSPFMCode;
        }
        if (message.subjOCode !== "") {
            obj.subjOCode = message.subjOCode;
        }
        if (message.subjOUCode !== "") {
            obj.subjOUCode = message.subjOUCode;
        }
        if (message.subjUserCode !== "") {
            obj.subjUserCode = message.subjUserCode;
        }
        if (message.certBeginTime !== undefined) {
            obj.certBeginTime = message.certBeginTime.toISOString();
        }
        if (message.certEndTime !== undefined) {
            obj.certEndTime = message.certEndTime.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.ParseCertificateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParseCertificateResponse();
        message.issuer = object.issuer ?? "";
        message.issuerCN = object.issuerCN ?? "";
        message.serial = object.serial ?? "";
        message.subject = object.subject ?? "";
        message.subjCN = object.subjCN ?? "";
        message.subjOrg = object.subjOrg ?? "";
        message.subjOrgUnit = object.subjOrgUnit ?? "";
        message.subjTitle = object.subjTitle ?? "";
        message.subjState = object.subjState ?? "";
        message.subjLocality = object.subjLocality ?? "";
        message.subjFullName = object.subjFullName ?? "";
        message.subjAddress = object.subjAddress ?? "";
        message.subjPhone = object.subjPhone ?? "";
        message.subjEMail = object.subjEMail ?? "";
        message.subjDNS = object.subjDNS ?? "";
        message.subjEDRPOUCode = object.subjEDRPOUCode ?? "";
        message.subjDRFOCode = object.subjDRFOCode ?? "";
        message.subjNBUCode = object.subjNBUCode ?? "";
        message.subjSPFMCode = object.subjSPFMCode ?? "";
        message.subjOCode = object.subjOCode ?? "";
        message.subjOUCode = object.subjOUCode ?? "";
        message.subjUserCode = object.subjUserCode ?? "";
        message.certBeginTime = object.certBeginTime ?? undefined;
        message.certEndTime = object.certEndTime ?? undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=crypto-common.js.map