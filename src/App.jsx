
import { Routes, Route } from "react-router-dom";
import "./index.css"
import { Navbar } from "./layouts/navbar";
import { Footer } from "./layouts/footer";
import { Carousel1 } from "./pages/homepage/carousel1";
import { Section2 } from "./pages/homepage/section2";
import { Carousel2 } from "./pages/homepage/carousel2";
import { Blogsection } from "./pages/homepage/blogsection";
import { Homepage } from "./pages/homepage/homepage";
import { About } from "./pages/about/about";
import { Aboutpage } from "./pages/about/aboutpage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/nav" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/carousel1" element={<Carousel1 />} />
        <Route path="/section2" element={<Section2 />} />
        <Route path="/carousel2" element={<Carousel2 />} />
        <Route path="/blogsection" element={<Blogsection />} />
        <Route path="/home" element={< Homepage/>} />
        <Route path="/about" element={< About />} />
        <Route path="/" element={<Aboutpage  />} />
    </Routes>
    </>
  );
}

export default App;




