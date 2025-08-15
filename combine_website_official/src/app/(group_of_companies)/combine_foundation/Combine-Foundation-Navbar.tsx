"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi"; // ✅ cart icon

const CombineFoundationNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative w-full bg-[#f0f3ff] py-4 px-4 md:px-8 lg:px-16 shadow-sm font-montserrat flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center z-20">
        <Image
          src="/Group-of-Companies/combine-foundation/combine-foundation-logo.png"
          alt="Combine Logo"
          width={100}
          height={100}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
      </div>

      {/* Nav Links (Desktop) */}
      <ul className="hidden md:flex gap-4 lg:gap-8 text-[13px] sm:text-[14px] md:text-[15px] font-semibold items-center justify-center text-center">
        <li>
          <Link href="/" className="hover:text-[#003a7b] transition">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/combine_foundation/initiatives"
            className="hover:text-[#003a7b] transition"
          >
            Initiatives
          </Link>
        </li>
        <li>
          <Link
            href="/combine_foundation/we-devote"
            className="hover:text-[#003a7b] transition"
          >
            We Devote
          </Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-[#003a7b] transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Right: Donate Button, Cart, Hamburger */}
      <div className="flex items-center gap-4 z-20">
        {/* Donate Now Button */}
        <Link
          href="/combine_foundation/donate"
          className="px-4 py-2 bg-[#003a7b] text-white rounded hover:bg-blue-800 transition text-sm font-semibold"
        >
          Donate Now
        </Link>

        {/* Cart Icon */}
        <Link
          href="/Cart"
          className="text-2xl text-[#003a7b] hover:text-blue-800 transition"
        >
          <FiShoppingCart />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-2xl text-[#003a7b]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
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
                href="/combine_foundation/initiatives"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Initiatives
              </Link>
            </li>
            <li>
              <Link
                href="/combine_foundation/we-devote"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                We Devote
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
    </nav>
  );
};

export default CombineFoundationNavbar;
