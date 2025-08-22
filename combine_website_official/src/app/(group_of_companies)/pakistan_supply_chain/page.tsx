"use client";

import { useState, useEffect } from "react";
import PakistanSupplyChain from "./Pakistan-Supply-Chain-Navbar";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Banner slider images
const images = [
  "/Group-of-Companies/pakistan-supply-chain/our-purpose/cake.jpeg",
  "/Group-of-Companies/pakistan-supply-chain/event-gallery/pakistan-supply-chain-event-1.jpeg",
  "/Group-of-Companies/pakistan-supply-chain/event-gallery/pakistan-supply-chain-event-3.jpeg",
  "/Group-of-Companies/pakistan-supply-chain/event-gallery/pakistan-supply-chain-event-2.jpeg",
];

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const PakistanSupplyChainPage = () => {
  const [current, setCurrent] = useState(0);

  // Counter section inView
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navbar */}
      <PakistanSupplyChain />

      {/* Banner Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 px-4">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl text-[#024082] sm:text-6xl md:text-6xl lg:text-5xl font-bold font-montserrat"
          >
            Combine Group
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg sm:text-3xl md:text-3xl lg:text-2xl mt-2 font-montserrat"
          >
            Building the Bridge Between
          </motion.h2>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg sm:text-3xl md:text-3xl lg:text-2xl font-montserrat"
          >
            Business Communities
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mt-4 text-sm sm:text-3xl md:text-xl lg:text-2xl font-montserrat"
          >
            Our presence in China’s rich state of Zhejiang we also facilitate
            our customer to trade general merchandise other than textile.
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="text-white py-16 px-6"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#024082] text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src="/Group-of-Companies/pakistan-supply-chain/Excellent-Material.png"
              alt="Excellent Material"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Excellent Material</h3>
            <p>We use international standard material</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#024082] text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src="/Group-of-Companies/pakistan-supply-chain/Quality-Product.png"
              alt="Quality Product"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Quality Product</h3>
            <p>We create export quality products</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#024082] text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src="/Group-of-Companies/pakistan-supply-chain/Trusted-by-Clients.png"
              alt="Trusted by Clients"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Trusted by Clients</h3>
            <p>We are trusted by thousands of clients</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <section className="bg-[#f5f7ff] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-[400px] h-[280px] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Group-of-Companies/pakistan-supply-chain/event-gallery/pakistan-supply-chain-event-2.jpeg"
                alt="About main"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Small overlapping image */}
            <motion.div
              variants={fadeInUp}
              className="w-[200px] h-[140px] absolute -bottom-10 -left-10 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/Group-of-Companies/pakistan-supply-chain/small-img.jpeg"
                alt="About small"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-gray-600 font-semibold uppercase tracking-widest">
              About
            </h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#024082] mt-2">
              Building the Bridge Between <br /> Business Communities
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              This relationship has built on the strength of its successive
              achievements and has become formidable with each passing day and
              year. The leadership of both countries is committed to taking this
              relationship forward.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              It aims at enhancing connectivity and improving infrastructure
              between Pakistan and China.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              People-to-people contacts are an important aspect of the bilateral
              relationship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f5f7ff] py-16 font-montserrat">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-black text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-justify md:text-base leading-relaxed text-sm sm:text-xl">
              Building bridges, fostering growth. We connect Pakistan & China’s
              business communities, promoting cultural exchange and bilateral
              cooperation. Operating with integrity in Zhejiang, we facilitate
              trade beyond textiles for a thriving economic future.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-black text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 text-justify md:text-base leading-relaxed text-sm sm:text-xl">
              To be the premier platform for seamless Pakistan-China
              collaboration. We envision a future where cultural understanding
              fosters a dynamic economic partnership, propelling both nations
              towards a prosperous and interconnected future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pakistan Supply Chain Section (6 boxes) */}
      <section className="bg-[#f5f7ff] py-20 px-6 font-montserrat">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-xl sm:text-2xl font-bold text-gray-700 mb-12 tracking-widest uppercase"
          >
            Pakistan Supply Chain
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                img: "/Group-of-Companies/pakistan-supply-chain/Increasing-Pak-China-Cooperation.png",
                title: "Increasing Pak-China Cooperation",
                text: "China and Pakistan should strengthen cooperation in trade and industrial areas",
              },
              {
                img: "/Group-of-Companies/pakistan-supply-chain/Role-Of-Community-Organizations.png",
                title: "Role Of Community Organizations",
                text: "In order to materially improve the business of community members.",
              },
              {
                img: "/Group-of-Companies/pakistan-supply-chain/Culture-Art-Tourism-Exchange.png",
                title: "Culture, Art & Tourism Exchange",
                text: "Creators can contribute to this industry, bringing foreign exchange and revenue to the country.",
              },
              {
                img: "/Group-of-Companies/pakistan-supply-chain/Enhance-Bilateral-Cooperation.png",
                title: "Enhance Bilateral Cooperation",
                text: "Both countries should work together and support each other mutually.",
              },
              {
                img: "/Group-of-Companies/pakistan-supply-chain/Era-Of-Economic-Globalization.png",
                title: "Era Of Economic Globalization",
                text: "Subsequent technology advancements have accelerated globalization.",
              },
              {
                img: "/Group-of-Companies/pakistan-supply-chain/Integrity-Guarantees.png",
                title: "Integrity Guarantees",
                text: "Works well at Integrity Warranty from the people who know best.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition duration-300 text-center"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Together Section with animated counters */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24 font-montserrat"
        style={{
          backgroundImage:
            "url('/Group-of-Companies/pakistan-supply-chain/pak-china.png')",
        }}
        ref={counterRef}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-white px-6 text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold mb-10"
          >
            Work Together
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl sm:text-5xl font-bold">
                {inView && <CountUp start={0} end={789} duration={3} />}+
              </h3>
              <p className="mt-2 text-lg">Completed Projects</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl sm:text-5xl font-bold">
                {inView && <CountUp start={0} end={4} duration={2} />}+
              </h3>
              <p className="mt-2 text-lg">Export Countries</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl sm:text-5xl font-bold">
                {inView && <CountUp start={0} end={35000} duration={3} />}+
              </h3>
              <p className="mt-2 text-lg">Satisfied Customers</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PakistanSupplyChainPage;
