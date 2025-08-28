"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  const images = [
    "/HomePage/slide-banner-1.jpg",
    "/HomePage/slide-banner-2.jpg",
    "/HomePage/slide-banner-3.jpg",
    "/HomePage/slide-banner-4.jpg",
  ];

  return (
    <>
      <Navbar />
      {/* Carousel Section */}
      <section className="w-full h-[80vh] relative font-[Montserrat]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={src}
                  alt={`Job Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Group of Companies Section */}
      <section className="bg-[#f4f7ff] py-10 text-center font-[Montserrat]">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 border-b-2 border-black inline-block">
          Group Of Companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-6 px-4 place-items-center">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/HomePage/combine-plastic-logo.png"
              alt="Company 1"
              width={110}
              height={110}
            />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/HomePage/colors-of-combine-logo.png"
              alt="Company 2"
              width={110}
              height={110}
            />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/HomePage/combine-consultant-logo.png"
              alt="Company 3"
              width={110}
              height={110}
            />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/HomePage/combine-foundation-logo.png"
              alt="Company 4"
              width={110}
              height={110}
            />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/HomePage/combine-holding-logo.png"
              alt="Company 5"
              width={110}
              height={110}
            />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/HomePage/supply-chain-logo.png"
              alt="Company 6"
              width={110}
              height={110}
            />
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/HomePage/bluesky-logo.png"
              alt="Company 7"
              width={110}
              height={110}
            />
          </Link>
        </div>
      </section>

      {/* Combine Group & Quote Section */}
      <section className="bg-black text-white py-12 font-[Montserrat]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
          {/* Left Side – tweaked */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Combine&nbsp;Group
            </h2>

            {/* single line instead of stacked number + caption */}
            <p className="text-2xl md:text-4xl font-semibold tracking-wide">
              27&nbsp;Years&nbsp;of&nbsp;Excellence
            </p>
          </div>

          {/* Right Side – image only */}
          <div className="md:ml-8">
            <Image
              src="/HomePage/combine-owner.png"
              alt="CEO with Quote"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#f4f7ff] py-20 font-[Montserrat]">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our core domains where innovation, quality, and
            sustainability intersect to drive impact across industries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16 px-4 relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-6 md:left-10 h-full w-1 bg-gray-300 rounded-full" />

          {[
            {
              title: "Manufacturing",
              desc: `Our manufacturing division combines advanced technology and skilled
        craftsmanship to produce high-performance plastic products. With a
        commitment to quality and precision, we serve diverse industries
        including automotive, consumer goods, and industrial packaging.`,
              image: "/HomePage/combine-manufacturing-banner.png",
            },
            {
              title: "Trading",
              desc: `Through a network of international partners, our trading arm ensures
        efficient procurement and supply chain management. We facilitate the
        movement of raw materials and finished goods, building lasting
        relationships based on trust and performance.`,
              image: "/HomePage/combine-trading-banner.png",
            },
            {
              title: "Consultancy",
              desc: `From operational efficiency to long-term business strategy, our
        consultancy services are tailored to meet client-specific challenges.
        We bring actionable insights, market intelligence, and real-world
        experience to help organizations scale and succeed.`,
              image: "/HomePage/combine-consultancy-banner.png",
            },
            {
              title: "Recycling",
              desc: `At the heart of our sustainability mission, our recycling unit
        transforms post-consumer and industrial plastic waste into reusable
        materials. We are committed to driving the circular economy and
        minimizing environmental impact.`,
              image: "/HomePage/combine-recycling-banner.png",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative pl-16 md:pl-20">
              {/* Number badge */}
              <div className="absolute left-0 top-2 md:left-2 bg-black text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold shadow-md z-10">
                {idx + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={600}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
