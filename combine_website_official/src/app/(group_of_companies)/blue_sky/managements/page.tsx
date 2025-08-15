"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import BlueSkyNavbar from "../Blue-Sky-Navbar";
import { useEffect, useState } from "react";
// import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Managements = () => {
  const [showText, setShowText] = useState(true);
  const [showPeople, setShowPeople] = useState(true);

  const teamMembers = [
    {
      name: "M. Amin Nathani",
      designation: "Chairman & CEO",
      image: "/Group-of-Companies/blue-sky/managements/amin-nathani.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Ashfaq Nathani",
      designation: "Director & COO",
      image: "/Group-of-Companies/blue-sky/managements/ashfaq-nathani.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "SM Arshad",
      designation: "Independent Director",
      image: "/Group-of-Companies/blue-sky/managements/sm-arshad.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Ryan Chen",
      designation: "Chief Teachnical Officer(CTO)",
      image: "/Group-of-Companies/blue-sky/managements/dummy-profile.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
    {
      name: "Farooq",
      designation: "Director",
      image: "/Group-of-Companies/blue-sky/managements/dummy-profile.jpg",
      facebook: "https://facebook.com/amin",
      twitter: "https://x.com/amin",
      linkedin: "https://linkedin.com/in/amin",
      instagram: "https://instagram.com/amin",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPeople((prev) => !prev);
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BlueSkyNavbar />
      <div className="bg-white text-gray-800 font-montserrat">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/blue-sky/managements/management-banner.webp"
            alt="Feedback Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-white">
            <h1 className="text-4xl sm:text-6xl font-bold">Management</h1>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start justify-center text-left">
            <h2 className="text-5xl font-bold leading-tight">
              <span className="text-black">About Our</span>
              <br />
              <div className="relative h-12 sm:h-14 md:h-16">
                <p
                  className={`absolute inset-0 text-5xl sm:text-6xl md:text-6xl font-semibold tracking-wide text-[#E94743] transition-opacity duration-700 ${
                    showText ? "opacity-100" : "opacity-0"
                  }`}
                >
                  people.
                </p>
                <p
                  className={`absolute inset-0 text-5xl sm:text-3xl md:text-6xl font-semibold tracking-wide text-[#E94743] transition-opacity duration-700 ${
                    showText ? "opacity-0" : "opacity-100"
                  }`}
                >
                  innovation.
                </p>
              </div>
            </h2>
            <div className="flex gap-5 mt-6 text-[#E94743] text-2xl">
              <a href="#" className="hover:scale-110 transition-transform">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaTwitter />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Middle Column (Image) */}
          <div className="flex justify-center">
            <Image
              src="/Group-of-Companies/blue-sky/managements/management-page-img.png"
              alt="Our People"
              width={420}
              height={520}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-4">Our Company</h3>
            <p className="text-gray-600 mb-6">
              To be the Next Generation of Financial Services & build new forms
              of Relationships for Pakistani Consumers & Commercial customers.
            </p>
            <button className="bg-[#E94743] text-white px-5 py-2 rounded cursor-pointer hover:bg-red-600 transition">
              Join Us
            </button>
          </div>
        </div>

        {/* New Section */}
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">We Are Growing Fast</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Blue Sky Financial Services has presented its revenue generation
            strategy covering sources of revenue, growth drivers, and
            profitability tactics lending services, and collaborating with
            businesses to reach end-users.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-[#F8F9FA] py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#E94743]">10,000+</h3>
              <p className="text-black font-bold text-lg">Members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#E94743]">345,000</h3>
              <p className="text-black font-bold text-lg">App Installs</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#E94743]">223</h3>
              <p className="text-black font-bold text-lg">Brands</p>
            </div>
          </div>
        </div>

        <section className="py-10 px-4 sm:px-10 md:px-20 lg:px-28 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-xl transition"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
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

        {/* Reviews Section */}
        <section className="bg-white py-12 px-4 sm:px-10 md:px-20 lg:px-28">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Reviews From Popular Media Says...
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              Praesent feugiat eleifend nisi quis scelerisque. Aliquam sit amet
              viverra ligula. Ut sed commodo velit. Vivamus venenatis bibendum
              ante at luctus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tech Crunch */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Tech Crunch</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Praesent feugiat eleifend nisi quis scelerisque. Aliquam sit
                amet viverra ligula. Ut sed commodo velit. Vivamus venenatis
                bibendum ante at luctus.
              </p>
            </div>

            {/* Hacker News */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Hacker News</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Praesent feugiat eleifend nisi quis scelerisque. Aliquam sit
                amet viverra ligula. Ut sed commodo velit. Vivamus venenatis
                bibendum ante at luctus.
              </p>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="relative bg-[#fcd4d2] py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Phone Image */}
            <div className="flex justify-center">
              <Image
                src="/Group-of-Companies/blue-sky/managements/mobile-mockup-shadow.png"
                alt="Phone App"
                width={250}
                height={500}
                className="object-contain max-h-[500px] sm:max-h-[550px] md:max-h-[600px] w-auto"
              />
            </div>

            {/* Text + Subscribe */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Product Updates & Sneak Peeks
              </h2>
              <p className="text-gray-700 mb-6">
                Stay in the loop with exclusive product updates and sneak peeks.
                Be the first to know, subscribe now!
              </p>
              <form className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:border-red-400"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Managements;
