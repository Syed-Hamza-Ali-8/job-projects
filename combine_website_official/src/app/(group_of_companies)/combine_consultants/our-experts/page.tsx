"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import CombineConsultant from "../Combine-Consultant-navbar";

export default function OurExperts() {
  const [showPeople, setShowPeople] = useState(true);

  const teamMembers = [
    {
      name: "M. Amin Nathani",
      designation: "Chairman",
      image:
        "/Group-of-Companies/combine-consultants/our-experts/amin-nathani.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "M. Ashfaq Nathani",
      designation: "Vice Chairman",
      image:
        "/Group-of-Companies/combine-consultants/our-experts/ashfaq-nathani.png",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Saif",
      designation: "Joint Secretary",
      image: "/Group-of-Companies/combine-consultants/our-experts/saif.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Unknown",
      designation: "Finance Secretary",
      image:
        "/Group-of-Companies/combine-consultants/our-experts/dummy-profile.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPeople((prev) => !prev);
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CombineConsultant />
      <div className="min-h-screen bg-white text-gray-800">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/combine-consultant/experts-banner.jpg"
            alt="Experts Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-black">
            <h1 className="text-3xl sm:text-4xl font-bold">Our Experts</h1>
            <p className="text-sm sm:text-base mt-2 max-w-3xl mx-auto">
              We specialise in providing feasibility, research, business
              delegation, marketing, localisation, and accounting services to
              help organisations translate their conceptual ideas into reality.
            </p>
          </div>
        </div>

        {showPeople && (
          <section className="py-10 px-4 sm:px-10 md:px-20 lg:px-28 bg-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-xl transition"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={260}
                    height={260}
                    className="rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {member.designation}
                  </p>
                  <div className="flex space-x-4 text-gray-400 text-xl">
                    <Link
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="hover:text-[#1877f2] transition-colors duration-300" />
                    </Link>
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="hover:text-black transition-colors duration-300" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="hover:text-[#0077b5] transition-colors duration-300" />
                    </Link>
                    <Link
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="hover:text-[#e1306c] transition-colors duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
