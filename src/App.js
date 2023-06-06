import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button value="Entrar" theme="dark" />
      <Button value="Ver mais produtos" useArrowIcon={true} />
    </div>
  );
}

export default App;
