import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0a1b36] text-[#f6f6f6] shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#ADEFD1]">
          MeshStep
        </Link>

        {/* Links desktop */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-[#ADEFD1]">Inicio</Link>
          <Link to="/producto" className="hover:text-[#ADEFD1]">Producto</Link>
          <Link to="/equipo" className="hover:text-[#ADEFD1]">Equipo</Link>
          <Link to="/contacto" className="hover:text-[#ADEFD1]">Contacto</Link>
        </nav>

        {/* Botón hamburguesa (solo mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1b36] border-t border-gray-700">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <Link
              to="/"
              className="hover:text-[#ADEFD1]"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/producto"
              className="hover:text-[#ADEFD1]"
              onClick={() => setIsOpen(false)}
            >
              Producto
            </Link>
            <Link
              to="/equipo"
              className="hover:text-[#ADEFD1]"
              onClick={() => setIsOpen(false)}
            >
              Equipo
            </Link>
            <Link
              to="/contacto"
              className="hover:text-[#ADEFD1]"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
