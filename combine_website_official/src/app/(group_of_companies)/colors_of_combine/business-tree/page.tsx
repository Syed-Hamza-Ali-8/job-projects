"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

import ColorsOfCombine from "../Colors-of-Combine-Navbar";
import Image from "next/image";
import Link from "next/link";

const BusinessTree = () => {
  const [showPeople, setShowPeople] = useState(true);

  const teamMembers = [
    {
      name: "M. Amin Nathani",
      designation: "Chairman & CEO",
      image:
        "/Group-of-Companies/colors-of-combine/business-tree/amin-nathani.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "M. Ansab Nathani",
      designation: "Co-Founder",
      image: "/Group-of-Companies/colors-of-combine/business-tree/ansab.png",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Saif",
      designation: "Joint Secretary",
      image:
        "/Group-of-Companies/colors-of-combine/business-tree/dummy-profile.jpg",
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
      <ColorsOfCombine />
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
            <h1 className="text-3xl sm:text-4xl font-bold">Business Tree</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="relative w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Group-of-Companies/colors-of-combine/business-tree/business-tree-img.jpg" // replace with your image
              alt="Business Tree"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Business Tree
            </h2>
            <p className="text-gray-600 mb-6">
              We offer a versatile facility for rent and events, catering to
              agriculture, biogas, and farming. Our focus on proper nutrition,
              strategic planning, and meticulous care ensures optimal growth.
              Our state-of-the-art amenities and experienced professionals
              provide a seamless experience.
            </p>
            <button className="bg-green-400 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center w-fit transition-colors cursor-pointer">
              Contact
              <span className="ml-2">&gt;</span>
            </button>
          </div>
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
    </>
  );
};

export default BusinessTree;
