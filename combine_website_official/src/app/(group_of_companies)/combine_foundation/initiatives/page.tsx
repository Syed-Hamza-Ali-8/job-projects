"use client";
import React, { useState } from "react";
import CombineFoundationNavbar from "../Combine-Foundation-Navbar";
import Image from "next/image";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Initiatives = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-1.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-2.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-3.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-4.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-5.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-6.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-7.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-8.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-9.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-10.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-11.jpg",
    "/Group-of-Companies/combine-foundation/initiatives/combine-foundation-images-12.jpg",
  ];

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev ?? 0) - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  return (
    <>
      <CombineFoundationNavbar />
      <div className="bg-white text-gray-800 font-montserrat">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/combine-consultant/feedback-banner.jpg"
            alt="Feedback Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-black">
            <h1 className="text-3xl sm:text-4xl font-bold">Our Initiatives</h1>
          </div>
        </div>

        {/* Winter Relief Drive Section */}
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#6EC1E4] mb-4">
            Winter Relief Drive
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In the cold winter of 2021, Combine Foundation’s team traveled to
            the remote areas of Balochistan. They visited schools and madrasas
            to help children and families in need. Warm clothes, blankets,
            socks, and jackets were given to protect them from the freezing
            weather. For many, it was their only source of warmth and comfort.
            This effort showed that someone cares. Combine Foundation continues
            to bring hope, care, and support to those who need it most.
          </p>

          {/* Combine Foundation & Gallery */}
          <div className="mt-10">
            <p className="text-2xl sm:text-3xl">Combine Foundation</p>
            <p className="text-3xl sm:text-4xl font-bold">Gallery</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-6xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full h-80 cursor-pointer overflow-hidden rounded-lg" // increased height from h-64 to h-80
                onClick={() => setSelectedIndex(idx)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl z-50 cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <HiX />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 text-white text-4xl z-50 p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 cursor-pointer"
            onClick={handlePrev}
          >
            <HiChevronLeft />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 text-white text-4xl z-50 p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 cursor-pointer"
            onClick={handleNext}
          >
            <HiChevronRight />
          </button>

          {/* Selected Image */}
          <div className="relative w-[90%] md:w-[70%] h-[80%]">
            <Image
              src={images[selectedIndex]}
              alt="Selected"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Initiatives;
