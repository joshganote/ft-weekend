import React, { useState } from "react";
import "./App.css";
import { AdminContact } from "./components/adminContact/adminContact";
import { WhoisRecord } from "./components/whoisRecord/whoisRecord";
import { useWhoisRecord } from "./hooks/useWhoisRecord";
import { useWhoisAdminContact } from "./hooks/useWhoisAdminContact";
import Terminal from "./components/terminal/terminal";
import commands from "./commands.json";
function App() {
  //const [domainName, setDomainName] = useState("");
  const whois = useWhoisRecord() as any;
  const adminContact = useWhoisAdminContact() as any;

  /**
   * Was taking this approach when trying to call to my node server and hook up to a button
   * wasn't able to properly receive a query string. had to try and move on
   */
  // const params = {
  //   domainName: 'google.com',
  //   apiKey: "at_qLpgWjeDFgzUK0RAzTP3Wp3HM7FFr",
  // };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:5000/getApiRequest?domainName=${params.domainName}&apiKey=${params.apiKey}`
  //     )
  //     .then((res) => {
  //       setData(res.data.WhoisRecord.administrativeContact);
  //       setData2(res.data.WhoisRecord);
  //     });
  // }, [domainName, params.apiKey]);

  return (
    <div className="App">
      <div className="grid">
        <div className="terminal">
          <Terminal commands={commands} />
        </div>
        {/* <label>
        Name:
        <input type="text" onChange={(e) => setDomainName(e.target.value)} />
      </label>
      <button>Submit</button> */}
        <div className="api-info">
          <AdminContact
            organization={adminContact.organization}
            country={adminContact.country}
            state={adminContact.state}
          />
          <WhoisRecord
            domainName={whois.domainName}
            contactEmail={whois.contactEmail}
            createdDate={whois.createdDateNormalized}
            expiresDate={whois.expiresDateNormalized}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
