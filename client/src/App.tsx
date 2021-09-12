import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const params = {
    domainName: "google.com",
    apiKey: "at_qLpgWjeDFgzUK0RAzTP3Wp3HM7FFr",
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getApiRequest?domainName=${params.domainName}&apiKey=${params.apiKey}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
