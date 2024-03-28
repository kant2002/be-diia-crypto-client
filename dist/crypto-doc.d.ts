import * as _m0 from "protobufjs/minimal";
export declare enum SignType {
    UNKNOWN = "UNKNOWN",
    CADES_BES = "CADES_BES",
    CADES_T = "CADES_T",
    CADES_C = "CADES_C",
    CADES_X_LONG = "CADES_X_LONG",
    CADES_X_LONG_TRUSTED = "CADES_X_LONG_TRUSTED"
}
export declare function signTypeFromJSON(object: any): SignType;
export declare function signTypeToJSON(object: SignType): string;
export declare function signTypeToNumber(object: SignType): number;
export interface VerifyHashRequest {
    hash: string;
    signature: string;
}
export interface GenHashRequest {
    content: string;
}
export interface GenHashResponse {
    /** secret */
    hash: string;
}
export interface SignHashResponse {
    /** secret */
    signature: string;
}
export interface SignHashRequest {
    hash: string;
    appendCert?: boolean | undefined;
}
export interface GenSignResponse {
    /** secret */
    signature: string;
}
export interface GenSignRequest {
    contentBase64: string;
    external?: boolean | undefined;
    signAlgorithm?: SignType | undefined;
}
export interface VerifySignInternalRequest {
    signedData: string;
}
export interface VerifyInfoResponseInternal {
    /** secret */
    ownerInfo: SignOwnerInfo | undefined;
    /** secret */
    timeInfo: SignTimeInfo | undefined;
    /** secret */
    data: string;
    /** secret */
    base64String: string;
}
export interface SignOwnerInfo {
    issuer: string;
    issuerCn: string;
    serial: string;
    subject: string;
    subjCn: string;
    subjOrg: string;
    subjOrgUnit: string;
    subjTitle: string;
    subjState: string;
    subjLocality: string;
    subjFullName: string;
    subjAddress: string;
    subjPhone: string;
    subjEmail: string;
    subjDns: string;
    subjEdrpouCode: string;
    subjDrfoCode: string;
}
export interface SignTimeInfo {
    isTimeAvail: boolean;
    isTimeStamp: boolean;
    time: Date | undefined;
    timeArray: number[];
}
export interface VerifyInfoResponse {
    /** secret */
    ownerInfo: SignOwnerInfo | undefined;
    /** secret */
    timeInfo: SignTimeInfo | undefined;
    /** secret */
    data: string;
}
export interface VerifySignExternalRequest {
    data: string;
    signature: string;
}
export interface ComposeGroupSignResponse {
    /** b64 */
    signedFile: string;
    signature: string;
}
export interface ComposeGroupSignRequest {
    uuid: string;
    signatures: string[];
    contentBase64: string;
    returnSignedFile?: boolean | undefined;
}
export interface EnvelopedDataResponse {
    /** secret */
    envelopedData: string;
}
export interface SignAndEnvelopContentRequest {
    /** b64 */
    contentBase64: string;
    /** b64 */
    recipientCertBash64: string;
}
export interface VerifyAndDevelopContentRequest {
    /** b64 */
    envelopedDataBase64: string;
    senderCertBash64?: string | undefined;
}
export interface DevelopedDataResponse {
    /** secret */
    ownerInfo: SignOwnerInfo | undefined;
    /** secret */
    timeInfo: SignTimeInfo | undefined;
    /** secret */
    data: string;
}
export interface DevelopFileRequest {
    file: string;
    receiverCert: string;
}
export interface DevelopFileResponse {
    data: string;
}
export interface EnvelopFileRequest {
    file: string;
    isAppendCert: boolean;
    receiverCerts: string[];
}
export interface EnvelopFileResponse {
    data: string;
}
export declare const VerifyHashRequest: {
    encode(message: VerifyHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyHashRequest;
    fromJSON(object: any): VerifyHashRequest;
    toJSON(message: VerifyHashRequest): unknown;
    create(base?: DeepPartial<VerifyHashRequest>): VerifyHashRequest;
    fromPartial(object: DeepPartial<VerifyHashRequest>): VerifyHashRequest;
};
export declare const GenHashRequest: {
    encode(message: GenHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenHashRequest;
    fromJSON(object: any): GenHashRequest;
    toJSON(message: GenHashRequest): unknown;
    create(base?: DeepPartial<GenHashRequest>): GenHashRequest;
    fromPartial(object: DeepPartial<GenHashRequest>): GenHashRequest;
};
export declare const GenHashResponse: {
    encode(message: GenHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenHashResponse;
    fromJSON(object: any): GenHashResponse;
    toJSON(message: GenHashResponse): unknown;
    create(base?: DeepPartial<GenHashResponse>): GenHashResponse;
    fromPartial(object: DeepPartial<GenHashResponse>): GenHashResponse;
};
export declare const SignHashResponse: {
    encode(message: SignHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignHashResponse;
    fromJSON(object: any): SignHashResponse;
    toJSON(message: SignHashResponse): unknown;
    create(base?: DeepPartial<SignHashResponse>): SignHashResponse;
    fromPartial(object: DeepPartial<SignHashResponse>): SignHashResponse;
};
export declare const SignHashRequest: {
    encode(message: SignHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignHashRequest;
    fromJSON(object: any): SignHashRequest;
    toJSON(message: SignHashRequest): unknown;
    create(base?: DeepPartial<SignHashRequest>): SignHashRequest;
    fromPartial(object: DeepPartial<SignHashRequest>): SignHashRequest;
};
export declare const GenSignResponse: {
    encode(message: GenSignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenSignResponse;
    fromJSON(object: any): GenSignResponse;
    toJSON(message: GenSignResponse): unknown;
    create(base?: DeepPartial<GenSignResponse>): GenSignResponse;
    fromPartial(object: DeepPartial<GenSignResponse>): GenSignResponse;
};
export declare const GenSignRequest: {
    encode(message: GenSignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenSignRequest;
    fromJSON(object: any): GenSignRequest;
    toJSON(message: GenSignRequest): unknown;
    create(base?: DeepPartial<GenSignRequest>): GenSignRequest;
    fromPartial(object: DeepPartial<GenSignRequest>): GenSignRequest;
};
export declare const VerifySignInternalRequest: {
    encode(message: VerifySignInternalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifySignInternalRequest;
    fromJSON(object: any): VerifySignInternalRequest;
    toJSON(message: VerifySignInternalRequest): unknown;
    create(base?: DeepPartial<VerifySignInternalRequest>): VerifySignInternalRequest;
    fromPartial(object: DeepPartial<VerifySignInternalRequest>): VerifySignInternalRequest;
};
export declare const VerifyInfoResponseInternal: {
    encode(message: VerifyInfoResponseInternal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyInfoResponseInternal;
    fromJSON(object: any): VerifyInfoResponseInternal;
    toJSON(message: VerifyInfoResponseInternal): unknown;
    create(base?: DeepPartial<VerifyInfoResponseInternal>): VerifyInfoResponseInternal;
    fromPartial(object: DeepPartial<VerifyInfoResponseInternal>): VerifyInfoResponseInternal;
};
export declare const SignOwnerInfo: {
    encode(message: SignOwnerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignOwnerInfo;
    fromJSON(object: any): SignOwnerInfo;
    toJSON(message: SignOwnerInfo): unknown;
    create(base?: DeepPartial<SignOwnerInfo>): SignOwnerInfo;
    fromPartial(object: DeepPartial<SignOwnerInfo>): SignOwnerInfo;
};
export declare const SignTimeInfo: {
    encode(message: SignTimeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignTimeInfo;
    fromJSON(object: any): SignTimeInfo;
    toJSON(message: SignTimeInfo): unknown;
    create(base?: DeepPartial<SignTimeInfo>): SignTimeInfo;
    fromPartial(object: DeepPartial<SignTimeInfo>): SignTimeInfo;
};
export declare const VerifyInfoResponse: {
    encode(message: VerifyInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyInfoResponse;
    fromJSON(object: any): VerifyInfoResponse;
    toJSON(message: VerifyInfoResponse): unknown;
    create(base?: DeepPartial<VerifyInfoResponse>): VerifyInfoResponse;
    fromPartial(object: DeepPartial<VerifyInfoResponse>): VerifyInfoResponse;
};
export declare const VerifySignExternalRequest: {
    encode(message: VerifySignExternalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifySignExternalRequest;
    fromJSON(object: any): VerifySignExternalRequest;
    toJSON(message: VerifySignExternalRequest): unknown;
    create(base?: DeepPartial<VerifySignExternalRequest>): VerifySignExternalRequest;
    fromPartial(object: DeepPartial<VerifySignExternalRequest>): VerifySignExternalRequest;
};
export declare const ComposeGroupSignResponse: {
    encode(message: ComposeGroupSignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComposeGroupSignResponse;
    fromJSON(object: any): ComposeGroupSignResponse;
    toJSON(message: ComposeGroupSignResponse): unknown;
    create(base?: DeepPartial<ComposeGroupSignResponse>): ComposeGroupSignResponse;
    fromPartial(object: DeepPartial<ComposeGroupSignResponse>): ComposeGroupSignResponse;
};
export declare const ComposeGroupSignRequest: {
    encode(message: ComposeGroupSignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComposeGroupSignRequest;
    fromJSON(object: any): ComposeGroupSignRequest;
    toJSON(message: ComposeGroupSignRequest): unknown;
    create(base?: DeepPartial<ComposeGroupSignRequest>): ComposeGroupSignRequest;
    fromPartial(object: DeepPartial<ComposeGroupSignRequest>): ComposeGroupSignRequest;
};
export declare const EnvelopedDataResponse: {
    encode(message: EnvelopedDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnvelopedDataResponse;
    fromJSON(object: any): EnvelopedDataResponse;
    toJSON(message: EnvelopedDataResponse): unknown;
    create(base?: DeepPartial<EnvelopedDataResponse>): EnvelopedDataResponse;
    fromPartial(object: DeepPartial<EnvelopedDataResponse>): EnvelopedDataResponse;
};
export declare const SignAndEnvelopContentRequest: {
    encode(message: SignAndEnvelopContentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignAndEnvelopContentRequest;
    fromJSON(object: any): SignAndEnvelopContentRequest;
    toJSON(message: SignAndEnvelopContentRequest): unknown;
    create(base?: DeepPartial<SignAndEnvelopContentRequest>): SignAndEnvelopContentRequest;
    fromPartial(object: DeepPartial<SignAndEnvelopContentRequest>): SignAndEnvelopContentRequest;
};
export declare const VerifyAndDevelopContentRequest: {
    encode(message: VerifyAndDevelopContentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyAndDevelopContentRequest;
    fromJSON(object: any): VerifyAndDevelopContentRequest;
    toJSON(message: VerifyAndDevelopContentRequest): unknown;
    create(base?: DeepPartial<VerifyAndDevelopContentRequest>): VerifyAndDevelopContentRequest;
    fromPartial(object: DeepPartial<VerifyAndDevelopContentRequest>): VerifyAndDevelopContentRequest;
};
export declare const DevelopedDataResponse: {
    encode(message: DevelopedDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DevelopedDataResponse;
    fromJSON(object: any): DevelopedDataResponse;
    toJSON(message: DevelopedDataResponse): unknown;
    create(base?: DeepPartial<DevelopedDataResponse>): DevelopedDataResponse;
    fromPartial(object: DeepPartial<DevelopedDataResponse>): DevelopedDataResponse;
};
export declare const DevelopFileRequest: {
    encode(message: DevelopFileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DevelopFileRequest;
    fromJSON(object: any): DevelopFileRequest;
    toJSON(message: DevelopFileRequest): unknown;
    create(base?: DeepPartial<DevelopFileRequest>): DevelopFileRequest;
    fromPartial(object: DeepPartial<DevelopFileRequest>): DevelopFileRequest;
};
export declare const DevelopFileResponse: {
    encode(message: DevelopFileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DevelopFileResponse;
    fromJSON(object: any): DevelopFileResponse;
    toJSON(message: DevelopFileResponse): unknown;
    create(base?: DeepPartial<DevelopFileResponse>): DevelopFileResponse;
    fromPartial(object: DeepPartial<DevelopFileResponse>): DevelopFileResponse;
};
export declare const EnvelopFileRequest: {
    encode(message: EnvelopFileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnvelopFileRequest;
    fromJSON(object: any): EnvelopFileRequest;
    toJSON(message: EnvelopFileRequest): unknown;
    create(base?: DeepPartial<EnvelopFileRequest>): EnvelopFileRequest;
    fromPartial(object: DeepPartial<EnvelopFileRequest>): EnvelopFileRequest;
};
export declare const EnvelopFileResponse: {
    encode(message: EnvelopFileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnvelopFileResponse;
    fromJSON(object: any): EnvelopFileResponse;
    toJSON(message: EnvelopFileResponse): unknown;
    create(base?: DeepPartial<EnvelopFileResponse>): EnvelopFileResponse;
    fromPartial(object: DeepPartial<EnvelopFileResponse>): EnvelopFileResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=crypto-doc.d.ts.map