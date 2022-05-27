import React, { FC, useEffect, useState } from 'react';

export const App: FC<unknown> = () => {
  const [response, setResponse] = useState<string>('NO SERVER RESPONSE');

  useEffect(() => {
    async function fetchResponse(): Promise<void> {
      try {
        const res = await fetch("http://localhost:3001/certificate");
        const data = await res.text();
        setResponse(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchResponse();
  }, []);

  useEffect(() => {
    console.log("placeholder: checking server version");
  }, []);


  return (
    <>
      <div>
        And here we get a response from the API:
        <br />
        <br />
        {response}
      </div>
    </>
  );
};
