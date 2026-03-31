// src/App.jsx
import React from "react";
import CompanyProfile from "./CompanyProfile";   
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './Header'; 
import ABCDESection from "./ABCDESection";
import ExabyteClone from "./ExabyteClone";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./Contact";
import Products from "./Products";
 

function App() {
  

   return (
    <>
     
      <Header />
      {/* <CompanyProfile/> */}
       
        <Routes> 
          <Route path="/about" element={<ExabyteClone />} />
          <Route path="/" element={<CompanyProfile />} />
          <Route path="/Services" element={<ABCDESection />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
         
        </Routes>
    </>
    );
}

export default App;