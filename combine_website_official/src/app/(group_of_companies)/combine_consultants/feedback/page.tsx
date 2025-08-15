"use client";
import Image from "next/image";
import CombineConsultant from "../Combine-Consultant-navbar";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si"; // 'X' (Twitter rebrand)

export default function Feedback() {
  return (
    <>
      <CombineConsultant />
      <div className="bg-white text-gray-800">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/combine-consultant/feedback-banner.jpg"
            alt="Feedback Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-black">
            <h1 className="text-3xl sm:text-4xl font-bold">Feedback</h1>
            <p className="text-sm sm:text-base mt-2 max-w-3xl mx-auto">
              We specialize in providing feasibility, research, business
              delegation, marketing, localization, and accounting services to
              help organizations translate their conceptual ideas into reality.
            </p>
          </div>
        </div>

        {/* Contact / Feedback Section */}
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              Thank you for your interest. Please fill out the form below lorem
              ipsum dolor sit amet consectetur adipisicing.
            </p>
            <hr className="border-gray-400 mb-6 w-3/4" />

            <div>
              <h3 className="text-yellow-600 font-medium mb-2">Follow Us</h3>
              <div className="flex space-x-4 text-xl">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="bg-black text-white p-2 rounded-full hover:opacity-90 transition"
                >
                  <SiX />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="bg-[#FF0000] text-white p-2 rounded-full hover:opacity-90 transition"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-400 px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-400 px-4 py-2 rounded"
              required
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full border border-gray-400 px-4 py-2 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-900 hover:bg-teal-800 text-white py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
