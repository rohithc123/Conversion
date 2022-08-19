import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import { Routes, Route } from "react-router-dom";
import Kmtom from "./component/kmtom";
import Mtokm from "./component/mtokm";
import Distance from "./component/distance";
import Distance2 from "./component/distance2.js";
import Calculate from "./component/calculate.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Kmtom />} />

        <Route path="/kmtom" element={<Kmtom />} />
        <Route path="/mtokm" element={<Mtokm />} />
        <Route path="/distance" element={<Distance2 />} />
      </Routes>
    </>
  );
}

export default App;
