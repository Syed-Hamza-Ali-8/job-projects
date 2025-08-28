"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useCart } from "@/app/components/CartContext";
import CombineHoldingnavbar from "../../Combine-holding-Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const products = {
  "plastic-agglomerator": {
    name: "Plastic Agglomerator",
    priceRange: "PKR 2,500 - 4,000 / meter",
    description:
      "High-performance plastic agglomerator for recycling and manufacturing. Efficiently converts plastic scraps into reusable pellets with consistent quality.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-holding-plastic-agglomerator.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-holding-plastic-agglomerator.png",
      "/Group-of-Companies/combine-holding/products/combine-holding-plastic-agglomerator.png",
    ],
    specs: {
      Capacity: "100-150 kg/h",
      Power: "7.5 kW",
      Material: "Stainless Steel",
      Usage: "Plastic Recycling",
    },
  },
  "washing-crusher": {
    name: "Washing Crusher",
    priceRange: "PKR 5,000 - 8,500 / meter",
    description:
      "Durable washing crusher designed for cleaning and crushing plastic waste. Ensures uniform particle size for further processing in recycling lines.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-holding-washing-crusher.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-holding-washing-crusher.png",
    ],
    specs: {
      Capacity: "200-300 kg/h",
      Motor: "5 kW",
      Material: "Steel Alloy",
      Usage: "Plastic Preprocessing",
    },
  },
  dewatering: {
    name: "Dewatering",
    priceRange: "PKR 6,000 - 9,500 / meter",
    description:
      "Advanced dewatering system that efficiently removes moisture from washed plastics, improving drying efficiency and reducing energy consumption.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-holding-dewatering.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-holding-dewatering.png",
    ],
    specs: {
      Capacity: "150-250 kg/h",
      Material: "Stainless Steel",
      Speed: "Variable",
      Usage: "Plastic Drying",
    },
  },
  "die-head": {
    name: "Die Head",
    priceRange: "PKR 7,000 - 10,500 / meter",
    description:
      "Precision die head for extrusion machines. Ensures uniform plastic flow and consistent product quality in the production line.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-holding-die-hard-1.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-holding-die-hard-1.png",
    ],
    specs: {
      Material: "High-Grade Steel",
      Diameter: "50-100 mm",
      Usage: "Plastic Extrusion",
      Tolerance: "±0.1 mm",
    },
  },
  "granule-cutter": {
    name: "Granule Cutter",
    priceRange: "PKR 3,500 - 6,500 / meter",
    description:
      "Robust granule cutter designed to convert plastic strands into uniform granules for further processing or packaging.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-holding-granule.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-holding-granule.png",
    ],
    specs: {
      BladeMaterial: "Hardened Steel",
      Capacity: "200-400 kg/h",
      Motor: "3 kW",
      Usage: "Plastic Granulation",
    },
  },
  rooter: {
    name: "Rooter",
    priceRange: "PKR 4,000 - 7,500 / meter",
    description:
      "Efficient rooter machine for smoothing and processing plastic pellets, ensuring consistent size and quality for downstream manufacturing.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-plastic-rooter.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-plastic-rooter.png",
    ],
    specs: {
      Capacity: "150-300 kg/h",
      Motor: "5 kW",
      Material: "Steel Alloy",
      Usage: "Plastic Pellet Processing",
    },
  },
  "iron-roll": {
    name: "Iron Roll",
    priceRange: "PKR 4,500 - 8,000 / meter",
    description:
      "Industrial iron roll for flattening and shaping plastic sheets. Provides uniform thickness and smooth surfaces for high-quality production.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-holding-iron-roll.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-holding-iron-roll.png",
    ],
    specs: {
      RollLength: "2 m",
      Diameter: "200 mm",
      Material: "Cast Iron",
      Usage: "Plastic Sheet Processing",
    },
  },
  blade: {
    name: "Blade",
    priceRange: "PKR 5,000 - 8,500 / meter",
    description:
      "High-precision blade for cutting and shaping plastic products. Made for durability and long-lasting performance in industrial settings.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-plastic-blade.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-plastic-blade.png",
    ],
    specs: {
      Material: "Hardened Steel",
      Length: "500 mm",
      Thickness: "10 mm",
      Usage: "Plastic Cutting",
    },
  },
  "silicon-roll": {
    name: "Silicon Roll",
    priceRange: "PKR 5,000 - 8,500 / meter",
    description:
      "Premium silicon roll for processing sensitive plastic or rubber materials. Offers high durability, heat resistance, and consistent surface quality.",
    mainImage:
      "/Group-of-Companies/combine-holding/products/combine-holding-silicon-roller.png",
    gallery: [
      "/Group-of-Companies/combine-holding/products/combine-holding-silicon-roller.png",
    ],
    specs: {
      Diameter: "150 mm",
      Material: "Silicon-Coated Steel",
      Usage: "Plastic & Rubber Processing",
      HeatResistance: "Up to 200°C",
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
      <CombineHoldingnavbar />

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
          {Object.entries(product.specs).map(([key, value]) => (
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
          onClick={() => {
            addToCart({
              slug,
              name: product.name,
              price: product.priceRange,
              image: product.mainImage,
              quantity: 1,
            });
            toast.success(`${product.name} added to cart!`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
