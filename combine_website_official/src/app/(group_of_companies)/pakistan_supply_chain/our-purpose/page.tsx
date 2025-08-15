"use client";
import React from "react";
import PakistanSupplyChain from "../Pakistan-Supply-Chain-Navbar";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const PurposePage = () => {
  return (
    <>
      <PakistanSupplyChain />

      {/* Banner */}
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
            Our Purpose
          </h1>
        </div>

        {/* Purpose Section */}
        <section className="bg-[#F4F6FE] py-16 px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left - Images */}
            <div className="relative w-full md:w-1/2">
              <Image
                src="/Group-of-Companies/pakistan-supply-chain/our-purpose/psc-event.jpg"
                alt="Main Display"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <Image
                src="/Group-of-Companies/pakistan-supply-chain/our-purpose/cake.jpeg"
                alt="Cake Image"
                width={200}
                height={150}
                className="absolute bottom-[-40px] left-[-40px] rounded-lg border-4 border-white shadow-lg"
              />
            </div>

            {/* Right - Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-lg font-semibold text-[#0C1D37]">
                OUR PURPOSE
              </h2>
              <h1 className="text-3xl font-bold text-[#0C1D37] mt-2 mb-4 leading-snug">
                Building the Bridge Between <br /> Business Communities
              </h1>
              <p className="text-gray-600 mb-3">
                It aims at enhancing connectivity and improving infrastructure
                between Pakistan and China.
              </p>
              <p className="text-gray-600 mb-6">
                People-to-people contacts are an important aspect of the
                bilateral relationship.
              </p>

              {/* Vision List */}
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <ul className="space-y-3 text-[#0C1D37]">
                {[
                  "Increasing Pak-China Cooperation",
                  "Role Of Community Organizations",
                  "Culture, Art & Tourism Exchange",
                  "Enhance Bilateral Cooperation",
                  "Era Of Economic Globalization",
                ].map((vision, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-500 mt-1" />
                    {vision}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PurposePage;
