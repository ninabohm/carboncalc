export class CertificateBoughtEvent {
    constructor(
        public readonly userId: string,
        public readonly price: number,
        public readonly certificateId: string,
    ) { }
}