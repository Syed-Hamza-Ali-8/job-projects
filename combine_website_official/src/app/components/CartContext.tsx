"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type CartItem = {
  slug: string;
  name: string;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  updateQuantity: (slug: string, newQuantity: number) => void; // ✅ added
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch {
        console.error("Failed to parse cart from localStorage");
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.slug === item.slug);
      if (existing) {
        return prev.map((p) =>
          p.slug === item.slug ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => prev.filter((p) => p.slug !== slug));
  };

  const clearCart = () => setCart([]);

  // ✅ new updateQuantity function
  const updateQuantity = (slug: string, newQuantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.slug === slug
          ? { ...item, quantity: Math.max(1, newQuantity) } // never below 1
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
