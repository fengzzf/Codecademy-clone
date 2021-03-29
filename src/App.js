import "./App.scss";
import NavBar from "./components/header/NavBar";
import Catalog from "./components/Catelog/Catalog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Catalog />
      </header>
    </div>
  );
}

export default App;
