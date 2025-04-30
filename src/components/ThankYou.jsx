export default function ThankYou() {
    return (
      <section className="min-h-screen pt-32 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Gracias por tu compra!</h2>
        <p className="text-gray-600 mb-6">
          Te contactaremos por WhatsApp para coordinar el pago y el envío.
        </p>
        <a
          href="/"
          className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Volver al inicio
        </a>
      </section>
    );
  }
  