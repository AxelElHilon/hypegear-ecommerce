import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import LoadingScreen from "./LoadingScreen";

export default function ProductList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <section className="pt-32 px-6 pb-10 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Catálogo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
