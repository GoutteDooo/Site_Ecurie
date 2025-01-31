//react
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Proprietaires from "./pages/Proprietaires";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
//composants
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//styles
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="proprietaires" element={<Proprietaires />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
