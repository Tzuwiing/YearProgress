import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AcademicProgress from "./academic";
// import Ekstrakurikuler from "./Ekstrakurikuler";
import Home from "./home"; // Jika ada
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollTop";

function App1() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic" element={<AcademicProgress />} />
        {/* <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App1;
