import React from "react";
import "./Dictionary.css";

export default function Results(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Results">
        <h1>{props.data.word}</h1>
        <h2>{props.data.phonetic}</h2>
        {props.data.meanings.map(function (meaning, index) {
          return meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
