import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './pages/Index'
import Licenses from "./pages/Licenses";
import LicensesReact from "./pages/licenses/React";

import "./assets/styles/tailwind.css";
import "./assets/styles/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/licenses/react" element={<LicensesReact />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
