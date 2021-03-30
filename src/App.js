import NavBar from "./components/header/NavBar";
import "./App.scss";
import Catalog from "./components/Catalog/Catalog";
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
