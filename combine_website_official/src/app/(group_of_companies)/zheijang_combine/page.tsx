"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ZhejiangNavbar from "./Zheijang-Navbar";
import { FaIndustry, FaExchangeAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const ZheijangCombine = () => {
  const words = ["Textile.", "Fabric.", "Manufacturer.", "Trader."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <ZhejiangNavbar />

      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] bg-gray-900 flex items-center justify-center overflow-hidden font-montserrat">
        <Image
          src="/Group-of-Companies/zheijang-combine/zheijang-banner-img.png"
          alt="Zhejiang Combine Banner"
          fill
          className="object-cover opacity-60"
          priority
        />

        {/* Animated overlay content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 text-center px-3 sm:px-6 md:px-10 text-white max-w-3xl"
        >
          <h1 className="flex items-center justify-center gap-2 text-lg sm:text-2xl md:text-4xl font-bold mb-2">
            <FaIndustry className="text-[#d4af37]" />
            Textile Manufacturing
          </h1>
          <h2 className="flex items-center justify-center gap-2 text-base sm:text-xl md:text-3xl font-semibold mb-4">
            <FaExchangeAlt className="text-[#d4af37]" />
            General Trading
          </h2>

          <p className="text-base sm:text-3xl md:text-5xl font-bold mb-4">
            Your Reliable
          </p>

          <div className="h-10 sm:h-14 md:h-16 flex items-center justify-center mb-4">
            <p
              key={currentIndex}
              className={`text-lg sm:text-3xl md:text-5xl font-bold tracking-wide text-[#d4af37] transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {words[currentIndex]}
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-6 px-2">
            Elevate your wardrobe with professional clothing alterations. From
            simple hemming to intricate resizing and restyling, our skilled
            tailors ensure a perfect fit and personalized style.
          </p>

          <Link
            href="/Contact"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] hover:bg-white hover:text-[#D4AF37] transition-colors text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg text-sm sm:text-base"
          >
            Our Location
          </Link>
        </motion.div>
      </div>

      {/* Two Column Section */}
      <section className="py-12 sm:py-16 bg-white font-montserrat">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <Image
              src="/Group-of-Companies/zheijang-combine/we-create-it-better.jpeg"
              alt="We create it better"
              width={450}
              height={350}
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-black text-xs sm:text-sm md:text-base leading-relaxed px-2">
              We create it better. Crafting excellence through innovation and
              precision. Our passion drives us to create superior content,
              captivating audiences with compelling narratives.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl sm:text-4xl font-bold text-black mb-4">
              Quality Service
            </h3>
            <p className="mb-3 text-sm sm:text-base text-black">
              Exemplary services marked by quality, expertise, and customer
              satisfaction.
            </p>
            <p className="mb-3 text-sm sm:text-base text-black">
              Zhejiang leads in textile and garment solutions, from raw
              materials like fabric, leather, and trims, to finished garment
              production.
            </p>
            <p className="text-sm sm:text-base text-black">
              We ensure the quality of our clients’ textile products with
              inspections covering defects, stability, and standards compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 bg-gray-50 font-montserrat">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-4 text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">
            What We Do
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto px-2">
            We excel in textile manufacturing, crafting premium fabrics and
            garments. From design to quality control and timely delivery, we
            ensure uncompromising excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              img: "/Group-of-Companies/zheijang-combine/raw-material.jpg",
              title: "RAW MATERIAL",
              desc: "We produce raw material in China, ensuring quality and efficiency.",
            },
            {
              img: "/Group-of-Companies/zheijang-combine/baby-garments.jpg",
              title: "BABY GARMENTS",
              desc: "Soft, adorable attire designed for infants with comfort and style.",
            },
            {
              img: "/Group-of-Companies/zheijang-combine/apparel.jpg",
              title: "APPAREL",
              desc: "Fabric, design, and craftsmanship creating fashionable clothing.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base flex-grow">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#555861] py-12 font-montserrat">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-white text-2xl sm:text-3xl font-bold relative inline-block">
            ABOUT
          </h2>
        </motion.div>

        {/* Mission */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-5xl">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-[250px] sm:h-[350px] rounded-md overflow-hidden"
          >
            <Image
              src="/Group-of-Companies/zheijang-combine/combine-our-mission.jpg"
              alt="Our Mission"
              fill
              className="object-cover rounded-md"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-5 sm:p-8 shadow-lg rounded-md flex flex-col justify-center h-[250px] sm:h-[350px]"
          >
            <h3 className="text-lg sm:text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              At Zhejiang, our mission is to set the standard as leaders in
              manufacturing, supplying, trading, and exporting high-quality
              fabrics and garments worldwide.
            </p>
          </motion.div>
        </div>

        <br />

        {/* Vision */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-5xl">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-5 sm:p-8 shadow-lg rounded-md flex flex-col justify-center h-[250px] sm:h-[350px] order-2 md:order-1"
          >
            <h3 className="text-lg sm:text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              We strive to be among the foremost textile companies, acknowledged
              for our leadership in technology, flexibility, and quality while
              setting new benchmarks globally.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-[250px] sm:h-[350px] rounded-md overflow-hidden order-1 md:order-2"
          >
            <Image
              src="/Group-of-Companies/zheijang-combine/combine-our-vision.jpg"
              alt="Our Vision"
              fill
              className="object-cover rounded-md"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ZheijangCombine;
