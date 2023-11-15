import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/js/bootstrap";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
