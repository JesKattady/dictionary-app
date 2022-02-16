import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
 
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech} </h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="font-weight-bold">
              {definition.definition} <br />{" "}
            </p>
            <blockquote>
              <em>{definition.example}</em>
            </blockquote>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
