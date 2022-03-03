import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import Properties from "./Properties";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";


function App() {
  return (
    <>
      
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </>
  );
}

export default App;
