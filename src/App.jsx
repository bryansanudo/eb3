import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/components/links/Home";
import Companies from "@/components/companies/Companies";
import Employees from "@/components/employees/Employees";
import About from "@/components/links/About";
import Services from "@/components/links/Services";
import Histories from "@/components/links/Histories";
import Resources from "@/components/links/Resources";
import Contact from "@/components/links/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/histories" element={<Histories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
