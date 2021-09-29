import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>

      <Dictionary defaultWord="travel" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/kristamarikatajisto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Krista-Mari Katajisto
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/kkrista/react-dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://upbeat-nobel-41a5b2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
