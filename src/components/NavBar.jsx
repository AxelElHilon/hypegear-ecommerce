import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart"; // nuevo
import logo from "../assets/images/hype-gear-logo.png"; // 👉 Importar imagen
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";

export default function Navbar() {
  const { cart } = useCart(); // usamos el carrito
  
  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      
       {/* Banner scrollable solo con Tailwind */}
       <div className="w-full bg-black overflow-hidden relative text-white text-sm py-2">
       <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite] px-4">
          🔥 15% OFF VIERNES - SABADOS - DOMINGOS 🔥 
        </div>
      </div>


      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hype Gear Logo"
            className="h-10 transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Inicio
          </Link>
          <Link to="/catalogo" className="text-gray-600 hover:text-gray-900">
            Catálogo
          </Link>
          <Link to="/cart" className="nav-cart">
        <FaShoppingCart size={20} />
        {cart.length > 0 && (
          <span className="cart-count">{cart.length}</span>
        )}
      </Link>
        </nav>
      </div>
    </header>
  );
}
