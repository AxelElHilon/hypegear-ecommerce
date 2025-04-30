import { useState } from "react";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
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

    const message = `
🛒 *Nueva compra desde Hype Gear*
👤 Nombre: ${form.name}
📧 Email: ${form.email}
🏠 Dirección: ${form.address}

🧾 Pedido:
${cart.map((item) => `• ${item.title} x${item.quantity || 1}`).join("\n")}

💵 Total: $${total.toFixed(2)}

📦 ¡Listo para coordinar el pago y el envío!
`;

    const phoneNumber = "5491123456789"; // <-- Cambiá este número por el tuyo (con código país sin +)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    clearCart();
    window.location.href = whatsappURL;
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
          className="mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Confirmar y coordinar por WhatsApp
        </button>
      </form>
    </section>
  );
}
