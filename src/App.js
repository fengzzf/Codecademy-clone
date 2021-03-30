import NavBar from "./components/header/NavBar";
import "./App.scss";
import Quiz from "./components/quiz/Quiz";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Quiz />
        {/* <Catalog /> */}
      </header>
    </div>
  );
}

export default App;
