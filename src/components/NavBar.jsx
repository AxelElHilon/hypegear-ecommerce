import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import logo from "../assets/images/hype-gear-logo.png";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      {/* Banner superior */}
      <div className="w-full bg-black overflow-hidden text-white text-sm py-2">
        <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite] px-4">
          🔥 15% OFF VIERNES - SABADOS - DOMINGOS 🔥 
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hype Gear Logo"
            className="h-10 transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navegación */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white md:static md:flex md:items-center md:w-auto gap-6 p-4 md:p-0`}
        >
          <Link to="/" className="text-gray-600 hover:text-gray-900 block md:inline" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/catalogo" className="text-gray-600 hover:text-gray-900 block md:inline" onClick={closeMenu}>
            Catálogo
          </Link>
          <Link to="/sobre-nosotros" className="text-gray-600 hover:text-gray-900 block md:inline" onClick={closeMenu}>
            Sobre Nosotros
          </Link>
          <Link to="/cart" className="nav-cart block md:inline" onClick={closeMenu}>
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
