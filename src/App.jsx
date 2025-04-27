import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart"; // no te olvides de importar
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // 👈 NUEVO estado para animar salida

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // activamos fadeout
      setTimeout(() => {
        setLoading(false); // después de fadeout, sacamos loading
      }, 500); // 0.5 segundos de transición
    }, 5000); // duración de la intro (podés ajustar)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen fadeOut={fadeOut} />; // 👈 le pasamos el estado de fade
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} /> {/* Nueva ruta */}
        {/* Más rutas después: Catálogo, Carrito, etc. */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
