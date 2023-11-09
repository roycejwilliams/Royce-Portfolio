import React from "react";
import Home from "./components/pages/Home";
import Portfolio from './components/pages/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"
import Bio from "./components/pages/Bio";
import Inspo from "./components/pages/Inspo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/inspo" element={<Inspo />} />
      </Routes>
    </Router>
  );
}

export default App;
