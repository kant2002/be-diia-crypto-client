import * as _m0 from "protobufjs/minimal";
export interface GenerateCertificateRequest {
    jwt?: string | undefined;
}
export interface GenerateCertificateResponse {
    /** secret */
    cert: string;
}
export interface DevelopUserDataRequest {
    customerCrypto: string;
    cert: string;
    state?: string | undefined;
    sidBi?: string | undefined;
    memberId?: string | undefined;
    timestamp?: string | undefined;
}
export interface DevelopUserDataResponse {
    data: string;
}
export declare const GenerateCertificateRequest: {
    encode(message: GenerateCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateCertificateRequest;
    fromJSON(object: any): GenerateCertificateRequest;
    toJSON(message: GenerateCertificateRequest): unknown;
    create(base?: DeepPartial<GenerateCertificateRequest>): GenerateCertificateRequest;
    fromPartial(object: DeepPartial<GenerateCertificateRequest>): GenerateCertificateRequest;
};
export declare const GenerateCertificateResponse: {
    encode(message: GenerateCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateCertificateResponse;
    fromJSON(object: any): GenerateCertificateResponse;
    toJSON(message: GenerateCertificateResponse): unknown;
    create(base?: DeepPartial<GenerateCertificateResponse>): GenerateCertificateResponse;
    fromPartial(object: DeepPartial<GenerateCertificateResponse>): GenerateCertificateResponse;
};
export declare const DevelopUserDataRequest: {
    encode(message: DevelopUserDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DevelopUserDataRequest;
    fromJSON(object: any): DevelopUserDataRequest;
    toJSON(message: DevelopUserDataRequest): unknown;
    create(base?: DeepPartial<DevelopUserDataRequest>): DevelopUserDataRequest;
    fromPartial(object: DeepPartial<DevelopUserDataRequest>): DevelopUserDataRequest;
};
export declare const DevelopUserDataResponse: {
    encode(message: DevelopUserDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DevelopUserDataResponse;
    fromJSON(object: any): DevelopUserDataResponse;
    toJSON(message: DevelopUserDataResponse): unknown;
    create(base?: DeepPartial<DevelopUserDataResponse>): DevelopUserDataResponse;
    fromPartial(object: DeepPartial<DevelopUserDataResponse>): DevelopUserDataResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=crypto-bankid.d.ts.map