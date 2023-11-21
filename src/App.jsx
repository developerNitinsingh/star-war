import { useState } from "react";
import "./App.css";
import { alien } from "./assets/icons";
import Header from "./components/header/Header";
import Search from "./components/header/Search";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmDashboard from "./pages/FilmDashboard";
import FilmDashboard2 from "./pages/FilmDashboard2";
import PeopleDashboard2 from "./pages/people/PeopleDashboard2";
import PeopleDashboard1 from "./pages/people/Peopledashboard";
import Planetdashboard2 from "./pages/planet/Planetdashboard2";
import Planetdashboard1 from "./pages/planet/PlanetDashboard1";
import Species1 from "./pages/species/Species1";
import Species2 from "./pages/species/Species2";
import Starship1 from "./pages/starship/Starship1";
import Vehicles1 from "./pages/vehicles/Vehicles1";
import Card from "./components/card/Card";
import Starship2 from "./pages/starship/Starship2";
import Vehicles2 from "./pages/vehicles/Vehicles2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<FilmDashboard />} />
        <Route path="/people" element={<PeopleDashboard1 />} />
        <Route path="/planet" element={<Planetdashboard1 />} />
        <Route path="/species" element={<Species1 />} />
        <Route path="/starship" element={<Starship1 />} />
        <Route path="/vehicles" element={<Vehicles1 />} />

        <Route path="/vehicles2" element={<Vehicles2 />} />
        <Route path="/starship2" element={<Starship2 />} />
        <Route path="/species2" element={<Species2 />} />
        <Route path="/planet2" element={<Planetdashboard2 />} />
        <Route path="/film2" element={<FilmDashboard2 />} />
        <Route path="/people2" element={<PeopleDashboard2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
