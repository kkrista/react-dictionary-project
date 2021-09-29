import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <h2>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <i className="fas fa-volume-up"></i>
          </a>{" "}
          /{props.phonetic.text}/
        </h2>
      </div>
    );
  } else {
    return (
      <div className="Phonetics no-sound">
        {" "}
        <h2> /{props.phonetic.text}/</h2>
      </div>
    );
  }
}
