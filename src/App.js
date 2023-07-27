import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={"404"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
