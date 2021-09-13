import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { AdminContact } from "./components/adminContact/adminContact";

function App() {
  const [data, setData] = useState([] as any);
  const [domainName, setDomainName] = useState("");
  const params = {
    apiKey: "at_qLpgWjeDFgzUK0RAzTP3Wp3HM7FFr",
  };

  function onClick() {
    axios
      .get(
        `http://localhost:5000/getApiRequest?domainName=${domainName}&apiKey=${params.apiKey}`
      )
      .then((res) => {
        setData(res.data.WhoisRecord);
      });
  }

  console.log(domainName);
  console.log(data)
  return (
    <div className="App">
      <label>
        Name:
        <input
          type="text"
          onChange={(e) => setDomainName(e.target.value) }
        />
      </label>
      <button onClick={onClick}>Submit</button>
      {/* <AdminContact
        name={data.name}
        street1={data.street1}
        city={data.city}
        state={data.state}
        country={data.country}
      /> */}
    </div>
  );
}

export default App;
