import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { AdminContact } from "./components/adminContact/adminContact";
import {  useWhoisRecord } from "./hooks/useWhoisRecord";
import { useWhoisAdminContact } from './hooks/useWhoisAdminContact';

function App() {
  const [domainName, setDomainName] = useState("");
  const adminContact = useWhoisAdminContact() as any;
  const whois = useWhoisRecord() as any;

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
      <label>
        Name:
        <input type="text" onChange={(e) => setDomainName(e.target.value)} />
      </label>
      <button>Submit</button>
      <AdminContact
        name={adminContact.name}
        street1={adminContact.street1}
        city={adminContact.city}
        state={adminContact.state}
        country={adminContact.country}
      />
      <h1>{whois.contactEmail}</h1>
    </div>
  );
}

export default App;
