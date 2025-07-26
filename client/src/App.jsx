import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./components/HomePage";
import { Routes } from "react-router";
import { Route } from "react-router";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/WeatherDetails" element={<WeatherDetails />} />
      </Routes>
    </>
  );
}

export default App;
