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
exports.EnvelopFileResponse = exports.EnvelopFileRequest = exports.DevelopFileResponse = exports.DevelopFileRequest = exports.DevelopedDataResponse = exports.VerifyAndDevelopContentRequest = exports.SignAndEnvelopContentRequest = exports.EnvelopedDataResponse = exports.ComposeGroupSignRequest = exports.ComposeGroupSignResponse = exports.VerifySignExternalRequest = exports.VerifyInfoResponse = exports.SignTimeInfo = exports.SignOwnerInfo = exports.VerifyInfoResponseInternal = exports.VerifySignInternalRequest = exports.GenSignRequest = exports.GenSignResponse = exports.SignHashRequest = exports.SignHashResponse = exports.GenHashResponse = exports.GenHashRequest = exports.VerifyHashRequest = exports.signTypeToNumber = exports.signTypeToJSON = exports.signTypeFromJSON = exports.SignType = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
var SignType;
(function (SignType) {
    SignType["UNKNOWN"] = "UNKNOWN";
    SignType["CADES_BES"] = "CADES_BES";
    SignType["CADES_T"] = "CADES_T";
    SignType["CADES_C"] = "CADES_C";
    SignType["CADES_X_LONG"] = "CADES_X_LONG";
    SignType["CADES_X_LONG_TRUSTED"] = "CADES_X_LONG_TRUSTED";
})(SignType || (exports.SignType = SignType = {}));
function signTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return SignType.UNKNOWN;
        case 1:
        case "CADES_BES":
            return SignType.CADES_BES;
        case 4:
        case "CADES_T":
            return SignType.CADES_T;
        case 8:
        case "CADES_C":
            return SignType.CADES_C;
        case 16:
        case "CADES_X_LONG":
            return SignType.CADES_X_LONG;
        case 128:
        case "CADES_X_LONG_TRUSTED":
            return SignType.CADES_X_LONG_TRUSTED;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SignType");
    }
}
exports.signTypeFromJSON = signTypeFromJSON;
function signTypeToJSON(object) {
    switch (object) {
        case SignType.UNKNOWN:
            return "UNKNOWN";
        case SignType.CADES_BES:
            return "CADES_BES";
        case SignType.CADES_T:
            return "CADES_T";
        case SignType.CADES_C:
            return "CADES_C";
        case SignType.CADES_X_LONG:
            return "CADES_X_LONG";
        case SignType.CADES_X_LONG_TRUSTED:
            return "CADES_X_LONG_TRUSTED";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SignType");
    }
}
exports.signTypeToJSON = signTypeToJSON;
function signTypeToNumber(object) {
    switch (object) {
        case SignType.UNKNOWN:
            return 0;
        case SignType.CADES_BES:
            return 1;
        case SignType.CADES_T:
            return 4;
        case SignType.CADES_C:
            return 8;
        case SignType.CADES_X_LONG:
            return 16;
        case SignType.CADES_X_LONG_TRUSTED:
            return 128;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SignType");
    }
}
exports.signTypeToNumber = signTypeToNumber;
function createBaseVerifyHashRequest() {
    return { hash: "", signature: "" };
}
exports.VerifyHashRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
            hash: isSet(object.hash) ? String(object.hash) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        if (message.signature !== "") {
            obj.signature = message.signature;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyHashRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyHashRequest();
        message.hash = object.hash ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
};
function createBaseGenHashRequest() {
    return { content: "" };
}
exports.GenHashRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.content !== "") {
            writer.uint32(10).string(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.content = reader.string();
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
        return { content: isSet(object.content) ? String(object.content) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.content !== "") {
            obj.content = message.content;
        }
        return obj;
    },
    create(base) {
        return exports.GenHashRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenHashRequest();
        message.content = object.content ?? "";
        return message;
    },
};
function createBaseGenHashResponse() {
    return { hash: "" };
}
exports.GenHashResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
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
        return { hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        return obj;
    },
    create(base) {
        return exports.GenHashResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenHashResponse();
        message.hash = object.hash ?? "";
        return message;
    },
};
function createBaseSignHashResponse() {
    return { signature: "" };
}
exports.SignHashResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature !== "") {
            writer.uint32(10).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { signature: isSet(object.signature) ? String(object.signature) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.signature !== "") {
            obj.signature = message.signature;
        }
        return obj;
    },
    create(base) {
        return exports.SignHashResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignHashResponse();
        message.signature = object.signature ?? "";
        return message;
    },
};
function createBaseSignHashRequest() {
    return { hash: "", appendCert: undefined };
}
exports.SignHashRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.appendCert !== undefined) {
            writer.uint32(16).bool(message.appendCert);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
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
            hash: isSet(object.hash) ? String(object.hash) : "",
            appendCert: isSet(object.appendCert) ? Boolean(object.appendCert) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        if (message.appendCert !== undefined) {
            obj.appendCert = message.appendCert;
        }
        return obj;
    },
    create(base) {
        return exports.SignHashRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignHashRequest();
        message.hash = object.hash ?? "";
        message.appendCert = object.appendCert ?? undefined;
        return message;
    },
};
function createBaseGenSignResponse() {
    return { signature: "" };
}
exports.GenSignResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature !== "") {
            writer.uint32(10).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenSignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { signature: isSet(object.signature) ? String(object.signature) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.signature !== "") {
            obj.signature = message.signature;
        }
        return obj;
    },
    create(base) {
        return exports.GenSignResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenSignResponse();
        message.signature = object.signature ?? "";
        return message;
    },
};
function createBaseGenSignRequest() {
    return { contentBase64: "", external: undefined, signAlgorithm: undefined };
}
exports.GenSignRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contentBase64 !== "") {
            writer.uint32(10).string(message.contentBase64);
        }
        if (message.external !== undefined) {
            writer.uint32(16).bool(message.external);
        }
        if (message.signAlgorithm !== undefined) {
            writer.uint32(32).int32(signTypeToNumber(message.signAlgorithm));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenSignRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.contentBase64 = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.external = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.signAlgorithm = signTypeFromJSON(reader.int32());
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
            contentBase64: isSet(object.contentBase64) ? String(object.contentBase64) : "",
            external: isSet(object.external) ? Boolean(object.external) : undefined,
            signAlgorithm: isSet(object.signAlgorithm) ? signTypeFromJSON(object.signAlgorithm) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contentBase64 !== "") {
            obj.contentBase64 = message.contentBase64;
        }
        if (message.external !== undefined) {
            obj.external = message.external;
        }
        if (message.signAlgorithm !== undefined) {
            obj.signAlgorithm = signTypeToJSON(message.signAlgorithm);
        }
        return obj;
    },
    create(base) {
        return exports.GenSignRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenSignRequest();
        message.contentBase64 = object.contentBase64 ?? "";
        message.external = object.external ?? undefined;
        message.signAlgorithm = object.signAlgorithm ?? undefined;
        return message;
    },
};
function createBaseVerifySignInternalRequest() {
    return { signedData: "" };
}
exports.VerifySignInternalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signedData !== "") {
            writer.uint32(10).string(message.signedData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifySignInternalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signedData = reader.string();
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
        return { signedData: isSet(object.signedData) ? String(object.signedData) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.signedData !== "") {
            obj.signedData = message.signedData;
        }
        return obj;
    },
    create(base) {
        return exports.VerifySignInternalRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifySignInternalRequest();
        message.signedData = object.signedData ?? "";
        return message;
    },
};
function createBaseVerifyInfoResponseInternal() {
    return { ownerInfo: undefined, timeInfo: undefined, data: "", base64String: "" };
}
exports.VerifyInfoResponseInternal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ownerInfo !== undefined) {
            exports.SignOwnerInfo.encode(message.ownerInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.timeInfo !== undefined) {
            exports.SignTimeInfo.encode(message.timeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        if (message.base64String !== "") {
            writer.uint32(34).string(message.base64String);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyInfoResponseInternal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ownerInfo = exports.SignOwnerInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.timeInfo = exports.SignTimeInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.data = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.base64String = reader.string();
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
            ownerInfo: isSet(object.ownerInfo) ? exports.SignOwnerInfo.fromJSON(object.ownerInfo) : undefined,
            timeInfo: isSet(object.timeInfo) ? exports.SignTimeInfo.fromJSON(object.timeInfo) : undefined,
            data: isSet(object.data) ? String(object.data) : "",
            base64String: isSet(object.base64String) ? String(object.base64String) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ownerInfo !== undefined) {
            obj.ownerInfo = exports.SignOwnerInfo.toJSON(message.ownerInfo);
        }
        if (message.timeInfo !== undefined) {
            obj.timeInfo = exports.SignTimeInfo.toJSON(message.timeInfo);
        }
        if (message.data !== "") {
            obj.data = message.data;
        }
        if (message.base64String !== "") {
            obj.base64String = message.base64String;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyInfoResponseInternal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyInfoResponseInternal();
        message.ownerInfo = (object.ownerInfo !== undefined && object.ownerInfo !== null)
            ? exports.SignOwnerInfo.fromPartial(object.ownerInfo)
            : undefined;
        message.timeInfo = (object.timeInfo !== undefined && object.timeInfo !== null)
            ? exports.SignTimeInfo.fromPartial(object.timeInfo)
            : undefined;
        message.data = object.data ?? "";
        message.base64String = object.base64String ?? "";
        return message;
    },
};
function createBaseSignOwnerInfo() {
    return {
        issuer: "",
        issuerCn: "",
        serial: "",
        subject: "",
        subjCn: "",
        subjOrg: "",
        subjOrgUnit: "",
        subjTitle: "",
        subjState: "",
        subjLocality: "",
        subjFullName: "",
        subjAddress: "",
        subjPhone: "",
        subjEmail: "",
        subjDns: "",
        subjEdrpouCode: "",
        subjDrfoCode: "",
    };
}
exports.SignOwnerInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.issuerCn !== "") {
            writer.uint32(18).string(message.issuerCn);
        }
        if (message.serial !== "") {
            writer.uint32(26).string(message.serial);
        }
        if (message.subject !== "") {
            writer.uint32(34).string(message.subject);
        }
        if (message.subjCn !== "") {
            writer.uint32(42).string(message.subjCn);
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
            writer.uint32(90).string(message.subjFullName);
        }
        if (message.subjAddress !== "") {
            writer.uint32(98).string(message.subjAddress);
        }
        if (message.subjPhone !== "") {
            writer.uint32(106).string(message.subjPhone);
        }
        if (message.subjEmail !== "") {
            writer.uint32(114).string(message.subjEmail);
        }
        if (message.subjDns !== "") {
            writer.uint32(122).string(message.subjDns);
        }
        if (message.subjEdrpouCode !== "") {
            writer.uint32(130).string(message.subjEdrpouCode);
        }
        if (message.subjDrfoCode !== "") {
            writer.uint32(138).string(message.subjDrfoCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignOwnerInfo();
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
                    message.issuerCn = reader.string();
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
                    message.subjCn = reader.string();
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
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.subjFullName = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.subjAddress = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.subjPhone = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.subjEmail = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.subjDns = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.subjEdrpouCode = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.subjDrfoCode = reader.string();
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
            issuerCn: isSet(object.issuerCn) ? String(object.issuerCn) : "",
            serial: isSet(object.serial) ? String(object.serial) : "",
            subject: isSet(object.subject) ? String(object.subject) : "",
            subjCn: isSet(object.subjCn) ? String(object.subjCn) : "",
            subjOrg: isSet(object.subjOrg) ? String(object.subjOrg) : "",
            subjOrgUnit: isSet(object.subjOrgUnit) ? String(object.subjOrgUnit) : "",
            subjTitle: isSet(object.subjTitle) ? String(object.subjTitle) : "",
            subjState: isSet(object.subjState) ? String(object.subjState) : "",
            subjLocality: isSet(object.subjLocality) ? String(object.subjLocality) : "",
            subjFullName: isSet(object.subjFullName) ? String(object.subjFullName) : "",
            subjAddress: isSet(object.subjAddress) ? String(object.subjAddress) : "",
            subjPhone: isSet(object.subjPhone) ? String(object.subjPhone) : "",
            subjEmail: isSet(object.subjEmail) ? String(object.subjEmail) : "",
            subjDns: isSet(object.subjDns) ? String(object.subjDns) : "",
            subjEdrpouCode: isSet(object.subjEdrpouCode) ? String(object.subjEdrpouCode) : "",
            subjDrfoCode: isSet(object.subjDrfoCode) ? String(object.subjDrfoCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if (message.issuerCn !== "") {
            obj.issuerCn = message.issuerCn;
        }
        if (message.serial !== "") {
            obj.serial = message.serial;
        }
        if (message.subject !== "") {
            obj.subject = message.subject;
        }
        if (message.subjCn !== "") {
            obj.subjCn = message.subjCn;
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
        if (message.subjEmail !== "") {
            obj.subjEmail = message.subjEmail;
        }
        if (message.subjDns !== "") {
            obj.subjDns = message.subjDns;
        }
        if (message.subjEdrpouCode !== "") {
            obj.subjEdrpouCode = message.subjEdrpouCode;
        }
        if (message.subjDrfoCode !== "") {
            obj.subjDrfoCode = message.subjDrfoCode;
        }
        return obj;
    },
    create(base) {
        return exports.SignOwnerInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignOwnerInfo();
        message.issuer = object.issuer ?? "";
        message.issuerCn = object.issuerCn ?? "";
        message.serial = object.serial ?? "";
        message.subject = object.subject ?? "";
        message.subjCn = object.subjCn ?? "";
        message.subjOrg = object.subjOrg ?? "";
        message.subjOrgUnit = object.subjOrgUnit ?? "";
        message.subjTitle = object.subjTitle ?? "";
        message.subjState = object.subjState ?? "";
        message.subjLocality = object.subjLocality ?? "";
        message.subjFullName = object.subjFullName ?? "";
        message.subjAddress = object.subjAddress ?? "";
        message.subjPhone = object.subjPhone ?? "";
        message.subjEmail = object.subjEmail ?? "";
        message.subjDns = object.subjDns ?? "";
        message.subjEdrpouCode = object.subjEdrpouCode ?? "";
        message.subjDrfoCode = object.subjDrfoCode ?? "";
        return message;
    },
};
function createBaseSignTimeInfo() {
    return { isTimeAvail: false, isTimeStamp: false, time: undefined, timeArray: [] };
}
exports.SignTimeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isTimeAvail === true) {
            writer.uint32(8).bool(message.isTimeAvail);
        }
        if (message.isTimeStamp === true) {
            writer.uint32(16).bool(message.isTimeStamp);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.timeArray) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignTimeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isTimeAvail = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isTimeStamp = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag === 32) {
                        message.timeArray.push(reader.int32());
                        continue;
                    }
                    if (tag === 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.timeArray.push(reader.int32());
                        }
                        continue;
                    }
                    break;
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
            isTimeAvail: isSet(object.isTimeAvail) ? Boolean(object.isTimeAvail) : false,
            isTimeStamp: isSet(object.isTimeStamp) ? Boolean(object.isTimeStamp) : false,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            timeArray: Array.isArray(object?.timeArray) ? object.timeArray.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.isTimeAvail === true) {
            obj.isTimeAvail = message.isTimeAvail;
        }
        if (message.isTimeStamp === true) {
            obj.isTimeStamp = message.isTimeStamp;
        }
        if (message.time !== undefined) {
            obj.time = message.time.toISOString();
        }
        if (message.timeArray?.length) {
            obj.timeArray = message.timeArray.map((e) => Math.round(e));
        }
        return obj;
    },
    create(base) {
        return exports.SignTimeInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignTimeInfo();
        message.isTimeAvail = object.isTimeAvail ?? false;
        message.isTimeStamp = object.isTimeStamp ?? false;
        message.time = object.time ?? undefined;
        message.timeArray = object.timeArray?.map((e) => e) || [];
        return message;
    },
};
function createBaseVerifyInfoResponse() {
    return { ownerInfo: undefined, timeInfo: undefined, data: "" };
}
exports.VerifyInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ownerInfo !== undefined) {
            exports.SignOwnerInfo.encode(message.ownerInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.timeInfo !== undefined) {
            exports.SignTimeInfo.encode(message.timeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ownerInfo = exports.SignOwnerInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.timeInfo = exports.SignTimeInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.data = reader.string();
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
            ownerInfo: isSet(object.ownerInfo) ? exports.SignOwnerInfo.fromJSON(object.ownerInfo) : undefined,
            timeInfo: isSet(object.timeInfo) ? exports.SignTimeInfo.fromJSON(object.timeInfo) : undefined,
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ownerInfo !== undefined) {
            obj.ownerInfo = exports.SignOwnerInfo.toJSON(message.ownerInfo);
        }
        if (message.timeInfo !== undefined) {
            obj.timeInfo = exports.SignTimeInfo.toJSON(message.timeInfo);
        }
        if (message.data !== "") {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyInfoResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyInfoResponse();
        message.ownerInfo = (object.ownerInfo !== undefined && object.ownerInfo !== null)
            ? exports.SignOwnerInfo.fromPartial(object.ownerInfo)
            : undefined;
        message.timeInfo = (object.timeInfo !== undefined && object.timeInfo !== null)
            ? exports.SignTimeInfo.fromPartial(object.timeInfo)
            : undefined;
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseVerifySignExternalRequest() {
    return { data: "", signature: "" };
}
exports.VerifySignExternalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifySignExternalRequest();
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
            data: isSet(object.data) ? String(object.data) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data !== "") {
            obj.data = message.data;
        }
        if (message.signature !== "") {
            obj.signature = message.signature;
        }
        return obj;
    },
    create(base) {
        return exports.VerifySignExternalRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifySignExternalRequest();
        message.data = object.data ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
};
function createBaseComposeGroupSignResponse() {
    return { signedFile: "", signature: "" };
}
exports.ComposeGroupSignResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signedFile !== "") {
            writer.uint32(10).string(message.signedFile);
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseComposeGroupSignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signedFile = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
            signedFile: isSet(object.signedFile) ? String(object.signedFile) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signedFile !== "") {
            obj.signedFile = message.signedFile;
        }
        if (message.signature !== "") {
            obj.signature = message.signature;
        }
        return obj;
    },
    create(base) {
        return exports.ComposeGroupSignResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseComposeGroupSignResponse();
        message.signedFile = object.signedFile ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
};
function createBaseComposeGroupSignRequest() {
    return { uuid: "", signatures: [], contentBase64: "", returnSignedFile: undefined };
}
exports.ComposeGroupSignRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        for (const v of message.signatures) {
            writer.uint32(18).string(v);
        }
        if (message.contentBase64 !== "") {
            writer.uint32(26).string(message.contentBase64);
        }
        if (message.returnSignedFile !== undefined) {
            writer.uint32(32).bool(message.returnSignedFile);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseComposeGroupSignRequest();
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
                    message.signatures.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.contentBase64 = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.returnSignedFile = reader.bool();
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
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => String(e)) : [],
            contentBase64: isSet(object.contentBase64) ? String(object.contentBase64) : "",
            returnSignedFile: isSet(object.returnSignedFile) ? Boolean(object.returnSignedFile) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uuid !== "") {
            obj.uuid = message.uuid;
        }
        if (message.signatures?.length) {
            obj.signatures = message.signatures;
        }
        if (message.contentBase64 !== "") {
            obj.contentBase64 = message.contentBase64;
        }
        if (message.returnSignedFile !== undefined) {
            obj.returnSignedFile = message.returnSignedFile;
        }
        return obj;
    },
    create(base) {
        return exports.ComposeGroupSignRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseComposeGroupSignRequest();
        message.uuid = object.uuid ?? "";
        message.signatures = object.signatures?.map((e) => e) || [];
        message.contentBase64 = object.contentBase64 ?? "";
        message.returnSignedFile = object.returnSignedFile ?? undefined;
        return message;
    },
};
function createBaseEnvelopedDataResponse() {
    return { envelopedData: "" };
}
exports.EnvelopedDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.envelopedData !== "") {
            writer.uint32(10).string(message.envelopedData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnvelopedDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.envelopedData = reader.string();
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
        return { envelopedData: isSet(object.envelopedData) ? String(object.envelopedData) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.envelopedData !== "") {
            obj.envelopedData = message.envelopedData;
        }
        return obj;
    },
    create(base) {
        return exports.EnvelopedDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnvelopedDataResponse();
        message.envelopedData = object.envelopedData ?? "";
        return message;
    },
};
function createBaseSignAndEnvelopContentRequest() {
    return { contentBase64: "", recipientCertBash64: "" };
}
exports.SignAndEnvelopContentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contentBase64 !== "") {
            writer.uint32(10).string(message.contentBase64);
        }
        if (message.recipientCertBash64 !== "") {
            writer.uint32(18).string(message.recipientCertBash64);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignAndEnvelopContentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.contentBase64 = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.recipientCertBash64 = reader.string();
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
            contentBase64: isSet(object.contentBase64) ? String(object.contentBase64) : "",
            recipientCertBash64: isSet(object.recipientCertBash64) ? String(object.recipientCertBash64) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contentBase64 !== "") {
            obj.contentBase64 = message.contentBase64;
        }
        if (message.recipientCertBash64 !== "") {
            obj.recipientCertBash64 = message.recipientCertBash64;
        }
        return obj;
    },
    create(base) {
        return exports.SignAndEnvelopContentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignAndEnvelopContentRequest();
        message.contentBase64 = object.contentBase64 ?? "";
        message.recipientCertBash64 = object.recipientCertBash64 ?? "";
        return message;
    },
};
function createBaseVerifyAndDevelopContentRequest() {
    return { envelopedDataBase64: "", senderCertBash64: undefined };
}
exports.VerifyAndDevelopContentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.envelopedDataBase64 !== "") {
            writer.uint32(10).string(message.envelopedDataBase64);
        }
        if (message.senderCertBash64 !== undefined) {
            writer.uint32(18).string(message.senderCertBash64);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyAndDevelopContentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.envelopedDataBase64 = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.senderCertBash64 = reader.string();
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
            envelopedDataBase64: isSet(object.envelopedDataBase64) ? String(object.envelopedDataBase64) : "",
            senderCertBash64: isSet(object.senderCertBash64) ? String(object.senderCertBash64) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.envelopedDataBase64 !== "") {
            obj.envelopedDataBase64 = message.envelopedDataBase64;
        }
        if (message.senderCertBash64 !== undefined) {
            obj.senderCertBash64 = message.senderCertBash64;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyAndDevelopContentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyAndDevelopContentRequest();
        message.envelopedDataBase64 = object.envelopedDataBase64 ?? "";
        message.senderCertBash64 = object.senderCertBash64 ?? undefined;
        return message;
    },
};
function createBaseDevelopedDataResponse() {
    return { ownerInfo: undefined, timeInfo: undefined, data: "" };
}
exports.DevelopedDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ownerInfo !== undefined) {
            exports.SignOwnerInfo.encode(message.ownerInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.timeInfo !== undefined) {
            exports.SignTimeInfo.encode(message.timeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDevelopedDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ownerInfo = exports.SignOwnerInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.timeInfo = exports.SignTimeInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.data = reader.string();
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
            ownerInfo: isSet(object.ownerInfo) ? exports.SignOwnerInfo.fromJSON(object.ownerInfo) : undefined,
            timeInfo: isSet(object.timeInfo) ? exports.SignTimeInfo.fromJSON(object.timeInfo) : undefined,
            data: isSet(object.data) ? String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ownerInfo !== undefined) {
            obj.ownerInfo = exports.SignOwnerInfo.toJSON(message.ownerInfo);
        }
        if (message.timeInfo !== undefined) {
            obj.timeInfo = exports.SignTimeInfo.toJSON(message.timeInfo);
        }
        if (message.data !== "") {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.DevelopedDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDevelopedDataResponse();
        message.ownerInfo = (object.ownerInfo !== undefined && object.ownerInfo !== null)
            ? exports.SignOwnerInfo.fromPartial(object.ownerInfo)
            : undefined;
        message.timeInfo = (object.timeInfo !== undefined && object.timeInfo !== null)
            ? exports.SignTimeInfo.fromPartial(object.timeInfo)
            : undefined;
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseDevelopFileRequest() {
    return { file: "", receiverCert: "" };
}
exports.DevelopFileRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.file !== "") {
            writer.uint32(10).string(message.file);
        }
        if (message.receiverCert !== "") {
            writer.uint32(18).string(message.receiverCert);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDevelopFileRequest();
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
                    message.receiverCert = reader.string();
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
            receiverCert: isSet(object.receiverCert) ? String(object.receiverCert) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.file !== "") {
            obj.file = message.file;
        }
        if (message.receiverCert !== "") {
            obj.receiverCert = message.receiverCert;
        }
        return obj;
    },
    create(base) {
        return exports.DevelopFileRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDevelopFileRequest();
        message.file = object.file ?? "";
        message.receiverCert = object.receiverCert ?? "";
        return message;
    },
};
function createBaseDevelopFileResponse() {
    return { data: "" };
}
exports.DevelopFileResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDevelopFileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data = reader.string();
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
        return { data: isSet(object.data) ? String(object.data) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.data !== "") {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.DevelopFileResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDevelopFileResponse();
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseEnvelopFileRequest() {
    return { file: "", isAppendCert: false, receiverCerts: [] };
}
exports.EnvelopFileRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.file !== "") {
            writer.uint32(10).string(message.file);
        }
        if (message.isAppendCert === true) {
            writer.uint32(16).bool(message.isAppendCert);
        }
        for (const v of message.receiverCerts) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnvelopFileRequest();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.isAppendCert = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.receiverCerts.push(reader.string());
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
            isAppendCert: isSet(object.isAppendCert) ? Boolean(object.isAppendCert) : false,
            receiverCerts: Array.isArray(object?.receiverCerts) ? object.receiverCerts.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.file !== "") {
            obj.file = message.file;
        }
        if (message.isAppendCert === true) {
            obj.isAppendCert = message.isAppendCert;
        }
        if (message.receiverCerts?.length) {
            obj.receiverCerts = message.receiverCerts;
        }
        return obj;
    },
    create(base) {
        return exports.EnvelopFileRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnvelopFileRequest();
        message.file = object.file ?? "";
        message.isAppendCert = object.isAppendCert ?? false;
        message.receiverCerts = object.receiverCerts?.map((e) => e) || [];
        return message;
    },
};
function createBaseEnvelopFileResponse() {
    return { data: "" };
}
exports.EnvelopFileResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnvelopFileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data = reader.string();
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
        return { data: isSet(object.data) ? String(object.data) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.data !== "") {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.EnvelopFileResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnvelopFileResponse();
        message.data = object.data ?? "";
        return message;
    },
};
const tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
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
//# sourceMappingURL=crypto-doc.js.map