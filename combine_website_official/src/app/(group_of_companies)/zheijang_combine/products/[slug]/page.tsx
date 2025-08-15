"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ZhejiangNavbar from "../../Zheijang-Navbar";
import { useCart } from "@/app/components/CartContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const products = {
  "courtrai-fabric": {
    name: "Courtrai Fabric",
    priceRange: "PKR 2,500 - 4,000 / meter",
    description:
      "Courtrai Fabric is a premium cotton textile known for its softness, breathability, and versatility. Its natural fibers make it ideal for summer shirts, elegant dresses, and cozy home textiles, ensuring both comfort and style.",
    mainImage:
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-Courtrai.png",
    gallery: [
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-Courtrai.png",
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-leather.png",
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-Courtrai.png",
    ],
    specs: {
      Material: "100% Cotton",
      Width: "58 inches",
      Weight: "150 GSM",
      Usage: "Shirts, Dresses, Home Textiles",
    },
  },
  "leather-fabric": {
    name: "Leather Fabric",
    priceRange: "PKR 5,000 - 8,500 / meter",
    description:
      "High-grade synthetic leather with a realistic texture and soft touch. Designed for durability, it’s perfect for jackets, upholstery, handbags, and other fashion-forward applications.",
    mainImage:
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-leather.png",
    gallery: [
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-leather.png",
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-leather.png",
    ],
    specs: {
      Material: "Synthetic Leather",
      Width: "54 inches",
      Weight: "200 GSM",
      Usage: "Jackets, Upholstery, Bags",
    },
  },
  "mink-fabric": {
    name: "Mink Fabric",
    priceRange: "PKR 6,000 - 9,500 / meter",
    description:
      "Luxuriously soft mink fabric with a rich texture that provides warmth and comfort. Ideal for blankets, winter coats, plush toys, and high-end upholstery.",
    mainImage:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-mink-fabric.png",
    gallery: [
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-mink-fabric.png",
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-mink-fabric.png",
    ],
    specs: {
      Material: "Polyester Blend",
      Width: "60 inches",
      Weight: "300 GSM",
      Usage: "Blankets, Winter Coats, Upholstery",
    },
  },
  "fur-fabric": {
    name: "Fur Fabric",
    priceRange: "PKR 7,000 - 10,500 / meter",
    description:
      "Artificial fur with a natural look and silky feel. Perfect for fashion coats, collars, costumes, and decorative projects, offering warmth and elegance without harming animals.",
    mainImage:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-fur-fabric.png",
    gallery: [
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-fur-fabric.png",
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-fur-fabric.png",
    ],
    specs: {
      Material: "Faux Fur (Polyester)",
      Width: "58 inches",
      Weight: "350 GSM",
      Usage: "Coats, Collars, Upholstery, Costumes",
    },
  },
  "parachute-fabric": {
    name: "Parachute Fabric",
    priceRange: "PKR 3,500 - 6,500 / meter",
    description:
      "Lightweight yet extremely durable parachute fabric, resistant to water and tearing. Perfect for outdoor gear, sportswear, tents, and protective covers.",
    mainImage:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-parachute-fabric.png",
    gallery: [
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-parachute-fabric.png",
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-parachute-fabric.png",
    ],
    specs: {
      Material: "Ripstop Nylon",
      Width: "60 inches",
      Weight: "120 GSM",
      Usage: "Outdoor Gear, Jackets, Tents",
    },
  },
  "spandex-fabric": {
    name: "Spandex Fabric",
    priceRange: "PKR 4,000 - 7,500 / meter",
    description:
      "Stretchable and form-fitting spandex fabric, offering comfort and flexibility. Ideal for sportswear, dance costumes, leggings, and activewear.",
    mainImage:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-spandex-fabric.png",
    gallery: [
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-spandex-fabric.png",
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-spandex-fabric.png",
    ],
    specs: {
      Material: "Spandex / Lycra Blend",
      Width: "58 inches",
      Weight: "180 GSM",
      Usage: "Sportswear, Leggings, Costumes",
    },
  },
  "taffeta-fabric": {
    name: "Taffeta Fabric",
    priceRange: "PKR 4,500 - 8,000 / meter",
    description:
      "Crisp, smooth, and slightly shiny, taffeta fabric is perfect for gowns, evening dresses, and high-end decor. Its elegant drape adds sophistication to any creation.",
    mainImage:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-taffeta-fabric.png",
    gallery: [
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-taffeta-fabric.png",
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-taffeta-fabric.png",
    ],
    specs: {
      Material: "Polyester Taffeta",
      Width: "54 inches",
      Weight: "170 GSM",
      Usage: "Gowns, Dresses, Decor",
    },
  },
  "vilor-fabric": {
    name: "Vilor Fabric",
    priceRange: "PKR 5,000 - 8,500 / meter",
    description:
      "Soft and durable Vilor fabric, with a plush surface and vibrant colors. Excellent for upholstery, cushions, and decorative projects.",
    mainImage:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-vilor-fabric.png",
    gallery: [
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-vilor-fabric.png",
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-vilor-fabric.png",
    ],
    specs: {
      Material: "Velour (Polyester)",
      Width: "60 inches",
      Weight: "250 GSM",
      Usage: "Upholstery, Cushions, Curtains",
    },
  },
};

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const product = products[slug as keyof typeof products];

  if (!product) {
    return <p className="p-10 text-center text-red-500">Product not found</p>;
  }

  return (
    <>
      <ZhejiangNavbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-2"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {product.name}
        </motion.h1>

        {/* Price */}
        <motion.p
          className="text-lg font-semibold text-green-700 mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          {product.priceRange}
        </motion.p>

        {/* Images */}
        <motion.div className="flex flex-col lg:flex-row gap-6">
          {/* Main Image */}
          <motion.div
            className="flex-[0.7] relative h-64 sm:h-80 lg:h-[450px] cursor-pointer"
            onClick={() => setSelectedImage(product.mainImage)}
          >
            <Image
              src={product.mainImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Gallery */}
          <div className="flex flex-[0.3] flex-row lg:flex-col gap-4 h-24 sm:h-32 lg:h-[450px]">
            {product.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                className="relative flex-1 overflow-hidden min-h-[80px] sm:min-h-[100px] lg:min-h-0 cursor-pointer"
                style={{
                  height: `calc(100% / ${product.gallery.length})`,
                }}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p className="mt-6 text-gray-700 text-lg leading-relaxed">
          {product.description}
        </motion.p>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {Object.entries(product.specs).map(([key, value], i) => (
            <div
              key={key}
              className="text-center border rounded-lg p-4 bg-white"
            >
              <p className="text-sm text-gray-500">{key}</p>
              <p className="font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] h-[90%]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 mb-6 flex justify-center">
        <button
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
          onClick={() =>
            addToCart({
              slug,
              name: product.name,
              price: product.priceRange,
              image: product.mainImage,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
