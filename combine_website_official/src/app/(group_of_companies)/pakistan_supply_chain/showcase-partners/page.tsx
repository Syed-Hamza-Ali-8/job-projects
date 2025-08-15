"use client";
import Image from "next/image";
import PakistanSupplyChain from "../Pakistan-Supply-Chain-Navbar";

export default function ShowcasePartners() {
  return (
    <>
      <PakistanSupplyChain />
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
            Showcase Partners
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Partners</h2>
          <p className="text-lg text-gray-600">Coming soon...</p>
        </div>
      </div>
    </>
  );
}
