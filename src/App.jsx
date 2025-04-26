import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart"; // no te olvides de importar
import Footer from "./components/Footer";

function App() {
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
