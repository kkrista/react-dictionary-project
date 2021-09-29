import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <Dictionary defaultWord="blossom" />
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
