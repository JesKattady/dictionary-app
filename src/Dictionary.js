import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();
    //documention:https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="search for a word..."
          autoFocus={true}
          onChange={handleKeyword}
        />
      </form>
      <Results data={results} />
    </div>
  );
}
