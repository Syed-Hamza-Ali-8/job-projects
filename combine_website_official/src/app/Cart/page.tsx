"use client";

import { useCart } from "../components/CartContext";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="p-10 text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={`${item.slug || "no-slug"}-${index}`}
                className="flex items-center gap-4 border-b pb-4 mb-4"
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">{item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.slug)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <button
                className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
