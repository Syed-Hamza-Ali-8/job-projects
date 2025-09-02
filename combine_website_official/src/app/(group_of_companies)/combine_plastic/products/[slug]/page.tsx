"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useCart } from "@/app/components/CartContext";
import CombinePlasticnavbar from "../../Combine-Plastic-Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const products = {
  crusher: {
    name: "Crusher",
    description:
      "Heavy-duty plastic crusher used to crush and break down plastic waste into smaller particles, making it suitable for recycling and further processing.",
    mainImage:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-washing-crusher.png",
    gallery: [
      "/Group-of-Companies/combine-plastic/products/combine-plastic-washing-crusher.png",
    ],
    specs: {
      Capacity: "100-150 kg/h",
      Motor: "7.5 kW",
      BladeMaterial: "Alloy Steel",
      Usage: "Plastic Size Reduction",
    },
  },
  dewatering: {
    name: "Dewatering Machine",
    description:
      "Industrial dewatering machine designed to remove moisture from washed plastic flakes, improving drying efficiency before extrusion or pelletizing.",
    mainImage:
      "/Group-of-Companies/combine-plastic/products/combine-holding-dewatering.png",
    gallery: [
      "/Group-of-Companies/combine-plastic/products/combine-holding-dewatering.png",
    ],
    specs: {
      Capacity: "200-300 kg/h",
      Power: "5 kW",
      Material: "Steel Alloy",
      Usage: "Plastic Drying",
    },
  },
  "die-head": {
    name: "Die Head",
    description:
      "Precision-engineered die head used in extrusion machines to ensure consistent shape, smooth flow, and high-quality plastic output.",
    mainImage:
      "/Group-of-Companies/combine-plastic/products/combine-holding-die-hard.png",
    gallery: [
      "/Group-of-Companies/combine-plastic/products/combine-holding-die-hard.png",
    ],
    specs: {
      Material: "Stainless Steel",
      Diameter: "50-150 mm",
      Usage: "Plastic Extrusion",
      Tolerance: "±0.05 mm",
    },
  },
  "electric-heater": {
    name: "Electric Heater",
    description:
      "Durable electric heater used in extrusion and molding machines to maintain precise temperature control for consistent plastic processing.",
    mainImage:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-electric-heater.png",
    gallery: [
      "/Group-of-Companies/combine-plastic/products/combine-plastic-electric-heater.png",
    ],
    specs: {
      Material: "High-Grade Steel with Ceramic Insulation",
      TemperatureRange: "0 - 400°C",
      Power: "2 - 5 kW",
      Usage: "Plastic Heating",
    },
  },
  rooter: {
    name: "Rooter Machine",
    description:
      "Rooter machine designed to process and refine recycled plastic, ensuring uniform particle size and high-quality output for further production.",
    mainImage:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-rooter.png",
    gallery: [
      "/Group-of-Companies/combine-plastic/products/combine-plastic-rooter.png",
    ],
    specs: {
      Capacity: "150-300 kg/h",
      Motor: "5 kW",
      Material: "Steel Alloy",
      Usage: "Plastic Refining",
    },
  },
  "vaccum-pump": {
    name: "Vacuum Pump",
    description:
      "Industrial vacuum pump used in plastic recycling systems to remove air, moisture, and gases, ensuring better processing and final product quality.",
    mainImage:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-vacuum-pump.png",
    gallery: [
      "/Group-of-Companies/combine-plastic/products/combine-plastic-vacuum-pump.png",
    ],
    specs: {
      Capacity: "100-200 m³/h",
      Power: "3 - 5 kW",
      Material: "Cast Iron / Steel",
      Usage: "Vacuum & Moisture Removal",
    },
  },
  inverter: {
    name: "Inverter",
    description:
      "Energy-efficient inverter for controlling the speed and power of motors in plastic recycling machines, reducing energy consumption and improving performance.",
    mainImage:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-inverter.png",
    gallery: [
      "/Group-of-Companies/combine-plastic/products/combine-plastic-inverter.png",
    ],
    specs: {
      InputVoltage: "220V / 380V",
      PowerRange: "1.5 - 15 kW",
      Control: "Variable Speed Drive",
      Usage: "Motor Speed Control",
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
      <CombinePlasticnavbar />

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
              // price: product.priceRange,
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
