import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0a1b36] text-[#f6f6f6] py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; 2025 MeshStep - Todos los derechos reservados</p>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-[#ADEFD1]">Inicio</Link>
          <Link to="/producto" className="hover:text-[#ADEFD1]">Producto</Link>
          <Link to="/equipo" className="hover:text-[#ADEFD1]">Equipo</Link>
          <Link to="/contacto" className="hover:text-[#ADEFD1]">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
