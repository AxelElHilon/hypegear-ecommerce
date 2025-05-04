import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products"; // ahora usamos productos reales
import { useOnScreen } from "../hooks/useOnScreen"; // si lo guardaste en hooks

// Elegimos productos destacados (podés elegir otros si querés)
const featuredProducts = products.slice(0, 3);

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [benefRef, isVisible] = useOnScreen(0.3);
  const [productsRef, showProducts] = useOnScreen(0.2);
  
  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
    setTimeout(() => setShowButton(true), 500);
  }, []);

  return (
    <section className="pt-24 px-6 min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* Hero principal */}
      <div className="text-center min-h-[70vh] flex flex-col justify-center">
        <div className={`transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Subí tu nivel. Bienvenido a Hype Gear. 🚀
          </h1>
          <p className="text-gray-600 mb-8">
            Vestí el hype. Estilo y calidad que marcan tendencia.
          </p>
        </div>

        <div className={`transition-all duration-700 ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} mt-6`}>
          <Link 
            to="/catalogo" 
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition transform hover:scale-105"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>

      {/* Beneficios */}
      <div
        ref={benefRef}
        className="w-full py-8 bg-white flex flex-col md:flex-row justify-center items-center gap-8 text-center shadow-md mb-16"
      >
        {[
          "🚀 Entregas rápidas en tu ciudad",
          "🛍️ Productos exclusivos",
          "🛒 Stock limitado"
        ].map((text, index) => (
          <p
            key={index}
            className={`text-gray-600 transition-all duration-700 transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {text}
          </p>
        ))}
      </div>


      {/* Productos destacados */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">🔥 Productos Destacados</h2>
          
      <div
        ref={productsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {featuredProducts.map((product, index) => (
          <div
      key={product.id}
      className={`bg-gradient-to-br from-white to-gray-100 shadow-2xl border border-gray-200 rounded-xl overflow-visible relative p-4 group transform transition-all duration-700
        ${showProducts ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${index % 2 === 0 ? (showProducts ? "translate-x-0" : "-translate-x-6") : (showProducts ? "translate-x-0" : "translate-x-6")}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-48 flex justify-center items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain absolute -top-6 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-xl"
        />
      </div>
      
      <div className="pt-20 text-center">
        <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center justify-center gap-2 mb-4">
          {product.oldPrice && (
            <span className="line-through text-gray-400 text-sm">
              ${product.oldPrice}
            </span>
          )}
          <span className="text-xl font-bold text-black">${product.price}</span>
        </div>
        <Link
          to={`/product/${product.id}`}
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition inline-block"
        >
          Ver más
        </Link>
      </div>
    </div>
    
        
        ))}
      </div>
      
      <div className="mt-10">
        <Link
          to="/catalogo"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition transform hover:scale-105"
        >
          Ver todo el catálogo
        </Link>
      </div>
    </div>


     {/* Slogan final */}
      <div className="mt-20 py-10 w-full bg-black text-white flex flex-col items-center justify-center px-4 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug max-w-xl">
          Tu estilo no se compra. Se crea. ⚡
        </h3>
      </div>

    </section>
  );
}
