import { useState } from "react";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: ""
  });

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const message = `
  🛒 *Nueva compra desde Hype Gear*
  👤 Nombre: ${form.name}
  📧 Email: ${form.email}
  🏠 Dirección: ${form.address}
  
  🧾 Pedido:
  ${cart.map((item) => `• ${item.title} x${item.quantity || 1}`).join("\n")}
  
  💵 Total: $${total.toFixed(2)}
  
  📦 ¡Hola! Ya hice la compra y quiero coordinar el pago y el envío.`;
  
    const phoneNumber = "5491123868058";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    // Abrimos WhatsApp en otra pestaña
    window.open(whatsappURL, "_blank");
  
    // Limpiamos el carrito y redirigimos después de un pequeño delay
    setTimeout(() => {
      clearCart();
      window.location.href = "/gracias"; // tu página de agradecimiento
    }, 2000);
  };
  return (
    <section className="min-h-screen pt-24 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Finalizar compra</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md bg-white shadow-md p-6 rounded-xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg"
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección de envío"
          value={form.address}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg"
        />

        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">Resumen del pedido</h3>
          <ul className="text-sm text-gray-700 mb-2">
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} x{item.quantity || 1} - ${item.price}
              </li>
            ))}
          </ul>
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
        </div>

        <button
              type="submit"
              disabled={loading}
              className={`relative w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                loading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {loading ? (
                <div className="w-full h-1 absolute bottom-0 left-0 bg-white/20 overflow-hidden rounded-b">
                  <div className="h-full bg-white animate-loading-bar"></div>
                </div>
              ) : (
                "Confirmar y coordinar por WhatsApp"
              )}
        </button>

      </form>
    </section>
  );
}
