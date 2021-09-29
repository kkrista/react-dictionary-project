import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary App </h1>
      <Dictionary defaultWord="blossom" />
      <footer>
        Coded by{" "}
        <a href="https://www.linkedin.com/in" target="_blank" rel="noreferrer">
          Krista-Mari Katajisto
        </a>
        <br />
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
