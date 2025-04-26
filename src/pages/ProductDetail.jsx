import { useParams, useNavigate} from "react-router-dom";
import { useCart } from "../context/CartContext"; // importamos el carrito
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // usamos el carrito
  const navigate = useNavigate(); // nuevo
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="pt-24 px-6">Producto no encontrado</div>;
  }

  return (
    <section className="pt-32 px-6 pb-10 min-h-screen bg-gray-50">
       {/* Botón para volver */}
       <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
      >
        ← Volver
      </button>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl text-black font-semibold mb-6">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}
