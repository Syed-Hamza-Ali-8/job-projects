"use client";

import React, { useEffect, useState } from "react";
import ColorsOfCombineNavbar from "./Colors-of-Combine-Navbar";
import Link from "next/link";
import Image from "next/image";
import { Sprout, CheckCircle, Eye, Target } from "lucide-react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut, // ✅ Correct
    },
  },
};

const ColorsOfCombine = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      text: "Each One, Plant One by Colors of Combine",
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
      text: "Grow with Nature",
    },
    {
      url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
      text: "Together for a Greener Future",
    },
  ];

  const exploreItems = [
    {
      src: "/Group-of-Companies/colors-of-combine/chicken.jpg",
      text: "Poultry Farm",
    },
    {
      src: "/Group-of-Companies/colors-of-combine/nursery.jpeg",
      text: "Plants Nursery",
    },
    {
      src: "/Group-of-Companies/colors-of-combine/vegetable-farming.jpg",
      text: "Vegetable Farming",
    },
    {
      src: "/Group-of-Companies/colors-of-combine/organic-products.jpg",
      text: "Organic Products",
    },
    {
      src: "/Group-of-Companies/colors-of-combine/cattle-farm.jpg",
      text: "Dairy Farm",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [activeExplore, setActiveExplore] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleExplore = (i: number) => {
    setActiveExplore((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <ColorsOfCombineNavbar />

      {/* Banner */}
      <motion.section
        className="relative bg-cover bg-center h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1470&q=80')",
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            A Step <br /> into <br /> Nature&apos;s Valley
          </h1>
          <Link
            href="/Contact"
            className="inline-block bg-[#024082] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>

      {/* Info (3 columns) */}
      <motion.section
        className="py-16 bg-[#f5f6fc]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="overflow-hidden rounded-lg shadow-md h-56 sm:h-64 md:h-56">
            <Image
              src="/Group-of-Companies/colors-of-combine/agronomist-in-agriculture-field-businesswomen.jpg"
              alt="Fresh produce"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
              We only grow the best organic and agriculture products in our
              farms
            </h2>
            <Link
              href="/Contact"
              className="inline-block bg-[#024082] hover:bg-blue-600 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition duration-300"
            >
              Contact Us →
            </Link>
          </div>

          <div className="bg-[#024082] text-white rounded-lg shadow-md p-8 sm:p-10 flex flex-col items-center justify-center text-center">
            <Sprout size={40} className="mb-4" />
            <h3 className="text-3xl sm:text-4xl font-bold">2750</h3>
            <p className="mt-2 text-base sm:text-lg font-medium">
              FRESH PRODUCTS
            </p>
          </div>
        </div>
      </motion.section>

      {/* Intro */}
      <motion.section
        className="py-16 bg-[#f5f6fc]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-md h-[300px] sm:h-[400px] md:h-[420px] w-full max-w-[380px] mx-auto">
            <Image
              src="/Group-of-Companies/colors-of-combine/agricultural-staff.jpg"
              alt="Farm Village"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Sprout className="text-[#024082]" size={24} />
              <span className="text-base sm:text-lg font-medium text-gray-600">
                Our Introduction
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Colors of <br /> Combine Farm Village
            </h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Welcome to Colors of Combine Farm Village where you can grow
              organic food for yourselves. Stay with true nature and enjoy the
              benefits of organic products.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#024082] mt-1" size={20} />
                <span className="text-gray-800 text-sm sm:text-base">
                  Official partners of Agri-Tourism Development Corporation of
                  Pakistan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#024082] mt-1" size={20} />
                <span className="text-gray-800 text-sm sm:text-base">
                  Create endless memories of your most memorable moments
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-16 bg-[#f5f6fc]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-[#024082]" size={24} />
              <span className="text-base sm:text-lg font-medium text-gray-600">
                Our Mission
              </span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Empowering agricultural and biogas ventures through exceptional
              facilities and expertise. We provide a versatile rental space
              designed for optimal growth, with a focus on proper nutrition,
              strategic planning, and meticulous care. Our state-of-the-art
              amenities and experienced professionals ensure a seamless
              experience for your event.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-[#024082]" size={24} />
              <span className="text-base sm:text-lg font-medium text-gray-600">
                Our Vision
              </span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              To be the leading resource for agricultural and biogas innovation,
              fostering a future where sustainable practices and optimal yields
              go hand in hand. We envision a world where our facilities and
              expertise empower ventures of all sizes to flourish, contributing
              to a more secure and sustainable food system.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Fade carousel */}
      <motion.section
        className="relative h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* NOTE: if you use remote images via next/image, ensure next.config.js allows these domains */}
            <Image
              src={slide.url}
              alt={slide.text}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                {slide.text}
              </h2>
              <Link
                href="/Contact"
                className="bg-[#024082] hover:bg-blue-600 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition duration-300"
              >
                Join Hands →
              </Link>
            </div>
          </div>
        ))}
      </motion.section>

      {/* Services */}
      <motion.section
        className="py-20 bg-[#f5f6fc] relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-2">
            Our Services
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-left hover:shadow-xl transition duration-300">
              <Image
                src="/Group-of-Companies/colors-of-combine/vegetable.png"
                alt="Fresh Vegetables"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Fresh Vegetables
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Grow your own fresh vegetables with organic process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-left hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full mb-4">
                <Sprout size={28} className="text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Nursery
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We provide plants according to your requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-left hover:shadow-xl transition duration-300">
              <Image
                src="/Group-of-Companies/colors-of-combine/organic.png"
                alt="Organic Products"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Organic Products
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We provide organic food and dairy products.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Explore (hover expand + mobile click expand) */}
      <motion.section
        className="py-20 bg-[#f5f6fc]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-2">
            Know the Nature
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            Explore Color of Combine
          </h2>

          <div className="flex flex-col md:flex-row w-full h-[350px] sm:h-[450px] md:h-[400px] lg:h-[420px] overflow-hidden rounded-lg">
            {exploreItems.map((item, i) => {
              const isActive = activeExplore === i;
              return (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleExplore(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleExplore(i);
                  }}
                  className={`
    group relative flex-1 md:flex-1 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden 
    ${isActive ? "h-[320px]" : "h-[120px]"} md:h-auto md:hover:flex-[3]`}
                >
                  <Image
                    src={item.src}
                    alt={item.text}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* overlay: visible when hovered on md OR when clicked (mobile) */}
                  <div
                    className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500
                      ${
                        isActive ? "opacity-100" : "opacity-0"
                      } md:group-hover:opacity-100`}
                    aria-hidden={!isActive}
                  >
                    <p className="text-white text-base sm:text-lg md:text-xl font-bold px-4">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Tap any image on mobile to expand and reveal its label. Hover on
            desktop to expand horizontally.
          </p>
        </div>
      </motion.section>

      {/* Map */}
      <motion.div
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7231.0661302711615!2d67.23531498784745!3d25.015977551136103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1754689645061!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </>
  );
};

export default ColorsOfCombine;
