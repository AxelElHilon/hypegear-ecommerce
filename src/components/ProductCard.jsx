import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
