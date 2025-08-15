"use client";
import Image from "next/image";
import CombineConsultant from "../Combine-Consultant-navbar";
import Link from "next/link";

export default function Career() {
  return (
    <>
      <CombineConsultant />
      <div className="bg-white text-gray-800">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/combine-consultant/career-banner.jpg"
            alt="Careers Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-black">
            <h1 className="text-3xl sm:text-4xl font-bold">Careers</h1>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              Joining Combine requires a strong commitment to the company&apos;s
              core values and operational excellence. It&apos;s rewarding to be
              part of a team that shares common values and works towards a
              common goal.
            </p>
          </div>
        </div>

        {/* Career Content Section */}
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold bg-[#DAA520] mb-6">
            COMBINE CONSULTANTS CAREERS
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Joining Combine requires a strong commitment to the company&apos;s
            core values and operational excellence. It&apos;s rewarding to be
            part of a team that shares common values and works towards a common
            goal.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Our organization prides itself on a robust business culture that is
            grounded in our founding principles of safety, mutual respect, a
            pioneering spirit, unity, and a performance-driven mindset. We are
            committed to investing in the potential of each employee,
            recognizing their role as the catalysts behind our growth and the
            ambassadors of our aspirations worldwide.
          </p>

          {/* Contact Now Button */}
          <Link
            href="/Contact"
            className="bg-[#DAA520]  text-white font-semibold py-2 px-6 rounded transition duration-300 cursor-pointer"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </>
  );
}
