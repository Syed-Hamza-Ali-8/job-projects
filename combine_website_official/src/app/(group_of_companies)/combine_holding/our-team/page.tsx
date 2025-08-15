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
import CombineHoldingnavbar from "../Combine-holding-Navbar";

const OurTeamPage = () => {
  const [showPeople, setShowPeople] = useState(true);

  const teamMembers = [
    {
      name: "M. Amin Nathani",
      designation: "Executive Director",
      image: "/Group-of-Companies/combine-holding/our-team/amin-nathani.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "M. Ashfaq Nathani",
      designation: "CEO",
      image: "/Group-of-Companies/combine-holding/our-team/ashfaq-nathani.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Ansab",
      designation: "Head Of Marketing & Business Development",
      image: "/Group-of-Companies/combine-holding/our-team/ansab.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Salman Faroqui",
      designation: "Global Business Head",
      image: "/Group-of-Companies/combine-holding/our-team/Salman-Faroqui.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Farrukh Ilyas",
      designation: "Head Of Finance",
      image: "/Group-of-Companies/combine-holding/our-team/farrukh-ilyas.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Abdul Majid",
      designation: "Sales Manager",
      image: "/Group-of-Companies/combine-holding/our-team/abdul-majid.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Kaab Jawaid",
      designation: "Manager Admin",
      image: "/Group-of-Companies/combine-holding/our-team/kaab-jawaid.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Saif",
      designation: "Finance Manager",
      image: "/Group-of-Companies/combine-holding/our-team/saif.jpg",
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
      <CombineHoldingnavbar />

      {/* Banner Section */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Group-of-Companies/zheijang-combine/our-team-banner.jpg"
          alt="Our Team Banner"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center text-center space-y-2 px-4">
          <p className="text-white text-sm sm:text-base font-medium tracking-wide">
            how we start this journey
          </p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat tracking-wide">
            Our Team
          </h1>
        </div>
      </section>

      {/* About Our Team Section */}
      <section className="bg-white py-14 px-4 sm:px-10 md:px-20 lg:px-28 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          <span className="text-blue-500">Combine Holding</span>
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          Meet the Team
        </h3>

        {/* Animated "people.innovation." text */}
        <div className="relative h-12 sm:h-14 md:h-16">
          <p
            className={`absolute inset-0 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-blue-500 transition-opacity duration-700 ${
              showPeople ? "opacity-100" : "opacity-0"
            }`}
          >
            people.
          </p>
          <p
            className={`absolute inset-0 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-blue-500 transition-opacity duration-700 ${
              showPeople ? "opacity-0" : "opacity-100"
            }`}
          >
            innovation.
          </p>
        </div>
      </section>

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
              <p className="text-sm text-gray-500 mb-4">{member.designation}</p>
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
    </>
  );
};

export default OurTeamPage;
