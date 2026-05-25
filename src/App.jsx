import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Landing/Home";
import AboutPage from "../src/pages/Landing/AboutPage";
import ContactPage from "../src/pages/Landing/ContactPage";
import StudentHome from "../src/pages/Students/StudentHome";
import StudentContactPage from "../src/pages/Students/ContactPage";
import JobSectorPage from "../src/pages/Students/JobSectorPage";
import BecomeinternPage from "./pages/Students/BecomeinternPage";
import CareerCoachingPage from "./pages/Students/CareerCoachingPage";

// Industry Pages

import IndustryHome from "./pages/Industry/IndustryHome";




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Students Pages */}
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/student/jobsector" element={<JobSectorPage />} />
        <Route path="/student/becomeaintern" element={<BecomeinternPage />} />
        <Route path="/student/careercoaching" element={<CareerCoachingPage />} />
        <Route path="/student/contact" element={<StudentContactPage />} />

        {/* Industry Pages */}

                <Route path="/industry/home" element={<IndustryHome />} />

      </Routes>
    </div>
  );
};

export default App;
