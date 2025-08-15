"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa"; // Importing tick icon
import ZhejiangNavbar from "../Zheijang-Navbar";

const HowItWorks = () => {
  return (
    <>
      <ZhejiangNavbar />
      {/* Banner Section */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center bg-[#f0f3ff] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Group-of-Companies/zheijang-combine/how-it-works-banner.jpg"
          alt="How It Works Banner"
          fill
          className="object-cover opacity-80"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-2">
          {/* Optional Decorative Image */}
          <Image
            src="/Group-of-Companies/zheijang-combine/how-it-works/tailor-white-illustrio.png"
            alt="Decorative Icon"
            width={80}
            height={80}
            className="mb-2"
          />

          {/* Text */}
          <p className="text-white text-sm sm:text-base font-medium tracking-wide">
            Made by skilled people
          </p>
          <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
            with Elegant Textile Creations
          </p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat tracking-wide">
            How It Works
          </h1>
        </div>
      </section>

      {/* Paragraph Section */}
      <section className="max-w-5xl mx-auto text-center px-4 py-12">
        <p className="text-base sm:text-lg font-semibold">
          Our company carefully sources raw materials such as natural fibers,
          cotton, wool, and silk, using organic and ethical farming methods. For
          synthetic fibers, we work with suppliers who use recycled materials or
          create new materials using sustainable methods. We have a team of
          experts who inspect each batch of materials to ensure they meet our
          quality standards. We also prioritize sustainability practices such as
          reducing waste and minimizing the use of harmful chemicals.
        </p>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase mb-6">
            The Process
          </h2>
          <p className="text-base lg:text-lg leading-7 text-justify text-gray-800">
            We source our materials from sustainable suppliers and collaborate
            with our clients to create unique patterns, colors, and textures. We
            develop prototypes and samples iteratively with our clients to
            ensure that the final product meets their specific requirements. We
            also take great care to ensure that our fabrics are of the highest
            quality and use a variety of techniques to achieve the desired
            aesthetics. Quality control is paramount to our business, and we
            take great care to package our finished products for protection and
            presentation. We value our customers’ feedback and use it to refine
            our products and processes over time. We are committed to
            environmental and social responsibility, implementing sustainability
            initiatives and ethical practices throughout our manufacturing
            process.
          </p>
        </div>

        {/* Images Section */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <Image
            src="/Group-of-Companies/zheijang-combine/how-it-works/laptop.jpg"
            alt="Laptop Design"
            width={500}
            height={350}
            className="rounded-lg w-full h-full object-cover"
          />
          <Image
            src="/Group-of-Companies/zheijang-combine/how-it-works/scissor.jpg"
            alt="Tools"
            width={500}
            height={350}
            className="rounded-lg w-full h-full object-cover"
          />
          <Image
            src="/Group-of-Companies/zheijang-combine/how-it-works/cloth.jpg"
            alt="Cloth"
            width={500}
            height={350}
            className="rounded-lg w-full h-full object-cover"
          />
          <Image
            src="/Group-of-Companies/zheijang-combine/how-it-works/man.jpg"
            alt="Professional"
            width={500}
            height={350}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </section>

      {/* What's Included Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold uppercase mb-4">What's Included?</h2>
        <p className="text-sm leading-6 mb-6">
          Outline your textile products or services to communicate the benefits
          of choosing your company for customers’ textile needs.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Product Range",
            "Customization Options",
            "Quality Assurance",
            "Design Innovation",
            "Material Selection",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 border border-yellow-400 rounded-md p-3 bg-white shadow-sm"
            >
              <div className="mt-1">
                <FaCheck className="text-yellow-500 text-lg" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

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

export default HowItWorks;
