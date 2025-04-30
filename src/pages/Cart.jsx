import { useCart } from "../hooks/useCart"; // nuevo
import { Link, useNavigate} from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate(); // nuevo
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  if (cart.length === 0) {
    return (
      <section className="pt-32 px-6 text-center min-h-screen bg-gray-50">
            {/* Botón para volver */}
            <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          ← Volver
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tu carrito está vacío 🛒</h2>
        <Link to="/catalogo" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Ir al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="pt-32 px-6 min-h-screen bg-gray-50">
          {/* Botón para volver */}
          <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          ← Volver
        </button>
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Tu Carrito</h2>

      <div className="max-w-5xl mx-auto grid gap-6">
        {cart.map((product, index) => (
          <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <h3 className="font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✖
            </button>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
          <p className="text-2xl font-semibold text-gray-800">
            Total: ${totalPrice}
          </p>
          <div className="flex gap-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition"
            >
              Vaciar carrito
            </button>
            <button
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
