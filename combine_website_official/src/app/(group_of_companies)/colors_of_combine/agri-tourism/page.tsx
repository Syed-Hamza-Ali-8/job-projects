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
import ColorsOfCombineNavbar from "../Colors-of-Combine-Navbar";

const AgriTourismEvent = () => {
  const [showPeople, setShowPeople] = useState(true);

  const teamMembers = [
    {
      name: "Shehzad Basra",
      designation: "Heros Of Agri Tourism",
      image:
        "/Group-of-Companies/colors-of-combine/agri-tourism-event/shahzad-basra.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Tariq Tanveer",
      designation: "Heros Of Agri Tourism",
      image:
        "/Group-of-Companies/colors-of-combine/agri-tourism-event/tariq-tanveer.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Babar Raja",
      designation: "Heros Of Agri Tourism",
      image:
        "/Group-of-Companies/colors-of-combine/agri-tourism-event/babar-raja.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Sajid Sindu",
      designation: "Heros Of Agri Tourism",
      image:
        "/Group-of-Companies/colors-of-combine/agri-tourism-event/sajid-sandhu.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Jawaid Iqbal",
      designation: "Heros Of Agri Tourism",
      image:
        "/Group-of-Companies/colors-of-combine/agri-tourism-event/javed-iqbal.jpg",
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
      <ColorsOfCombineNavbar />
      <div className="bg-white text-gray-800">
        {/* Banner Section */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/colors-of-combine/colors-of-combine-banner.jpg"
            alt="Feedback Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-white">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Agri Tourism Events
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Agri Tourism Events
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our organization specializes in agro-tourism activities, including
            farm tours, stays, and workshops, which are intended to familiarize
            tourists with rural and agricultural culture. Our farmers produce
            value-added products, such as vegetables, fruits, gardening plants,
            and dairy, that provide a unique and enriching experience for our
            guests. Our trips are customized to cater to specific interests and
            promote sustainable tourism practices. We encourage interested
            parties to contact us to learn more about this activity, which is
            aimed at offering enjoyment, education, and agribusiness expertise
            and practices to the public.
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
    </>
  );
};

export default AgriTourismEvent;
