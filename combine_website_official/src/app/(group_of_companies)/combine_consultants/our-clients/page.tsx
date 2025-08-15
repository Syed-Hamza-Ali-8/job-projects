"use client";
import Image from "next/image";
import CombineConsultant from "../Combine-Consultant-navbar";

export default function OurClients() {
  return (
    <>
      <CombineConsultant />
      <div className="bg-white text-gray-800">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/combine-consultant/our-clients-banner.jpg" // Replace with actual image path
            alt="Our Clients Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-black">
            <h1 className="text-3xl sm:text-4xl font-bold">Clients</h1>
            <p className="text-sm sm:text-base mt-2 max-w-3xl mx-auto">
              We specialise in providing feasibility, research, business
              delegation, marketing, localisation, and accounting services to
              help organisations translate their conceptual ideas into reality.
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-4">
            Our Clients
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Coming Soon</p>
        </div>
      </div>
    </>
  );
}
