"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const CombineHoldingnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`relative w-full bg-[#f0f3ff] shadow-sm font-montserrat transition-all duration-300 ${
        isOpen ? "pb-4 md:pb-0" : "pb-0"
      }`}
    >
      {/* Top row: Logo + Hamburger + Desktop Links */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center z-20">
          <Image
            src="/Group-of-Companies/combine-holding/our-team/combine-holding-logo.png"
            alt="Combine Logo"
            width={100}
            height={100}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        {/* Hamburger Menu (mobile) */}
        <button
          className="md:hidden z-20 text-2xl text-[#003a7b]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-4 lg:gap-8 text-[13px] sm:text-[14px] md:text-[15px] font-semibold items-center justify-center text-center">
          <li>
            <Link href="/" className="hover:text-[#003a7b] transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/combine_holding/our-team"
              className="hover:text-[#003a7b] transition"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              href="/combine_holding/products"
              className="text-[#003a7b] hover:text-[#003a7b] transition"
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-[#003a7b] transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col md:hidden items-center gap-4 px-4 pb-4 transition-all duration-300 text-sm font-semibold">
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
              href="/combine_holding/our-team"
              className="hover:text-[#003a7b] transition"
              onClick={toggleMenu}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              href="/combine_holding/products"
              className="text-[#003a7b] hover:text-[#003a7b] transition"
              onClick={toggleMenu}
            >
              Products
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
      )}
    </nav>
  );
};

export default CombineHoldingnavbar;
