"use client";

import React from "react";
import PakistanSupplyChain from "../Pakistan-Supply-Chain-Navbar";
import Image from "next/image";

const BecomeMemberPage = () => {
  return (
    <>
      <PakistanSupplyChain />

      {/* Main Section */}
      <div className="bg-[#eef2ff] min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
        {/* Banner */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden mb-12">
          <Image
            src="/Group-of-Companies/pakistan-supply-chain/our-purpose/cake.jpeg"
            alt="Banner Background"
            fill
            className="object-cover opacity-60"
          />
          <h1 className="z-10 text-black text-3xl sm:text-4xl font-bold text-center">
            Become a Member
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Become A Members
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Joining Combine requires a strong commitment to the company’s core
            values and operational excellence. It’s rewarding to be part of a
            team that shares common values and works towards a common goal.
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Registration Form Show
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-[#004080] text-white py-3 rounded-md hover:bg-[#003366] transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BecomeMemberPage;
