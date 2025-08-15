"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const ColorsOfCombine = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative w-full bg-[#f0f3ff] py-4 px-4 md:px-8 lg:px-16 shadow-sm font-montserrat flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center z-20">
        <Image
          src="/Group-of-Companies/colors-of-combine/colors-of-combine-logo.png"
          alt="Combine Logo"
          width={120} // smaller internal size
          height={120}
          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] object-contain"
          quality={100} // force highest quality
          priority
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
            href="/colors_of_combine/business-tree"
            className="hover:text-[#003a7b] transition"
          >
            Business Tree
          </Link>
        </li>
        <li>
          <Link
            href="/colors_of_combine/agri-tourism"
            className="hover:text-[#003a7b] transition"
          >
            Agri Tourism Events
          </Link>
        </li>
        <li>
          <Link
            href="/colors_of_combine/visit-us"
            className="text-[#003a7b] hover:text-[#003a7b] transition"
          >
            Visit Us
          </Link>
        </li>
        <li>
          <Link
            href="/colors_of_combine/feedback"
            className="hover:text-[#003a7b] transition"
          >
            Feedback
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
        <div className="w-full bg-[#f0f3ff] shadow-md md:hidden z-10">
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
                href="/colors_of_combine/business-tree"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Business Tree
              </Link>
            </li>
            <li>
              <Link
                href="/colors_of_combine/agri-tourism"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Agri Tourism Events
              </Link>
            </li>
            <li>
              <Link
                href="/colors_of_combine/visit-us"
                className="text-[#003a7b] hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Visit Us
              </Link>
            </li>
            <li>
              <Link
                href="/colors_of_combine/feedback"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Feedback
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

export default ColorsOfCombine;
