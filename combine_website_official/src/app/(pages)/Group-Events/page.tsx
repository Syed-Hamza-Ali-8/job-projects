"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

const images = [
  {
    src: "/GroupEvents/combine-plastic-event-image.jpg",
    title: "Combine Plastic Event",
  },
  {
    src: "/GroupEvents/zhejiang-combine-event-gallery.jpg",
    title: "Zheijang Combine Event",
  },
  {
    src: "/GroupEvents/pakistan-supply-chain-event.jpeg",
    title: "Pakistan Supply Chain Event",
  },
  {
    src: "/GroupEvents/combine-foundation-images.jpg",
    title: "Combine Foundation Event",
  },
  {
    src: "/GroupEvents/combine-team-trip-event.jpeg",
    title: "Team Trip",
  },
  {
    src: "/GroupEvents/combine-karwan-e-rozqar-event.jpg",
    title: "Karwan-e-Rozgar Karachi",
  },
  {
    src: "/GroupEvents/combine-consultants-contract-event-images-1.jpg",
    title: "Combine Consultant Event 1",
  },
  {
    src: "/GroupEvents/combine-consultants-event-images-2.jpg",
    title: "Combine Consultant Event 2",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] bg-[url('/AboutPage/about-us-image.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0" />
          <h1 className="z-10 text-4xl md:text-6xl text-white font-extrabold font-[Montserrat] drop-shadow-lg">
            GROUP EVENTS
          </h1>
          <p className="z-10 mt-4 max-w-2xl text-white text-lg md:text-2xl font-light px-4">
            Explore our vibrant gallery of unforgettable group events, where
            every image tells a story of collaboration, celebration, and global
            excellence.
          </p>
        </section>

        {/* Gallery Section */}
        <section className="w-full bg-white py-16 px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            OUR GALLERY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="relative group rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative w-full h-72">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold drop-shadow">
                    {img.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
