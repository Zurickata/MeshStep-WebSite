import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo_2.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `transition ${
      isActive ? "text-[#ADEFD1] font-semibold" : "hover:text-[#ADEFD1]"
    }`;

  return (
    <header className="bg-[#0a1b36] text-[#f6f6f6] shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo + nombre */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="MeshStep Logo"
            className="w-24 h-24 object-contain"
          />
          <span className="text-3xl font-bold text-[#ADEFD1]">MeshStep</span>
        </NavLink>

        {/* Links desktop */}
        <nav className="space-x-6 hidden md:flex">
          <NavLink to="/" className={linkClasses} end>
            Inicio
          </NavLink>
          <NavLink to="/producto" className={linkClasses}>
            Producto
          </NavLink>
          <NavLink to="/equipo" className={linkClasses}>
            Equipo
          </NavLink>
          <NavLink to="/contacto" className={linkClasses}>
            Contacto
          </NavLink>
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
            <NavLink to="/" className={linkClasses} end onClick={() => setIsOpen(false)}>
              Inicio
            </NavLink>
            <NavLink to="/producto" className={linkClasses} onClick={() => setIsOpen(false)}>
              Producto
            </NavLink>
            <NavLink to="/equipo" className={linkClasses} onClick={() => setIsOpen(false)}>
              Equipo
            </NavLink>
            <NavLink to="/contacto" className={linkClasses} onClick={() => setIsOpen(false)}>
              Contacto
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
