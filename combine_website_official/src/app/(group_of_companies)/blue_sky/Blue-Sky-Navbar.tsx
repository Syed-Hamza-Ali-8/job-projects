"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const BlueSkyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative w-full bg-[#f0f3ff] py-2 px-4 md:px-6 lg:px-10 shadow-sm font-montserrat flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center z-20">
        <Image
          src="/Group-of-Companies/blue-sky/bluesky-logo.png"
          alt="Combine Logo"
          width={100}
          height={100}
          className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] object-contain"
        />
      </div>

      {/* Hamburger Menu Icon (visible on small screens) */}
      <button
        className="md:hidden z-20 text-xl text-[#003a7b]"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Nav Links (Desktop) */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-2 lg:gap-4 text-[11px] sm:text-[12px] md:text-[14.5px] font-medium items-center justify-center text-center">
        <li>
          <Link href="/" className="hover:text-[#003a7b] transition">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blue_sky/managements"
            className="hover:text-[#003a7b] transition"
          >
            Managements
          </Link>
        </li>
        <li>
          <Link
            href="/blue_sky/company-overview"
            className="hover:text-[#003a7b] transition"
          >
            Company Overview
          </Link>
        </li>
        <li>
          <Link
            href="/blue_sky/lending-products"
            className="text-[#003a7b] hover:text-[#003a7b] transition"
          >
            Lending Products
          </Link>
        </li>
        <li>
          <Link
            href="/blue_sky/apply-for-loan"
            className="hover:text-[#003a7b] transition"
          >
            Apply for loan
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
          <ul className="flex flex-col items-center gap-2 py-3 text-[14px] font-medium">
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
                href="/blue_sky/managements"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Managements
              </Link>
            </li>
            <li>
              <Link
                href="/blue_sky/company-overview"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Company Overview
              </Link>
            </li>
            <li>
              <Link
                href="/blue_sky/lending-products"
                className="text-[#003a7b] hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Lending Products
              </Link>
            </li>
            <li>
              <Link
                href="/blue_sky/apply-for-loan"
                className="hover:text-[#003a7b] transition"
                onClick={toggleMenu}
              >
                Apply for loan
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
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"></div>
    </nav>
  );
};

export default BlueSkyNavbar;
