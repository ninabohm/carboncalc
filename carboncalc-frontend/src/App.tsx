import React, {useEffect, useState} from 'react';
import {CertificateAPI} from "./components/api/certificate.api";
import {CertificateDTO} from "./components/api/dto/certificate.dto";

function App() {
    const [certificates, setCertificates] = useState<CertificateDTO[]>([])
    useEffect(() => {
        async function fetchAll() {
            const res = await CertificateAPI.getAll();

            setCertificates(res);
        }

        fetchAll();
    }, [])
    return (
      <div className="App">
          <ul>
          {
              certificates.map(certificate => {
                  return <li>{certificate.id}</li>
              })
          }

          </ul>
      </div>

    );
}
export default App;