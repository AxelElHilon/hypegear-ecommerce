import { useCart } from "../hooks/useCart"; // nuevo
import { Link, useNavigate} from "react-router-dom";
import Checkout from "../components/Checkout";
import { useState } from "react";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate(); // nuevo
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const [loading, setLoading] = useState(false);

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
  <p className="text-gray-600">Cantidad: {product.quantity}</p>
  <p className="text-gray-600">Subtotal: ${product.price * product.quantity}</p>
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
            className="text-sm text-gray-500 underline underline-offset-4 hover:text-gray-700 transition"
          >
            Vaciar carrito
          </button>
            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => navigate("/checkout"), 2000);
              }}
              disabled={loading}
              className={`relative px-6 py-3 w-48 font-medium rounded-lg transition-all duration-300
                ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"}
              `}
            >
              {loading ? (
                <div className="w-full h-1 absolute bottom-0 left-0 bg-white/20 overflow-hidden rounded-b">
                  <div className="h-full bg-white animate-loading-bar"></div>
                </div>
              ) : (
                "Finalizar compra"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
