export class CertificateBoughtEvent {
    constructor(
        public readonly userId: string,
        public readonly price: number,
        public readonly certificateId: string,
    ) { }

    toString() {
        return JSON.stringify({
            userId: this.userId,
            price: this.price,
            certificateId: this.certificateId,
        });
    }
}