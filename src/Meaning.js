import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>{definition.definition}</li>
              <div>
                <em>{definition.example}</em>
              </div>
              <div>
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
