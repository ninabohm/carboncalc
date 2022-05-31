import {CertificateDTO} from "./dto/certificate.dto";

export class CertificateAPI {
    public static async getAll(): Promise<CertificateDTO[]> {
        const res = await fetch("http://localhost:3001/", {
            method: "GET"
        });

        const data = await res.json();

        return data;
    }
}