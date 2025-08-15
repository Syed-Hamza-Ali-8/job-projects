"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ZhejiangNavbar from "../Zheijang-Navbar";

const products = [
  {
    slug: "courtrai-fabric",
    name: "Courtrai Fabric",
    image:
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-Courtrai.png",
    shortDesc:
      "A symbol of elegance, crafted with meticulous precision and exquisite softness",
  },
  {
    slug: "leather-fabric",
    name: "Leather Fabric",
    image:
      "/Group-of-Companies/zheijang-combine/products/Zhejiang-Combine-leather.png",
    shortDesc:
      "Timelessly stylish, durable, and imbued with a distinct touch of luxury",
  },
  {
    slug: "mink-fabric",
    name: "Mink Fabric",
    image:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-mink-fabric.png",
    shortDesc: "Unparalleled opulence and supreme softness in every thread.",
  },
  {
    slug: "fur-fabric",
    name: "Fur Fabric",
    image:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-fur-fabric.png",
    shortDesc: "Luxurious warmth and timeless sophistication in every touch.",
  },
  {
    slug: "parachute-fabric",
    name: "Parachute Fabric",
    image:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-parachute-fabric.png",
    shortDesc:
      "Lightweight yet robust, ensuring durability and reliability in every adventure",
  },
  {
    slug: "spandex-fabric",
    name: "Spandex Fabric",
    image:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-spandex-fabric.png",
    shortDesc:
      "Stretchy, form-fitting, and versatile, offering comfort and flexibility in every movement.",
  },
  {
    slug: "taffeta-fabric",
    name: "Taffeta Fabric",
    image:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-taffeta-fabric.png",
    shortDesc:
      "Elegant and lustrous, with a crisp texture that exudes sophistication.",
  },
  {
    slug: "vilor-fabric",
    name: "Vilor Fabric",
    image:
      "/Group-of-Companies/zheijang-combine/products/zhejiang-combine-vilor-fabric.png",
    shortDesc:
      "Exquisite softness meets unparalleled durability for luxurious comfort with enduring style.",
  },
];

export default function ProductsPage() {
  const words = ["Fabric.", "Textile.", "Manufacturer.", "Trader."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeIn(true);
      }, 700);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ZhejiangNavbar />

      {/* Banner */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/products-banner.jpg"
          alt="Products Banner"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
          <p className="text-white text-lg font-[Montserrat]">
            What we do best
          </p>
          <h1 className="text-white text-5xl font-bold mb-2 font-[Montserrat]">
            Products / Services
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#CC9955] mb-4 font-[Montserrat]">
            Zhejiang Combine
          </h2>
          <p className="text-lg text-black font-semibold mb-6 font-[Montserrat]">
            What we do best
          </p>

          {/* Fade Animation */}
          <div className="relative h-8 sm:h-10 md:h-12 mb-8">
            <h3
              className={`absolute inset-0 text-5xl sm:text-xl md:text-2xl font-bold text-[#CC9955] transition-opacity duration-700 font-[Montserrat]`}
              style={{ opacity: fadeIn ? 1 : 0 }}
            >
              {words[currentIndex]}
            </h3>
          </div>

          {/* Products Grid - 1 / 2 / 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/zheijang_combine/products/${product.slug}`}
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
                  <h3 className="text-xl font-bold text-[#CC9955]">
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
}
