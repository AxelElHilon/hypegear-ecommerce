import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-2xl rounded-xl overflow-visible relative p-4 group transition-transform hover:scale-105">
      <div className="relative h-48 flex justify-center items-start">
        <img
          src={product.image}
          alt={product.title}
         className="w-52 h-52 object-contain absolute -top-10 z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
        />
      </div>
      <div className="pt-20 text-center">
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
