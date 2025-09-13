import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accreditation from "./components/Accreditation";
import Home from "./views/Home";
import Producto from "./views/Producto";
import Equipo from "./views/Equipo";
import Contacto from "./views/Contacto";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Accreditation />
      <Footer />
    </div>
  );
}

export default App;

