"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const CombineConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative w-full bg-[#f0f3ff] py-4 px-4 md:px-8 lg:px-16 shadow-sm font-montserrat flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center z-20">
        <Image
          src="/Group-of-Companies/combine-consultants/Combine-Consultants-logo.png"
          alt="Combine Logo"
          width={200}
          height={200}
          className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] object-contain"
        />
      </div>

      {/* Hamburger Menu Icon (visible on small screens) */}
      <button
        className="md:hidden z-20 text-2xl text-[#003a7b]"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Nav Links (Desktop) */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-4 lg:gap-8 text-[13px] sm:text-[14px] md:text-[15px] font-semibold items-center justify-center text-center">
        <li>
          <Link href="/" className="hover:text-[#003a7b] transition">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/combine_consultants/our-experts"
            className="hover:text-[#003a7b] transition"
          >
            Our Experts
          </Link>
        </li>
        <li>
          <Link
            href="/combine_consultants/key-services"
            className="hover:text-[#003a7b] transition"
          >
            Key Services
          </Link>
        </li>
        <li>
          <Link
            href="/combine_consultants/our-clients"
            className="text-[#003a7b] hover:text-[#003a7b] transition"
          >
            Our Clients
          </Link>
        </li>
        <li>
          <Link
            href="/combine_consultants/feedback"
            className="hover:text-[#003a7b] transition"
          >
            Feedback
          </Link>
        </li>
        <li>
          <Link
            href="/combine_consultants/careers"
            className="hover:text-[#003a7b] transition"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-[#003a7b] transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#f0f3ff] shadow-md md:hidden z-10">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm font-semibold">
            <li>
              <Link
                href="/"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/combine_consultants/our-experts"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Our Experts
              </Link>
            </li>
            <li>
              <Link
                href="/combine_consultants/key-services"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Key Services
              </Link>
            </li>
            <li>
              <Link
                href="/combine_consultants/our-clients"
                className="text-[#003a7b] hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Our Clients
              </Link>
            </li>
            <li>
              <Link
                href="/combine_consultants/feedback"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/combine_consultants/careers"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Invisible div for spacing */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"></div>
    </nav>
  );
};

export default CombineConsultant;
