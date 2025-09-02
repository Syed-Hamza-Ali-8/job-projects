"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CombinePlasticnavbar from "../Combine-Plastic-Navbar";

const products = [
  {
    slug: "crusher",
    name: "Crusher",
    image:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-washing-crusher.png",
    shortDesc:
      "A washing crusher cleans and crushes plastic waste, preparing it for recycling by removing contaminants and breaking it down efficiently.",
  },
  {
    slug: "dewatering",
    name: "Dewatering",
    image:
      "/Group-of-Companies/combine-plastic/products/combine-holding-dewatering.png",
    shortDesc:
      "Dewatering is the process of removing moisture from a material or substance, often used in waste management and industrial applications.",
  },
  {
    slug: "die-head",
    name: "Die Head",
    image:
      "/Group-of-Companies/combine-plastic/products/combine-holding-die-hard.png",
    shortDesc:
      "A die head is a component in extrusion processes that shapes and forms molten material into a specific cross-sectional profile.",
  },
  {
    slug: "electric-heater",
    name: "Electric Heater",
    image:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-electric-heater.png",
    shortDesc:
      "Device converting electrical energy into heat, commonly used for space heating, water heating, cooking, and industrial processes.",
  },
  {
    slug: "rooter",
    name: "Rooter",
    image:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-rooter.png",
    shortDesc:
      "A rooter is a tool used for clearing blockages in pipes and drains by rotating an auger to dislodge debris.",
  },
  {
    slug: "vaccum-pump",
    name: "Vacuum Pump",
    image:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-vacuum-pump.png",
    shortDesc:
      "Device used to remove gas molecules from a sealed volume, essential in industries like manufacturing, medicine, and research.",
  },
  {
    slug: "inverter",
    name: "Inverter",
    image:
      "/Group-of-Companies/combine-plastic/products/combine-plastic-inverter.png",
    shortDesc:
      "Device converting direct current (DC) into alternating current (AC), vital for powering electronics, solar panels, and grid-tied systems.",
  },
];

const ProductsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  return (
    <>
      <CombinePlasticnavbar />
      {/* Banner Section */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center text-center space-y-2 px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat tracking-wide">
            Products
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-500 mb-4 font-[Montserrat]">
            Combine Plastic
          </h2>
          <p className="text-lg text-black font-semibold mb-6 font-[Montserrat]">
            Our Latest Products. You Can Find All Kinds of Plastic Extrusion
            Machinery Here.
          </p>

          {/* Products Grid - 1 / 2 / 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/combine_plastic/products/${product.slug}`}
                className="block group"
              >
                {/* Fixed Aspect Ratio Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-green-500">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {product.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
