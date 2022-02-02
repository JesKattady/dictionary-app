import logo from "./owl2.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} alt="logo" className="logo img-fluid" />
        <span className="heading"> Dictionary </span>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <small> Coded by Jesna</small>
      </footer>
    </div>
  );
}

export default App;
