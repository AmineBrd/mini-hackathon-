import { Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./Componenets/Nav";
import Home  from './Pages/Home'
import React from 'react'
import North from "./Pages/North";
import South from "./Pages/South";
import West from "./Pages/West";
import East from "./Pages/East";
function Homo() {
  return (
    <Home />
  )
}

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nord" element={<North />} />
        <Route path="sud" element={<South />} />
        <Route path="west" element={<West />} />
        <Route path="east" element={<East />} />
      </Routes>
      
    </div>
  )
}

export default App