
import { Routes, Route } from "react-router-dom";
import "./index.css"
import { Navbar } from "./layouts/navbar";
import { Footer } from "./layouts/footer";
function App() {
  return (
    <>
    <Routes>
      <Route path="/nav" element={<Navbar />} />
      <Route path="/" element={<Footer />} />
    </Routes>
    </>
  );
}

export default App;




