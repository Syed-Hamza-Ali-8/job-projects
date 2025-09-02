"use client";

import { useCart } from "../components/CartContext";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

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
                {/* Product Image */}
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      onClick={() =>
                        updateQuantity(item.slug, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      onClick={() =>
                        updateQuantity(item.slug, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.slug)}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Footer Buttons */}
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
