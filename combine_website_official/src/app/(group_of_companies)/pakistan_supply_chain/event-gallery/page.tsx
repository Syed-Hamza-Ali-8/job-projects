"use client";

import Image from "next/image";
import React, { useState } from "react";
import PakistanSupplyChain from "../Pakistan-Supply-Chain-Navbar";

const EventGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    "/Group-of-Companies/pakistan-supply-chain/event-gallery/pakistan-supply-chain-event-1.jpeg",
    "/Group-of-Companies/pakistan-supply-chain/event-gallery/pakistan-supply-chain-event-2.jpeg",
    "/Group-of-Companies/pakistan-supply-chain/event-gallery/pakistan-supply-chain-event-3.jpeg",
    "/Group-of-Companies/pakistan-supply-chain/event-gallery/pakistan-supply-chain-event-4.jpeg",
  ];

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <>
      <PakistanSupplyChain />

      {/* Banner Section */}
      <div className="min-h-screen bg-white text-gray-800">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/pakistan-supply-chain/our-purpose/cake.jpeg"
            alt="Banner Background"
            fill
            className="object-cover opacity-60"
          />
          <h1 className="z-10 text-black text-3xl sm:text-4xl font-bold text-center">
            Event Gallery
          </h1>
        </div>

        {/* Event Gallery Section */}
        <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-10 tracking-wide">
            Event Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="w-full h-80 sm:h-[28rem] overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={src}
                  alt={`Event Image ${index + 1}`}
                  width={900}
                  height={700}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(20,20,20,0.7)] backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative max-w-[90%] max-h-[90%] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white text-4xl font-bold z-50 hover:cursor-pointer"
              >
                &times;
              </button>

              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 text-white text-4xl font-bold z-50 cursor-pointer"
              >
                &#8592;
              </button>

              {/* Image */}
              <Image
                src={galleryImages[selectedIndex]}
                alt="Full Image"
                width={1400}
                height={1000}
                className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-lg"
              />

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 text-white text-4xl font-bold z-50 cursor-pointer"
              >
                &#8594;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EventGallery;
