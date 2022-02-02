import React from "react";
import logo from "./owl2.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <header className="app-header">
        <div className="row">
          <div className="col-2">
            <img src={logo} alt="logo" className="logo img-fluid" />
          </div>
          <div className="col">
            <div className="heading"> Dictionary </div>
            <Dictionary />
          </div>
        </div>
      </header>
      <main></main>
      <div />
      <footer className="text-center">
        <small>
          {" "}
          Coded by Jesna,{" "}
          <a
            href="https://github.com/JesKattady/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
        </small>
      </footer>
    </div>
  );
}

export default App;
