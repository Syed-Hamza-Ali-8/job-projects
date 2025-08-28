"use client";

import React, { useEffect, useState } from "react";
import CombineHoldingnavbar from "../Combine-holding-Navbar";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    slug: "plastic-agglomerator",
    name: "Plastic Agglomerator",
    image:
      "/Group-of-Companies/combine-holding/products/combine-holding-plastic-agglomerator.png",
    shortDesc:
      "A plastic agglomerator is a machine that converts plastic waste into dense, usable pellets through melting, shredding, and compaction processes.",
  },
  {
    slug: "washing-crusher",
    name: "Washing Crusher",
    image:
      "/Group-of-Companies/combine-holding/products/combine-holding-washing-crusher.png",
    shortDesc:
      "A washing crusher cleans and crushes plastic waste, preparing it for recycling by removing contaminants and breaking it down efficiently.",
  },
  {
    slug: "dewatering",
    name: "Dewatering",
    image:
      "/Group-of-Companies/combine-holding/products/combine-holding-dewatering.png",
    shortDesc:
      "Dewatering is the process of removing moisture from a material or substance, often used in waste management and industrial applications",
  },
  {
    slug: "die-head",
    name: "Die Head",
    image:
      "/Group-of-Companies/combine-holding/products/combine-holding-die-hard-1.png",
    shortDesc:
      "A die head is a component in extrusion processes that shapes and forms molten material into a specific cross-sectional profile.",
  },
  {
    slug: "granule-cutter",
    name: "Granule Cutter",
    image:
      "/Group-of-Companies/combine-holding/products/combine-holding-granule.png",
    shortDesc:
      "A granule cutter is a machine used to precisely cut plastic granules or pellets to a desired length for various applications.",
  },
  {
    slug: "rooter",
    name: "Rooter",
    image:
      "/Group-of-Companies/combine-holding/products/combine-plastic-rooter.png",
    shortDesc:
      "A rooter is a tool used for clearing blockages in pipes and drains by rotating an auger to dislodge debris.",
  },
  {
    slug: "iron-roll",
    name: "Iron Roll",
    image:
      "/Group-of-Companies/combine-holding/products/combine-holding-iron-roll.png",
    shortDesc:
      "An iron roll is a cylindrical tool used in various industrial processes like rolling mills for shaping or flattening materials.",
  },
  {
    slug: "blade",
    name: "Blade",
    image:
      "/Group-of-Companies/combine-holding/products/combine-plastic-blade.png",
    shortDesc:
      "A blade is a sharp-edged tool or weapon used for cutting, slicing, or shaping various materials in industrial, culinary, or recreational activities.",
  },
  {
    slug: "silicon-roll",
    name: "Silicon Roll",
    image:
      "/Group-of-Companies/combine-holding/products/combine-holding-silicon-roller.png",
    shortDesc:
      "A silicon roll is a cylindrical component often used in industrial processes like printing or laminating due to its heat resistance.",
  },
];

const ProductsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  return (
    <>
      <CombineHoldingnavbar />
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
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4 font-[Montserrat]">
            Combine Holding
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
                href={`/combine_holding/products/${product.slug}`}
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
                  <h3 className="text-xl font-bold text-blue-500">
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
