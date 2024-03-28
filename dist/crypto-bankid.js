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
exports.DevelopUserDataResponse = exports.DevelopUserDataRequest = exports.GenerateCertificateResponse = exports.GenerateCertificateRequest = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenerateCertificateRequest() {
    return { jwt: undefined };
}
exports.GenerateCertificateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.jwt !== undefined) {
            writer.uint32(10).string(message.jwt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateCertificateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.jwt = reader.string();
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
        return { jwt: isSet(object.jwt) ? String(object.jwt) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.jwt !== undefined) {
            obj.jwt = message.jwt;
        }
        return obj;
    },
    create(base) {
        return exports.GenerateCertificateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenerateCertificateRequest();
        message.jwt = object.jwt ?? undefined;
        return message;
    },
};
function createBaseGenerateCertificateResponse() {
    return { cert: "" };
}
exports.GenerateCertificateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cert !== "") {
            writer.uint32(10).string(message.cert);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateCertificateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cert = reader.string();
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
        return { cert: isSet(object.cert) ? String(object.cert) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.cert !== "") {
            obj.cert = message.cert;
        }
        return obj;
    },
    create(base) {
        return exports.GenerateCertificateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenerateCertificateResponse();
        message.cert = object.cert ?? "";
        return message;
    },
};
function createBaseDevelopUserDataRequest() {
    return {
        customerCrypto: "",
        cert: "",
        state: undefined,
        sidBi: undefined,
        memberId: undefined,
        timestamp: undefined,
    };
}
exports.DevelopUserDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.customerCrypto !== "") {
            writer.uint32(10).string(message.customerCrypto);
        }
        if (message.cert !== "") {
            writer.uint32(18).string(message.cert);
        }
        if (message.state !== undefined) {
            writer.uint32(26).string(message.state);
        }
        if (message.sidBi !== undefined) {
            writer.uint32(34).string(message.sidBi);
        }
        if (message.memberId !== undefined) {
            writer.uint32(42).string(message.memberId);
        }
        if (message.timestamp !== undefined) {
            writer.uint32(50).string(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDevelopUserDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.customerCrypto = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.cert = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.state = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sidBi = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.memberId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.timestamp = reader.string();
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
            customerCrypto: isSet(object.customerCrypto) ? String(object.customerCrypto) : "",
            cert: isSet(object.cert) ? String(object.cert) : "",
            state: isSet(object.state) ? String(object.state) : undefined,
            sidBi: isSet(object.sidBi) ? String(object.sidBi) : undefined,
            memberId: isSet(object.memberId) ? String(object.memberId) : undefined,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.customerCrypto !== "") {
            obj.customerCrypto = message.customerCrypto;
        }
        if (message.cert !== "") {
            obj.cert = message.cert;
        }
        if (message.state !== undefined) {
            obj.state = message.state;
        }
        if (message.sidBi !== undefined) {
            obj.sidBi = message.sidBi;
        }
        if (message.memberId !== undefined) {
            obj.memberId = message.memberId;
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp;
        }
        return obj;
    },
    create(base) {
        return exports.DevelopUserDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDevelopUserDataRequest();
        message.customerCrypto = object.customerCrypto ?? "";
        message.cert = object.cert ?? "";
        message.state = object.state ?? undefined;
        message.sidBi = object.sidBi ?? undefined;
        message.memberId = object.memberId ?? undefined;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
};
function createBaseDevelopUserDataResponse() {
    return { data: "" };
}
exports.DevelopUserDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDevelopUserDataResponse();
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
        return exports.DevelopUserDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDevelopUserDataResponse();
        message.data = object.data ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=crypto-bankid.js.map