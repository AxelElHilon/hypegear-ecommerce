import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import logo from "../assets/images/hype-gear-bco.png"; // 👉 Importar imagen
import mastercardLogo from "../assets/images/ico-mastercard.png"; // 👉 Importar imagen
import mpLogo from "../assets/images/ico-mercadopago.png"; // 👉 Importar imagen
import visaLogo from "../assets/images/ico-visa.png"; // 👉 Importar imagen
import cashLogo from "../assets/images/ico-billete.png"; // 👉 Importar imagen

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-20 pt-10 pb-6 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Sección Marca */}
        <div className="flex flex-col items-start gap-4">
           {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hype Gear Logo"
            className="h-10 transition-transform duration-300 hover:scale-110"
          />
        </Link>
          <p className="text-sm text-gray-400 max-w-xs text-left">
            Vestí el hype. Ropa urbana, estilo original y calidad premium.
          </p>
          {/* Íconos de redes */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://wa.me/1123456789" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl">
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Sección Newsletter */}
        <div className="flex flex-col items-start gap-4 w-full md:w-auto">
          <h3 className="text-lg font-semibold">Suscribite</h3>
          <p className="text-sm text-gray-400 text-left">
            Enterate primero de nuestras promos y nuevos lanzamientos.
          </p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Tu email"
              className="p-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-white text-black p-2 rounded-r-lg font-bold hover:bg-gray-300 transition"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Links</h3>
          <Link to="/" className="text-sm text-gray-400 hover:text-white transition">
            Inicio
          </Link>
          <Link to="/catalogo" className="text-sm text-gray-400 hover:text-white transition">
            Catálogo
          </Link>
          <Link to="/cart" className="text-sm text-gray-400 hover:text-white transition">
            Carrito
          </Link>
        </div>
      </div>
       {/* Métodos de pago */}
          <div className="mt-8 w-full flex justify-center gap-6 items-center flex-wrap">
            <img src={visaLogo} alt="Visa" className="h-6 object-contain opacity-80 hover:opacity-100 transition" />
            <img src={mastercardLogo} alt="MasterCard" className="h-6 object-contain opacity-80 hover:opacity-100 transition" />
            <img src={mpLogo} alt="Mercado Pago" className="h-6 object-contain opacity-80 hover:opacity-100 transition" />
            <img src={cashLogo} alt="Efectivo" className="h-6 object-contain opacity-80 hover:opacity-100 transition" />
          </div>
      {/* Línea divisoria */}
      <div className="w-full h-px bg-gray-700 my-8"></div>

      {/* Copy final */}
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Hype Gear. Todos los derechos reservados.
      </p>
    </footer>
  );
}
