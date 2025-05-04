import Logo from "../assets/images/hype-gear-logo.png";
 // Asegúrate de que la ruta sea correcta
export default function AboutUs() {
    return (
      <section id="about" className="bg-white py-50 px-4 sm:px-8 lg:px-24 text-center scroll-mt-24">
           <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        👋 Sobre Nosotros
      </motion.h2>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img
            src={Logo}// cambiá esto por la imagen que quieras
            alt="Sobre Nosotros"
            className="w-80 h-auto object-contain drop-shadow-xl"
          />
          
          <div className="text-left">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Somos un pequeño equipo apasionado por la moda urbana. Creamos y seleccionamos prendas con personalidad, estilo y calidad.
            </p>
            <p className="text-gray-600">
              Cada producto refleja nuestra esencia: simple, auténtica y en constante movimiento. Si buscás destacarte con actitud, estás en el lugar correcto. 💥
            </p>
            <a
              href="https://wa.me/5491123868058?text=Hola%20me%20interesa%20saber%20más%20sobre%20sus%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Contactanos por WhatsApp
            </a>

          </div>
        </div>
      </section>
    );
  }
  