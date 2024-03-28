import * as _m0 from "protobufjs/minimal";
export interface SignAndEncryptFileRequest {
    /** secret b64 */
    file: string;
    fileName: string;
    /** secret b64 */
    certificate: string;
}
export interface SignAndEncryptFileResponse {
    /** secret b64 */
    fileContent: string;
    fileName: string;
}
export interface EncryptDataRequest {
    data: string;
    /** secret b64 */
    certificate: string;
}
export interface EncryptDataResponse {
    /** secret b64 */
    encryptedData: string;
}
export interface SignFileRequest {
    /** b64 */
    file: string;
    fileName: string;
    /** b64 */
    certificate: string;
    external: boolean;
    appendCert: boolean;
}
export interface SignFileResponse {
    /** secret b64 */
    fileContent: string;
    fileName: string;
}
export interface SignEnvelopeArchiveContentRequest {
    uuid: string;
    files: ArchFile[];
}
export interface ArchFile {
    name: string;
    file: string;
    signature: string;
}
export interface SignEnvelopeArchiveResponse {
    /** secret */
    archive: Archive | undefined;
}
export interface Archive {
    file: string;
    name: string;
}
export interface ParseCertificateRequest {
    encodedCertificate: string;
}
export interface ParseCertificateResponse {
    issuer: string;
    issuerCN: string;
    serial: string;
    subject: string;
    subjCN: string;
    subjOrg: string;
    subjOrgUnit: string;
    subjTitle: string;
    subjState: string;
    subjLocality: string;
    subjFullName: string;
    subjAddress: string;
    subjPhone: string;
    subjEMail: string;
    subjDNS: string;
    subjEDRPOUCode: string;
    subjDRFOCode: string;
    subjNBUCode: string;
    subjSPFMCode: string;
    subjOCode: string;
    subjOUCode: string;
    subjUserCode: string;
    certBeginTime: Date | undefined;
    certEndTime: Date | undefined;
}
export declare const SignAndEncryptFileRequest: {
    encode(message: SignAndEncryptFileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignAndEncryptFileRequest;
    fromJSON(object: any): SignAndEncryptFileRequest;
    toJSON(message: SignAndEncryptFileRequest): unknown;
    create(base?: DeepPartial<SignAndEncryptFileRequest>): SignAndEncryptFileRequest;
    fromPartial(object: DeepPartial<SignAndEncryptFileRequest>): SignAndEncryptFileRequest;
};
export declare const SignAndEncryptFileResponse: {
    encode(message: SignAndEncryptFileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignAndEncryptFileResponse;
    fromJSON(object: any): SignAndEncryptFileResponse;
    toJSON(message: SignAndEncryptFileResponse): unknown;
    create(base?: DeepPartial<SignAndEncryptFileResponse>): SignAndEncryptFileResponse;
    fromPartial(object: DeepPartial<SignAndEncryptFileResponse>): SignAndEncryptFileResponse;
};
export declare const EncryptDataRequest: {
    encode(message: EncryptDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EncryptDataRequest;
    fromJSON(object: any): EncryptDataRequest;
    toJSON(message: EncryptDataRequest): unknown;
    create(base?: DeepPartial<EncryptDataRequest>): EncryptDataRequest;
    fromPartial(object: DeepPartial<EncryptDataRequest>): EncryptDataRequest;
};
export declare const EncryptDataResponse: {
    encode(message: EncryptDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EncryptDataResponse;
    fromJSON(object: any): EncryptDataResponse;
    toJSON(message: EncryptDataResponse): unknown;
    create(base?: DeepPartial<EncryptDataResponse>): EncryptDataResponse;
    fromPartial(object: DeepPartial<EncryptDataResponse>): EncryptDataResponse;
};
export declare const SignFileRequest: {
    encode(message: SignFileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignFileRequest;
    fromJSON(object: any): SignFileRequest;
    toJSON(message: SignFileRequest): unknown;
    create(base?: DeepPartial<SignFileRequest>): SignFileRequest;
    fromPartial(object: DeepPartial<SignFileRequest>): SignFileRequest;
};
export declare const SignFileResponse: {
    encode(message: SignFileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignFileResponse;
    fromJSON(object: any): SignFileResponse;
    toJSON(message: SignFileResponse): unknown;
    create(base?: DeepPartial<SignFileResponse>): SignFileResponse;
    fromPartial(object: DeepPartial<SignFileResponse>): SignFileResponse;
};
export declare const SignEnvelopeArchiveContentRequest: {
    encode(message: SignEnvelopeArchiveContentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignEnvelopeArchiveContentRequest;
    fromJSON(object: any): SignEnvelopeArchiveContentRequest;
    toJSON(message: SignEnvelopeArchiveContentRequest): unknown;
    create(base?: DeepPartial<SignEnvelopeArchiveContentRequest>): SignEnvelopeArchiveContentRequest;
    fromPartial(object: DeepPartial<SignEnvelopeArchiveContentRequest>): SignEnvelopeArchiveContentRequest;
};
export declare const ArchFile: {
    encode(message: ArchFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArchFile;
    fromJSON(object: any): ArchFile;
    toJSON(message: ArchFile): unknown;
    create(base?: DeepPartial<ArchFile>): ArchFile;
    fromPartial(object: DeepPartial<ArchFile>): ArchFile;
};
export declare const SignEnvelopeArchiveResponse: {
    encode(message: SignEnvelopeArchiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignEnvelopeArchiveResponse;
    fromJSON(object: any): SignEnvelopeArchiveResponse;
    toJSON(message: SignEnvelopeArchiveResponse): unknown;
    create(base?: DeepPartial<SignEnvelopeArchiveResponse>): SignEnvelopeArchiveResponse;
    fromPartial(object: DeepPartial<SignEnvelopeArchiveResponse>): SignEnvelopeArchiveResponse;
};
export declare const Archive: {
    encode(message: Archive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Archive;
    fromJSON(object: any): Archive;
    toJSON(message: Archive): unknown;
    create(base?: DeepPartial<Archive>): Archive;
    fromPartial(object: DeepPartial<Archive>): Archive;
};
export declare const ParseCertificateRequest: {
    encode(message: ParseCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParseCertificateRequest;
    fromJSON(object: any): ParseCertificateRequest;
    toJSON(message: ParseCertificateRequest): unknown;
    create(base?: DeepPartial<ParseCertificateRequest>): ParseCertificateRequest;
    fromPartial(object: DeepPartial<ParseCertificateRequest>): ParseCertificateRequest;
};
export declare const ParseCertificateResponse: {
    encode(message: ParseCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParseCertificateResponse;
    fromJSON(object: any): ParseCertificateResponse;
    toJSON(message: ParseCertificateResponse): unknown;
    create(base?: DeepPartial<ParseCertificateResponse>): ParseCertificateResponse;
    fromPartial(object: DeepPartial<ParseCertificateResponse>): ParseCertificateResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=crypto-common.d.ts.map