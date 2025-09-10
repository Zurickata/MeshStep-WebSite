import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#0a1b36] text-[#f6f6f6] shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#ADEFD1]">
          MeshStep
        </Link>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-[#ADEFD1]">Inicio</Link>
          <Link to="/producto" className="hover:text-[#ADEFD1]">Producto</Link>
          <Link to="/equipo" className="hover:text-[#ADEFD1]">Equipo</Link>
          <Link to="/contacto" className="hover:text-[#ADEFD1]">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
