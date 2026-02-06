import "./globals.css";
import { Routes, Route } from "react-router-dom";

import LenisScroll from "./components/LenisScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Generate from "./pages/Generate";
import MyGeneration from "./pages/MyGeneration";
import YtPreview from "./pages/YtPreview";
import Login  from "./components/Login";

export default function App() {
  return (
    <>
      <LenisScroll />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/generate/:id" element={<Generate />} />
        <Route path="/my-generation" element={<MyGeneration />} />
        <Route path="/preview" element={<YtPreview />} />

        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}
