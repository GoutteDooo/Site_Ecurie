import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import BurgerSlider from "./pages/BurgerSlider";

function App() {
  return (
    <>
      <BurgerSlider />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
