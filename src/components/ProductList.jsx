import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import LoadingScreen from "./LoadingScreen";
import { FaSearch } from "react-icons/fa";

export default function ProductList() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // 👈 Nuevo estado para ordenar

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

   // 🔥 Filtro de productos por búsqueda
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price; // Menor a mayor
      }
      if (sortOrder === "desc") {
        return b.price - a.price; // Mayor a menor
      }
      return 0; // No ordenar
    });
    
  return (
    <section className="pt-32 px-6 pb-10 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Catálogo
      </h2>

        {/* 🔍 Buscador */}
        <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar buzo, remera, gorra..."
            className="border border-gray-300 rounded-full px-4 py-2 w-full text-center pl-10 focus:outline-none focus:ring-2 focus:ring-black transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>

         {/* Ordenador */}
         <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition text-center ml-8"
        >
          <option value="">Ordenar por</option>
          <option value="asc">Precio: Menor a Mayor</option>
          <option value="desc">Precio: Mayor a Menor</option>
        </select>
      </div>

     {/* Productos filtrados */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No se encontraron productos 😢
          </p>
        )}
      </div>
    </section>
  );
}
