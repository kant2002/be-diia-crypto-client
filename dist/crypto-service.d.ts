import type { CallContext, CallOptions } from "nice-grpc-common";
import { DevelopUserDataRequest, DevelopUserDataResponse, GenerateCertificateRequest, GenerateCertificateResponse } from "./crypto-bankid";
import { EncryptDataRequest, EncryptDataResponse, ParseCertificateRequest, ParseCertificateResponse, SignAndEncryptFileRequest, SignAndEncryptFileResponse, SignEnvelopeArchiveContentRequest, SignEnvelopeArchiveResponse, SignFileRequest, SignFileResponse } from "./crypto-common";
import { ComposeGroupSignRequest, ComposeGroupSignResponse, DevelopedDataResponse, DevelopFileRequest, DevelopFileResponse, EnvelopedDataResponse, EnvelopFileRequest, EnvelopFileResponse, GenHashRequest, GenHashResponse, GenSignRequest, GenSignResponse, SignAndEnvelopContentRequest, SignHashRequest, SignHashResponse, VerifyAndDevelopContentRequest, VerifyHashRequest, VerifyInfoResponse, VerifyInfoResponseInternal, VerifySignExternalRequest, VerifySignInternalRequest } from "./crypto-doc";
export type CryptoDocServiceDefinition = typeof CryptoDocServiceDefinition;
export declare const CryptoDocServiceDefinition: {
    readonly name: "CryptoDocService";
    readonly fullName: "ua.gov.diia.crypto.CryptoDocService";
    readonly methods: {
        readonly docContentEnvelope: {
            readonly name: "docContentEnvelope";
            readonly requestType: {
                encode(message: EnvelopFileRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): EnvelopFileRequest;
                fromJSON(object: any): EnvelopFileRequest;
                toJSON(message: EnvelopFileRequest): unknown;
                create(base?: {
                    file?: string | undefined;
                    isAppendCert?: boolean | undefined;
                    receiverCerts?: string[] | undefined;
                } | undefined): EnvelopFileRequest;
                fromPartial(object: {
                    file?: string | undefined;
                    isAppendCert?: boolean | undefined;
                    receiverCerts?: string[] | undefined;
                }): EnvelopFileRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: EnvelopFileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): EnvelopFileResponse;
                fromJSON(object: any): EnvelopFileResponse;
                toJSON(message: EnvelopFileResponse): unknown;
                create(base?: {
                    data?: string | undefined;
                } | undefined): EnvelopFileResponse;
                fromPartial(object: {
                    data?: string | undefined;
                }): EnvelopFileResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docContentDevelop: {
            readonly name: "docContentDevelop";
            readonly requestType: {
                encode(message: DevelopFileRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): DevelopFileRequest;
                fromJSON(object: any): DevelopFileRequest;
                toJSON(message: DevelopFileRequest): unknown;
                create(base?: {
                    file?: string | undefined;
                    receiverCert?: string | undefined;
                } | undefined): DevelopFileRequest;
                fromPartial(object: {
                    file?: string | undefined;
                    receiverCert?: string | undefined;
                }): DevelopFileRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DevelopFileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): DevelopFileResponse;
                fromJSON(object: any): DevelopFileResponse;
                toJSON(message: DevelopFileResponse): unknown;
                create(base?: {
                    data?: string | undefined;
                } | undefined): DevelopFileResponse;
                fromPartial(object: {
                    data?: string | undefined;
                }): DevelopFileResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docContentVerifyAndDevelop: {
            readonly name: "docContentVerifyAndDevelop";
            readonly requestType: {
                encode(message: VerifyAndDevelopContentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): VerifyAndDevelopContentRequest;
                fromJSON(object: any): VerifyAndDevelopContentRequest;
                toJSON(message: VerifyAndDevelopContentRequest): unknown;
                create(base?: {
                    envelopedDataBase64?: string | undefined;
                    senderCertBash64?: string | undefined;
                } | undefined): VerifyAndDevelopContentRequest;
                fromPartial(object: {
                    envelopedDataBase64?: string | undefined;
                    senderCertBash64?: string | undefined;
                }): VerifyAndDevelopContentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DevelopedDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): DevelopedDataResponse;
                fromJSON(object: any): DevelopedDataResponse;
                toJSON(message: DevelopedDataResponse): unknown;
                create(base?: {
                    ownerInfo?: {
                        issuer?: string | undefined;
                        issuerCn?: string | undefined;
                        serial?: string | undefined;
                        subject?: string | undefined;
                        subjCn?: string | undefined;
                        subjOrg?: string | undefined;
                        subjOrgUnit?: string | undefined;
                        subjTitle?: string | undefined;
                        subjState?: string | undefined;
                        subjLocality?: string | undefined;
                        subjFullName?: string | undefined;
                        subjAddress?: string | undefined;
                        subjPhone?: string | undefined;
                        subjEmail?: string | undefined;
                        subjDns?: string | undefined;
                        subjEdrpouCode?: string | undefined;
                        subjDrfoCode?: string | undefined;
                    } | undefined;
                    timeInfo?: {
                        isTimeAvail?: boolean | undefined;
                        isTimeStamp?: boolean | undefined;
                        time?: Date | undefined;
                        timeArray?: number[] | undefined;
                    } | undefined;
                    data?: string | undefined;
                } | undefined): DevelopedDataResponse;
                fromPartial(object: {
                    ownerInfo?: {
                        issuer?: string | undefined;
                        issuerCn?: string | undefined;
                        serial?: string | undefined;
                        subject?: string | undefined;
                        subjCn?: string | undefined;
                        subjOrg?: string | undefined;
                        subjOrgUnit?: string | undefined;
                        subjTitle?: string | undefined;
                        subjState?: string | undefined;
                        subjLocality?: string | undefined;
                        subjFullName?: string | undefined;
                        subjAddress?: string | undefined;
                        subjPhone?: string | undefined;
                        subjEmail?: string | undefined;
                        subjDns?: string | undefined;
                        subjEdrpouCode?: string | undefined;
                        subjDrfoCode?: string | undefined;
                    } | undefined;
                    timeInfo?: {
                        isTimeAvail?: boolean | undefined;
                        isTimeStamp?: boolean | undefined;
                        time?: Date | undefined;
                        timeArray?: number[] | undefined;
                    } | undefined;
                    data?: string | undefined;
                }): DevelopedDataResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docContentSignAndEnvelop: {
            readonly name: "docContentSignAndEnvelop";
            readonly requestType: {
                encode(message: SignAndEnvelopContentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignAndEnvelopContentRequest;
                fromJSON(object: any): SignAndEnvelopContentRequest;
                toJSON(message: SignAndEnvelopContentRequest): unknown;
                create(base?: {
                    contentBase64?: string | undefined;
                    recipientCertBash64?: string | undefined;
                } | undefined): SignAndEnvelopContentRequest;
                fromPartial(object: {
                    contentBase64?: string | undefined;
                    recipientCertBash64?: string | undefined;
                }): SignAndEnvelopContentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: EnvelopedDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): EnvelopedDataResponse;
                fromJSON(object: any): EnvelopedDataResponse;
                toJSON(message: EnvelopedDataResponse): unknown;
                create(base?: {
                    envelopedData?: string | undefined;
                } | undefined): EnvelopedDataResponse;
                fromPartial(object: {
                    envelopedData?: string | undefined;
                }): EnvelopedDataResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docComposeGroupSignExternal: {
            readonly name: "docComposeGroupSignExternal";
            readonly requestType: {
                encode(message: ComposeGroupSignRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): ComposeGroupSignRequest;
                fromJSON(object: any): ComposeGroupSignRequest;
                toJSON(message: ComposeGroupSignRequest): unknown;
                create(base?: {
                    uuid?: string | undefined;
                    signatures?: string[] | undefined;
                    contentBase64?: string | undefined;
                    returnSignedFile?: boolean | undefined;
                } | undefined): ComposeGroupSignRequest;
                fromPartial(object: {
                    uuid?: string | undefined;
                    signatures?: string[] | undefined;
                    contentBase64?: string | undefined;
                    returnSignedFile?: boolean | undefined;
                }): ComposeGroupSignRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ComposeGroupSignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): ComposeGroupSignResponse;
                fromJSON(object: any): ComposeGroupSignResponse;
                toJSON(message: ComposeGroupSignResponse): unknown;
                create(base?: {
                    signedFile?: string | undefined;
                    signature?: string | undefined;
                } | undefined): ComposeGroupSignResponse;
                fromPartial(object: {
                    signedFile?: string | undefined;
                    signature?: string | undefined;
                }): ComposeGroupSignResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docVerifySignExternal: {
            readonly name: "docVerifySignExternal";
            readonly requestType: {
                encode(message: VerifySignExternalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): VerifySignExternalRequest;
                fromJSON(object: any): VerifySignExternalRequest;
                toJSON(message: VerifySignExternalRequest): unknown;
                create(base?: {
                    data?: string | undefined;
                    signature?: string | undefined;
                } | undefined): VerifySignExternalRequest;
                fromPartial(object: {
                    data?: string | undefined;
                    signature?: string | undefined;
                }): VerifySignExternalRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): VerifyInfoResponse;
                fromJSON(object: any): VerifyInfoResponse;
                toJSON(message: VerifyInfoResponse): unknown;
                create(base?: {
                    ownerInfo?: {
                        issuer?: string | undefined;
                        issuerCn?: string | undefined;
                        serial?: string | undefined;
                        subject?: string | undefined;
                        subjCn?: string | undefined;
                        subjOrg?: string | undefined;
                        subjOrgUnit?: string | undefined;
                        subjTitle?: string | undefined;
                        subjState?: string | undefined;
                        subjLocality?: string | undefined;
                        subjFullName?: string | undefined;
                        subjAddress?: string | undefined;
                        subjPhone?: string | undefined;
                        subjEmail?: string | undefined;
                        subjDns?: string | undefined;
                        subjEdrpouCode?: string | undefined;
                        subjDrfoCode?: string | undefined;
                    } | undefined;
                    timeInfo?: {
                        isTimeAvail?: boolean | undefined;
                        isTimeStamp?: boolean | undefined;
                        time?: Date | undefined;
                        timeArray?: number[] | undefined;
                    } | undefined;
                    data?: string | undefined;
                } | undefined): VerifyInfoResponse;
                fromPartial(object: {
                    ownerInfo?: {
                        issuer?: string | undefined;
                        issuerCn?: string | undefined;
                        serial?: string | undefined;
                        subject?: string | undefined;
                        subjCn?: string | undefined;
                        subjOrg?: string | undefined;
                        subjOrgUnit?: string | undefined;
                        subjTitle?: string | undefined;
                        subjState?: string | undefined;
                        subjLocality?: string | undefined;
                        subjFullName?: string | undefined;
                        subjAddress?: string | undefined;
                        subjPhone?: string | undefined;
                        subjEmail?: string | undefined;
                        subjDns?: string | undefined;
                        subjEdrpouCode?: string | undefined;
                        subjDrfoCode?: string | undefined;
                    } | undefined;
                    timeInfo?: {
                        isTimeAvail?: boolean | undefined;
                        isTimeStamp?: boolean | undefined;
                        time?: Date | undefined;
                        timeArray?: number[] | undefined;
                    } | undefined;
                    data?: string | undefined;
                }): VerifyInfoResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docVerifySignInternal: {
            readonly name: "docVerifySignInternal";
            readonly requestType: {
                encode(message: VerifySignInternalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): VerifySignInternalRequest;
                fromJSON(object: any): VerifySignInternalRequest;
                toJSON(message: VerifySignInternalRequest): unknown;
                create(base?: {
                    signedData?: string | undefined;
                } | undefined): VerifySignInternalRequest;
                fromPartial(object: {
                    signedData?: string | undefined;
                }): VerifySignInternalRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyInfoResponseInternal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): VerifyInfoResponseInternal;
                fromJSON(object: any): VerifyInfoResponseInternal;
                toJSON(message: VerifyInfoResponseInternal): unknown;
                create(base?: {
                    ownerInfo?: {
                        issuer?: string | undefined;
                        issuerCn?: string | undefined;
                        serial?: string | undefined;
                        subject?: string | undefined;
                        subjCn?: string | undefined;
                        subjOrg?: string | undefined;
                        subjOrgUnit?: string | undefined;
                        subjTitle?: string | undefined;
                        subjState?: string | undefined;
                        subjLocality?: string | undefined;
                        subjFullName?: string | undefined;
                        subjAddress?: string | undefined;
                        subjPhone?: string | undefined;
                        subjEmail?: string | undefined;
                        subjDns?: string | undefined;
                        subjEdrpouCode?: string | undefined;
                        subjDrfoCode?: string | undefined;
                    } | undefined;
                    timeInfo?: {
                        isTimeAvail?: boolean | undefined;
                        isTimeStamp?: boolean | undefined;
                        time?: Date | undefined;
                        timeArray?: number[] | undefined;
                    } | undefined;
                    data?: string | undefined;
                    base64String?: string | undefined;
                } | undefined): VerifyInfoResponseInternal;
                fromPartial(object: {
                    ownerInfo?: {
                        issuer?: string | undefined;
                        issuerCn?: string | undefined;
                        serial?: string | undefined;
                        subject?: string | undefined;
                        subjCn?: string | undefined;
                        subjOrg?: string | undefined;
                        subjOrgUnit?: string | undefined;
                        subjTitle?: string | undefined;
                        subjState?: string | undefined;
                        subjLocality?: string | undefined;
                        subjFullName?: string | undefined;
                        subjAddress?: string | undefined;
                        subjPhone?: string | undefined;
                        subjEmail?: string | undefined;
                        subjDns?: string | undefined;
                        subjEdrpouCode?: string | undefined;
                        subjDrfoCode?: string | undefined;
                    } | undefined;
                    timeInfo?: {
                        isTimeAvail?: boolean | undefined;
                        isTimeStamp?: boolean | undefined;
                        time?: Date | undefined;
                        timeArray?: number[] | undefined;
                    } | undefined;
                    data?: string | undefined;
                    base64String?: string | undefined;
                }): VerifyInfoResponseInternal;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docGenerateSignature: {
            readonly name: "docGenerateSignature";
            readonly requestType: {
                encode(message: GenSignRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): GenSignRequest;
                fromJSON(object: any): GenSignRequest;
                toJSON(message: GenSignRequest): unknown;
                create(base?: {
                    contentBase64?: string | undefined;
                    external?: boolean | undefined;
                    signAlgorithm?: import("./crypto-doc").SignType | undefined;
                } | undefined): GenSignRequest;
                fromPartial(object: {
                    contentBase64?: string | undefined;
                    external?: boolean | undefined;
                    signAlgorithm?: import("./crypto-doc").SignType | undefined;
                }): GenSignRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GenSignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): GenSignResponse;
                fromJSON(object: any): GenSignResponse;
                toJSON(message: GenSignResponse): unknown;
                create(base?: {
                    signature?: string | undefined;
                } | undefined): GenSignResponse;
                fromPartial(object: {
                    signature?: string | undefined;
                }): GenSignResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docSignHash: {
            readonly name: "docSignHash";
            readonly requestType: {
                encode(message: SignHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignHashRequest;
                fromJSON(object: any): SignHashRequest;
                toJSON(message: SignHashRequest): unknown;
                create(base?: {
                    hash?: string | undefined;
                    appendCert?: boolean | undefined;
                } | undefined): SignHashRequest;
                fromPartial(object: {
                    hash?: string | undefined;
                    appendCert?: boolean | undefined;
                }): SignHashRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SignHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignHashResponse;
                fromJSON(object: any): SignHashResponse;
                toJSON(message: SignHashResponse): unknown;
                create(base?: {
                    signature?: string | undefined;
                } | undefined): SignHashResponse;
                fromPartial(object: {
                    signature?: string | undefined;
                }): SignHashResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docVerifyHash: {
            readonly name: "docVerifyHash";
            readonly requestType: {
                encode(message: VerifyHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): VerifyHashRequest;
                fromJSON(object: any): VerifyHashRequest;
                toJSON(message: VerifyHashRequest): unknown;
                create(base?: {
                    hash?: string | undefined;
                    signature?: string | undefined;
                } | undefined): VerifyHashRequest;
                fromPartial(object: {
                    hash?: string | undefined;
                    signature?: string | undefined;
                }): VerifyHashRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): VerifyInfoResponse;
                fromJSON(object: any): VerifyInfoResponse;
                toJSON(message: VerifyInfoResponse): unknown;
                create(base?: {
                    ownerInfo?: {
                        issuer?: string | undefined;
                        issuerCn?: string | undefined;
                        serial?: string | undefined;
                        subject?: string | undefined;
                        subjCn?: string | undefined;
                        subjOrg?: string | undefined;
                        subjOrgUnit?: string | undefined;
                        subjTitle?: string | undefined;
                        subjState?: string | undefined;
                        subjLocality?: string | undefined;
                        subjFullName?: string | undefined;
                        subjAddress?: string | undefined;
                        subjPhone?: string | undefined;
                        subjEmail?: string | undefined;
                        subjDns?: string | undefined;
                        subjEdrpouCode?: string | undefined;
                        subjDrfoCode?: string | undefined;
                    } | undefined;
                    timeInfo?: {
                        isTimeAvail?: boolean | undefined;
                        isTimeStamp?: boolean | undefined;
                        time?: Date | undefined;
                        timeArray?: number[] | undefined;
                    } | undefined;
                    data?: string | undefined;
                } | undefined): VerifyInfoResponse;
                fromPartial(object: {
                    ownerInfo?: {
                        issuer?: string | undefined;
                        issuerCn?: string | undefined;
                        serial?: string | undefined;
                        subject?: string | undefined;
                        subjCn?: string | undefined;
                        subjOrg?: string | undefined;
                        subjOrgUnit?: string | undefined;
                        subjTitle?: string | undefined;
                        subjState?: string | undefined;
                        subjLocality?: string | undefined;
                        subjFullName?: string | undefined;
                        subjAddress?: string | undefined;
                        subjPhone?: string | undefined;
                        subjEmail?: string | undefined;
                        subjDns?: string | undefined;
                        subjEdrpouCode?: string | undefined;
                        subjDrfoCode?: string | undefined;
                    } | undefined;
                    timeInfo?: {
                        isTimeAvail?: boolean | undefined;
                        isTimeStamp?: boolean | undefined;
                        time?: Date | undefined;
                        timeArray?: number[] | undefined;
                    } | undefined;
                    data?: string | undefined;
                }): VerifyInfoResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly docGenerateHash: {
            readonly name: "docGenerateHash";
            readonly requestType: {
                encode(message: GenHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): GenHashRequest;
                fromJSON(object: any): GenHashRequest;
                toJSON(message: GenHashRequest): unknown;
                create(base?: {
                    content?: string | undefined;
                } | undefined): GenHashRequest;
                fromPartial(object: {
                    content?: string | undefined;
                }): GenHashRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GenHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): GenHashResponse;
                fromJSON(object: any): GenHashResponse;
                toJSON(message: GenHashResponse): unknown;
                create(base?: {
                    hash?: string | undefined;
                } | undefined): GenHashResponse;
                fromPartial(object: {
                    hash?: string | undefined;
                }): GenHashResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface CryptoDocServiceImplementation<CallContextExt = {}> {
    docContentEnvelope(request: EnvelopFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<EnvelopFileResponse>>;
    docContentDevelop(request: DevelopFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DevelopFileResponse>>;
    docContentVerifyAndDevelop(request: VerifyAndDevelopContentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DevelopedDataResponse>>;
    docContentSignAndEnvelop(request: SignAndEnvelopContentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<EnvelopedDataResponse>>;
    docComposeGroupSignExternal(request: ComposeGroupSignRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ComposeGroupSignResponse>>;
    docVerifySignExternal(request: VerifySignExternalRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyInfoResponse>>;
    docVerifySignInternal(request: VerifySignInternalRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyInfoResponseInternal>>;
    docGenerateSignature(request: GenSignRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GenSignResponse>>;
    docSignHash(request: SignHashRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SignHashResponse>>;
    docVerifyHash(request: VerifyHashRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyInfoResponse>>;
    docGenerateHash(request: GenHashRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GenHashResponse>>;
}
export interface CryptoDocServiceClient<CallOptionsExt = {}> {
    docContentEnvelope(request: DeepPartial<EnvelopFileRequest>, options?: CallOptions & CallOptionsExt): Promise<EnvelopFileResponse>;
    docContentDevelop(request: DeepPartial<DevelopFileRequest>, options?: CallOptions & CallOptionsExt): Promise<DevelopFileResponse>;
    docContentVerifyAndDevelop(request: DeepPartial<VerifyAndDevelopContentRequest>, options?: CallOptions & CallOptionsExt): Promise<DevelopedDataResponse>;
    docContentSignAndEnvelop(request: DeepPartial<SignAndEnvelopContentRequest>, options?: CallOptions & CallOptionsExt): Promise<EnvelopedDataResponse>;
    docComposeGroupSignExternal(request: DeepPartial<ComposeGroupSignRequest>, options?: CallOptions & CallOptionsExt): Promise<ComposeGroupSignResponse>;
    docVerifySignExternal(request: DeepPartial<VerifySignExternalRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyInfoResponse>;
    docVerifySignInternal(request: DeepPartial<VerifySignInternalRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyInfoResponseInternal>;
    docGenerateSignature(request: DeepPartial<GenSignRequest>, options?: CallOptions & CallOptionsExt): Promise<GenSignResponse>;
    docSignHash(request: DeepPartial<SignHashRequest>, options?: CallOptions & CallOptionsExt): Promise<SignHashResponse>;
    docVerifyHash(request: DeepPartial<VerifyHashRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyInfoResponse>;
    docGenerateHash(request: DeepPartial<GenHashRequest>, options?: CallOptions & CallOptionsExt): Promise<GenHashResponse>;
}
export type BankIdCryptoServiceDefinition = typeof BankIdCryptoServiceDefinition;
export declare const BankIdCryptoServiceDefinition: {
    readonly name: "BankIdCryptoService";
    readonly fullName: "ua.gov.diia.crypto.BankIdCryptoService";
    readonly methods: {
        readonly generateCertificate: {
            readonly name: "generateCertificate";
            readonly requestType: {
                encode(message: GenerateCertificateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): GenerateCertificateRequest;
                fromJSON(object: any): GenerateCertificateRequest;
                toJSON(message: GenerateCertificateRequest): unknown;
                create(base?: {
                    jwt?: string | undefined;
                } | undefined): GenerateCertificateRequest;
                fromPartial(object: {
                    jwt?: string | undefined;
                }): GenerateCertificateRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GenerateCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): GenerateCertificateResponse;
                fromJSON(object: any): GenerateCertificateResponse;
                toJSON(message: GenerateCertificateResponse): unknown;
                create(base?: {
                    cert?: string | undefined;
                } | undefined): GenerateCertificateResponse;
                fromPartial(object: {
                    cert?: string | undefined;
                }): GenerateCertificateResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly decrypt: {
            readonly name: "decrypt";
            readonly requestType: {
                encode(message: DevelopUserDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): DevelopUserDataRequest;
                fromJSON(object: any): DevelopUserDataRequest;
                toJSON(message: DevelopUserDataRequest): unknown;
                create(base?: {
                    customerCrypto?: string | undefined;
                    cert?: string | undefined;
                    state?: string | undefined;
                    sidBi?: string | undefined;
                    memberId?: string | undefined;
                    timestamp?: string | undefined;
                } | undefined): DevelopUserDataRequest;
                fromPartial(object: {
                    customerCrypto?: string | undefined;
                    cert?: string | undefined;
                    state?: string | undefined;
                    sidBi?: string | undefined;
                    memberId?: string | undefined;
                    timestamp?: string | undefined;
                }): DevelopUserDataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DevelopUserDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): DevelopUserDataResponse;
                fromJSON(object: any): DevelopUserDataResponse;
                toJSON(message: DevelopUserDataResponse): unknown;
                create(base?: {
                    data?: string | undefined;
                } | undefined): DevelopUserDataResponse;
                fromPartial(object: {
                    data?: string | undefined;
                }): DevelopUserDataResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface BankIdCryptoServiceImplementation<CallContextExt = {}> {
    generateCertificate(request: GenerateCertificateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GenerateCertificateResponse>>;
    decrypt(request: DevelopUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DevelopUserDataResponse>>;
}
export interface BankIdCryptoServiceClient<CallOptionsExt = {}> {
    generateCertificate(request: DeepPartial<GenerateCertificateRequest>, options?: CallOptions & CallOptionsExt): Promise<GenerateCertificateResponse>;
    decrypt(request: DeepPartial<DevelopUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<DevelopUserDataResponse>;
}
export type CryptoServiceDefinition = typeof CryptoServiceDefinition;
export declare const CryptoServiceDefinition: {
    readonly name: "CryptoService";
    readonly fullName: "ua.gov.diia.crypto.CryptoService";
    readonly methods: {
        readonly signAndEncrypt: {
            readonly name: "signAndEncrypt";
            readonly requestType: {
                encode(message: SignAndEncryptFileRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignAndEncryptFileRequest;
                fromJSON(object: any): SignAndEncryptFileRequest;
                toJSON(message: SignAndEncryptFileRequest): unknown;
                create(base?: {
                    file?: string | undefined;
                    fileName?: string | undefined;
                    certificate?: string | undefined;
                } | undefined): SignAndEncryptFileRequest;
                fromPartial(object: {
                    file?: string | undefined;
                    fileName?: string | undefined;
                    certificate?: string | undefined;
                }): SignAndEncryptFileRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SignAndEncryptFileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignAndEncryptFileResponse;
                fromJSON(object: any): SignAndEncryptFileResponse;
                toJSON(message: SignAndEncryptFileResponse): unknown;
                create(base?: {
                    fileContent?: string | undefined;
                    fileName?: string | undefined;
                } | undefined): SignAndEncryptFileResponse;
                fromPartial(object: {
                    fileContent?: string | undefined;
                    fileName?: string | undefined;
                }): SignAndEncryptFileResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly encryptData: {
            readonly name: "encryptData";
            readonly requestType: {
                encode(message: EncryptDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): EncryptDataRequest;
                fromJSON(object: any): EncryptDataRequest;
                toJSON(message: EncryptDataRequest): unknown;
                create(base?: {
                    data?: string | undefined;
                    certificate?: string | undefined;
                } | undefined): EncryptDataRequest;
                fromPartial(object: {
                    data?: string | undefined;
                    certificate?: string | undefined;
                }): EncryptDataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: EncryptDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): EncryptDataResponse;
                fromJSON(object: any): EncryptDataResponse;
                toJSON(message: EncryptDataResponse): unknown;
                create(base?: {
                    encryptedData?: string | undefined;
                } | undefined): EncryptDataResponse;
                fromPartial(object: {
                    encryptedData?: string | undefined;
                }): EncryptDataResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly signFile: {
            readonly name: "signFile";
            readonly requestType: {
                encode(message: SignFileRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignFileRequest;
                fromJSON(object: any): SignFileRequest;
                toJSON(message: SignFileRequest): unknown;
                create(base?: {
                    file?: string | undefined;
                    fileName?: string | undefined;
                    certificate?: string | undefined;
                    external?: boolean | undefined;
                    appendCert?: boolean | undefined;
                } | undefined): SignFileRequest;
                fromPartial(object: {
                    file?: string | undefined;
                    fileName?: string | undefined;
                    certificate?: string | undefined;
                    external?: boolean | undefined;
                    appendCert?: boolean | undefined;
                }): SignFileRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SignFileResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignFileResponse;
                fromJSON(object: any): SignFileResponse;
                toJSON(message: SignFileResponse): unknown;
                create(base?: {
                    fileContent?: string | undefined;
                    fileName?: string | undefined;
                } | undefined): SignFileResponse;
                fromPartial(object: {
                    fileContent?: string | undefined;
                    fileName?: string | undefined;
                }): SignFileResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly signArchiveFiles: {
            readonly name: "signArchiveFiles";
            readonly requestType: {
                encode(message: SignEnvelopeArchiveContentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignEnvelopeArchiveContentRequest;
                fromJSON(object: any): SignEnvelopeArchiveContentRequest;
                toJSON(message: SignEnvelopeArchiveContentRequest): unknown;
                create(base?: {
                    uuid?: string | undefined;
                    files?: {
                        name?: string | undefined;
                        file?: string | undefined;
                        signature?: string | undefined;
                    }[] | undefined;
                } | undefined): SignEnvelopeArchiveContentRequest;
                fromPartial(object: {
                    uuid?: string | undefined;
                    files?: {
                        name?: string | undefined;
                        file?: string | undefined;
                        signature?: string | undefined;
                    }[] | undefined;
                }): SignEnvelopeArchiveContentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SignEnvelopeArchiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): SignEnvelopeArchiveResponse;
                fromJSON(object: any): SignEnvelopeArchiveResponse;
                toJSON(message: SignEnvelopeArchiveResponse): unknown;
                create(base?: {
                    archive?: {
                        file?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined): SignEnvelopeArchiveResponse;
                fromPartial(object: {
                    archive?: {
                        file?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                }): SignEnvelopeArchiveResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly parseCertificate: {
            readonly name: "parseCertificate";
            readonly requestType: {
                encode(message: ParseCertificateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): ParseCertificateRequest;
                fromJSON(object: any): ParseCertificateRequest;
                toJSON(message: ParseCertificateRequest): unknown;
                create(base?: {
                    encodedCertificate?: string | undefined;
                } | undefined): ParseCertificateRequest;
                fromPartial(object: {
                    encodedCertificate?: string | undefined;
                }): ParseCertificateRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ParseCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): ParseCertificateResponse;
                fromJSON(object: any): ParseCertificateResponse;
                toJSON(message: ParseCertificateResponse): unknown;
                create(base?: {
                    issuer?: string | undefined;
                    issuerCN?: string | undefined;
                    serial?: string | undefined;
                    subject?: string | undefined;
                    subjCN?: string | undefined;
                    subjOrg?: string | undefined;
                    subjOrgUnit?: string | undefined;
                    subjTitle?: string | undefined;
                    subjState?: string | undefined;
                    subjLocality?: string | undefined;
                    subjFullName?: string | undefined;
                    subjAddress?: string | undefined;
                    subjPhone?: string | undefined;
                    subjEMail?: string | undefined;
                    subjDNS?: string | undefined;
                    subjEDRPOUCode?: string | undefined;
                    subjDRFOCode?: string | undefined;
                    subjNBUCode?: string | undefined;
                    subjSPFMCode?: string | undefined;
                    subjOCode?: string | undefined;
                    subjOUCode?: string | undefined;
                    subjUserCode?: string | undefined;
                    certBeginTime?: Date | undefined;
                    certEndTime?: Date | undefined;
                } | undefined): ParseCertificateResponse;
                fromPartial(object: {
                    issuer?: string | undefined;
                    issuerCN?: string | undefined;
                    serial?: string | undefined;
                    subject?: string | undefined;
                    subjCN?: string | undefined;
                    subjOrg?: string | undefined;
                    subjOrgUnit?: string | undefined;
                    subjTitle?: string | undefined;
                    subjState?: string | undefined;
                    subjLocality?: string | undefined;
                    subjFullName?: string | undefined;
                    subjAddress?: string | undefined;
                    subjPhone?: string | undefined;
                    subjEMail?: string | undefined;
                    subjDNS?: string | undefined;
                    subjEDRPOUCode?: string | undefined;
                    subjDRFOCode?: string | undefined;
                    subjNBUCode?: string | undefined;
                    subjSPFMCode?: string | undefined;
                    subjOCode?: string | undefined;
                    subjOUCode?: string | undefined;
                    subjUserCode?: string | undefined;
                    certBeginTime?: Date | undefined;
                    certEndTime?: Date | undefined;
                }): ParseCertificateResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface CryptoServiceImplementation<CallContextExt = {}> {
    signAndEncrypt(request: SignAndEncryptFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SignAndEncryptFileResponse>>;
    encryptData(request: EncryptDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<EncryptDataResponse>>;
    signFile(request: SignFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SignFileResponse>>;
    signArchiveFiles(request: SignEnvelopeArchiveContentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SignEnvelopeArchiveResponse>>;
    parseCertificate(request: ParseCertificateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ParseCertificateResponse>>;
}
export interface CryptoServiceClient<CallOptionsExt = {}> {
    signAndEncrypt(request: DeepPartial<SignAndEncryptFileRequest>, options?: CallOptions & CallOptionsExt): Promise<SignAndEncryptFileResponse>;
    encryptData(request: DeepPartial<EncryptDataRequest>, options?: CallOptions & CallOptionsExt): Promise<EncryptDataResponse>;
    signFile(request: DeepPartial<SignFileRequest>, options?: CallOptions & CallOptionsExt): Promise<SignFileResponse>;
    signArchiveFiles(request: DeepPartial<SignEnvelopeArchiveContentRequest>, options?: CallOptions & CallOptionsExt): Promise<SignEnvelopeArchiveResponse>;
    parseCertificate(request: DeepPartial<ParseCertificateRequest>, options?: CallOptions & CallOptionsExt): Promise<ParseCertificateResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=crypto-service.d.ts.map