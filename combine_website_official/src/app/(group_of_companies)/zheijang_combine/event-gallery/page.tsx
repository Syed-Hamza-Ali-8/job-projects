"use client";

import Image from "next/image";
import React, { useState } from "react";
import ZhejiangNavbar from "../Zheijang-Navbar";

const page = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-2.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-3.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-4.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-5.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-6.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-7.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-8.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-9.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-10.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/zhejiang-combine-event-gallery-11.jpg",
    "/Group-of-Companies/zheijang-combine/event-gallery/plastic-22.jpg",
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
      <ZhejiangNavbar />

      {/* Banner Section */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center bg-[#f0f3ff] overflow-hidden">
        <Image
          src="/Group-of-Companies/zheijang-combine/how-it-works-banner.jpg"
          alt="How It Works Banner"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-2">
          <Image
            src="/Group-of-Companies/zheijang-combine/how-it-works/tailor-white-illustrio.png"
            alt="Decorative Icon"
            width={80}
            height={80}
            className="mb-2"
          />
          <p className="text-white text-sm sm:text-base font-medium tracking-wide">
            Made by skilled people
          </p>
          <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
            with Elegant Textile Creations
          </p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat tracking-wide">
            Event Gallery
          </h1>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-[#1f1f1f] mb-10 tracking-wide">
          Event Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={src}
                alt={`Event Image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
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
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
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

      {/* Contact Section */}
      <section className="relative bg-[#b8afa9] text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
        {/* Background Scissor Image */}
        <div className="absolute inset-0 right-0 flex justify-end items-center pointer-events-none">
          <Image
            src="/Group-of-Companies/zheijang-combine/event-gallery/scissor-right.png" // Make sure to replace this path with the actual scissor image
            alt="Scissors"
            width={500}
            height={500}
            className="object-contain opacity-30"
          />
        </div>

        {/* Text + Button */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat mb-4 text-white">
              COME & VISIT US TODAY.
            </h2>
            <p className="text-sm sm:text-base font-medium italic">
              Visit us today to explore our latest offerings. We can’t wait to
              show you around and share our exceptional amenities with you!
            </p>
          </div>
          <a
            href="/Contact"
            className="bg-[#d8a852] hover:bg-[#c89a42] transition text-white font-semibold py-3 px-6 rounded-md shadow-lg font-montserrat"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </>
  );
};

export default page;
