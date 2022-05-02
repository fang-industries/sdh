import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './pages/Index'
import Licenses from "./pages/licenses/Index";
import LicensesReact from "./pages/licenses/React";
import LicensesVite from "./pages/licenses/Vite";
import LicensesTailwind from "./pages/licenses/Tailwind";
import LicensesHelmet from "./pages/licenses/Helmet";
import LicensesPostcss from "./pages/licenses/PostCSS";
import LicensesAutoprefixer from "./pages/licenses/Autoprefixer";
import LicensesSwiper from "./pages/licenses/Swiper";
import LicensesTippy from "./pages/licenses/Tippy";
import LicensesMotion from "./pages/licenses/Motion";

import "./assets/styles/tailwind.css";
import "./assets/styles/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/licenses" element={<Licenses />} />
        {/* #region licenses */}
        <Route path="/licenses/react" element={<LicensesReact />} />
        <Route path="/licenses/vite" element={<LicensesVite />} />
        <Route path="/licenses/tailwindcss" element={<LicensesTailwind />} />
        <Route path="/licenses/reacthelmet" element={<LicensesHelmet />} />
        <Route path="/licenses/postcss" element={<LicensesPostcss />} />
        <Route
          path="/licenses/autoprefixer"
          element={<LicensesAutoprefixer />}
        />
        <Route path="/licenses/swiper" element={<LicensesSwiper />} />
        <Route path="/licenses/tippyjs" element={<LicensesTippy />} />
        <Route path="/licenses/framermotion" element={<LicensesMotion />} />
        {/* #endregion licenses */}
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
