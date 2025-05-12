import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart((prev) => {
    console.log('prev:', prev);
    console.log('nuevo producto:', product);

    const existingProduct = prev.find((item) => item.id === product.id);

    if (existingProduct) {
      console.log('ya existe, sumando cantidad');
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    console.log('no existe, agregando nuevo con cantidad 1');
    return [...prev, { ...product, quantity: 1 }];
  });
};


  const removeFromCart = (id) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.id === id);
      if (idx < 0) return prev;
      const next = [...prev];
      next.splice(idx, 1);
      return next;
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
