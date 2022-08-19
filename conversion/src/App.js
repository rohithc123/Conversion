import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Distance from "./component/distance";
import Time from "./component/Time.js";
import Weights from "./component/Weights.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Distance />} />
        <Route path="/distance" element={<Distance />} />
        <Route path="/weights" element={<Weights />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </>
  );
}

export default App;
