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
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gray-900 flex items-center justify-center overflow-hidden font-montserrat">
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
          className="relative z-10 text-center px-4 sm:px-6 md:px-10 text-white max-w-4xl"
        >
          <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <FaIndustry className="text-[#d4af37]" />
            Textile Manufacturing
          </h1>
          <h2 className="flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            <FaExchangeAlt className="text-[#d4af37]" />
            General Trading
          </h2>

          <p className="text-lg sm:text-5xl sm:font-bold md:text-6xl md:font-bold font-medium mb-6">
            Your Reliable
          </p>

          <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-6">
            <p
              key={currentIndex}
              className={`text-2xl sm:text-5xl sm:font-bold md:text-6xl font-bold tracking-wide text-[#d4af37] transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {words[currentIndex]}
            </p>
          </div>

          <p className="text-sm sm:text-xl md:text-base leading-relaxed mb-6">
            Elevate your wardrobe with professional clothing alterations. From
            simple hemming to intricate resizing and restyling, our skilled
            tailors ensure a perfect fit and personalized style. Revitalize your
            favorite garments with quality craftsmanship, enhancing their
            appearance and comfort for a refreshed and refined look tailored
            just for you.
          </p>

          <Link
            href="/Contact"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] hover:bg-white hover:text-[#D4AF37] transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Our Location
          </Link>
        </motion.div>
      </div>

      {/* Two Column Section */}
      <section className="py-16 bg-white font-montserrat">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
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
              width={500}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-black text-sm md:text-base sm:text-xl leading-relaxed">
              We create it better. <br />
              Crafting excellence through innovation and precision. Our passion
              drives us to create superior content, captivating audiences with
              compelling narratives and immersive experiences that leave a
              lasting impact.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-5xl font-bold text-black mb-4">
              Quality Service
            </h3>
            <p className="mb-4 md:text-base sm:text-xl text-black">
              Exemplary services marked by quality, expertise, and customer
              satisfaction.
            </p>
            <p className="mb-4 md:text-base sm:text-xl text-black">
              Zhejiang leads in textile and garment solutions, from raw
              materials like fabric, leather, and trims, to finished garment
              production. We specialize in ready-to-wear, luxury, children’s
              clothing, fleece, babywear, workwear, and home textiles.
            </p>
            <p className="text-black md:text-base sm:text-xl">
              As a leading textile manufacturing & general trading company,
              Zhejiang provides a comprehensive and wide range of inspections.
              From initial pre-production inspections to final product
              inspections, we ensure the quality of our clients’ textile
              products. We can inspect a variety of potential issues, including
              physical defects, colorfastness, dimensional stability, and more.
              Our experienced team of textile inspectors works to ensure that
              product quality meets client requirements and industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50 font-montserrat">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-4 text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4">What We Do</h2>
          <p className="text-gray-700 md:text-base sm:text-xl max-w-3xl mx-auto">
            We excel in textile manufacturing, crafting premium fabrics and
            garments. Our comprehensive process includes design, repairs &
            refinishing, custom garments, alterations, material sourcing,
            production, quality control, and timely delivery, ensuring
            uncompromising excellence.
          </p>
        </motion.div>

        {/* Three Image Cards */}
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              img: "/Group-of-Companies/zheijang-combine/raw-material.jpg",
              title: "RAW MATERIAL",
              desc: "We produce raw material in China, ensuring quality and efficiency for manufacturing needs.",
            },
            {
              img: "/Group-of-Companies/zheijang-combine/baby-garments.jpg",
              title: "BABY GARMENTS",
              desc: "Soft, adorable attire designed for infants, ensuring comfort, warmth, and style for the little ones.",
            },
            {
              img: "/Group-of-Companies/zheijang-combine/apparel.jpg",
              title: "APPAREL",
              desc: "Fabric, design, and craftsmanship creating fashionable clothing items.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700 md:text-base sm:text-xl flex-grow">
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
          className="text-center mb-10"
        >
          <h2 className="text-white text-3xl font-bold relative inline-block">
            <span className="before:absolute before:w-16 before:h-[1px] before:bg-gray-300 before:left-[-70px] before:top-1/2"></span>
            ABOUT
            <span className="after:absolute after:w-16 after:h-[1px] after:bg-gray-300 after:right-[-70px] after:top-1/2"></span>
          </h2>
        </motion.div>

        {/* Row 1: Mission */}
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-0 items-start max-w-5xl">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-[350px]"
          >
            <Image
              src="/Group-of-Companies/zheijang-combine/combine-our-mission.jpg"
              alt="About Us"
              fill
              className="object-cover rounded-md"
            />
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-10 shadow-lg relative z-10 -ml-8 mt-8 flex flex-col justify-center h-[440px] rounded-md"
          >
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-700 text-sm md:text-base sm:text-xl leading-relaxed">
              At Zhejiang, our mission is to set the standard as leaders in
              manufacturing, supplying, trading, and exporting high-quality
              fabrics and garments worldwide. Our mission is to attain
              recognition as a premier supplier in our markets by delivering
              superior quality yarns, fabric, fleece, and textile products to
              meet our customers’ needs. We achieve this through excellence in
              customer service, sales, and manufacturing, underpinned by
              collaborative teamwork. Upholding honesty, fairness, and
              integrity, we cultivate enduring relationships with customers,
              associates, and shareholders.
            </p>
          </motion.div>
        </div>

        <br />
        <br />

        {/* Row 2: Vision */}
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-0 items-start max-w-5xl">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-6 shadow-lg relative z-10 -mr-8 mt-8 flex flex-col justify-center h-[350px] rounded-md order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-700 text-sm md:text-base sm:text-xl leading-relaxed">
              We strive to be among the foremost textile companies, acknowledged
              for our leadership in technology, flexibility, responsiveness, and
              unwavering commitment to quality. In our pursuit of excellence, we
              aspire to redefine the textile industry landscape, setting new
              benchmarks through innovative practices, sustainable solutions,
              and an unwavering commitment to delivering unparalleled customer
              satisfaction on a global scale.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-[350px] order-1 md:order-2"
          >
            <Image
              src="/Group-of-Companies/zheijang-combine/combine-our-vision.jpg"
              alt="About Us"
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
