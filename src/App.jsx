import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Landing/Home";
import AboutPage from "../src/pages/Landing/AboutPage";
import ContactPage from "../src/pages/Landing/ContactPage";
import StudentHome from "./pages/Students/StudentHome";
import StudentContactPage from "../src/pages/Students/ContactPage";




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/student/home" element={<StudentHome />} />
         <Route path="/student/contact" element={<StudentContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
