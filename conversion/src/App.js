import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import { Routes, Route } from "react-router-dom";
import Kmtom from "./component/kmtom";
import Mtokm from "./component/mtokm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Kmtom />} />

        <Route path="/kmtom" element={<Kmtom />} />
        <Route path="/mtokm" element={<Mtokm />} />
      </Routes>
    </>
  );
}

export default App;
