import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Cafeto from "./pages/Cafeto";
import Process from "./pages/Process";
import Methods from "./pages/Methods";
import CoffeeTypes from "./pages/CoffeeTypes";
import CoffeeCocktails from "./pages/CoffeeCocktails";

import './index.css'
import LatteArt from "./pages/LatteArt";

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/cafeto" element={<Cafeto />} />
        <Route path="/process" element={<Process />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/latteart" element={<LatteArt />} />
        <Route path="/coffeetypes" element={<CoffeeTypes />} />
        <Route path="/coffeecocktails" element={<CoffeeCocktails />} />
        
      </Routes>

    </Router>
  )
}

export default App
