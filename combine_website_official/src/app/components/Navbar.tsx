"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const companies = [
  {
    name: "Zheijang Combine",
    pages: ["Our Team", "Products", "How it Works", "Event Gallery"],
  },
  { name: "Combine Holding", pages: ["Our Team", "Products"] },
  { name: "Combine Plastic", pages: ["Our Team", "Products", "Event Gallery"] },
  {
    name: "Pakistan Supply Chain",
    pages: [
      "Our Purpose",
      "Pavilion Members",
      "Showcase Partners",
      "Event Gallery",
      "Become a Member",
    ],
  },
  {
    name: "Combine Consultants",
    pages: [
      "Our Experts",
      "Key Services",
      "Our Clients",
      "Feedback",
      "Careers",
    ],
  },
  {
    name: "Colors of Combine",
    pages: ["Business Tree", "Agri Tourism Events", "Visit Us", "Feedback"],
  },
  { name: "Combine Foundation", pages: ["Initiatives", "We Devote"] },
  {
    name: "Blue Sky",
    pages: [
      "Managements",
      "Company Overview",
      "Lending Products",
      "Apply for loan",
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<number | null>(
    null
  );

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const pathname = usePathname();

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
        setHoveredCompany(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
    setHoveredCompany(null);
    setOpenMobileSubMenu(null);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="bg-[#f1f5ff] shadow-md px-6 md:px-10 lg:px-16 py-4 md:py-6 flex items-center justify-between flex-wrap font-montserrat text-[#2E3237]">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image
          src="/combine-group-new-logo.png"
          alt="Combine Group"
          width={180}
          height={140}
          className="w-auto h-24 md:h-32"
          priority
        />
      </div>

      {/* Hamburger */}
      <div className="lg:hidden">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowDropdown(false);
          }}
          className="text-[#2E3237] text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Nav Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center lg:flex-row lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 xl:space-x-10 font-semibold text-sm md:text-base w-full lg:w-auto mt-4 lg:mt-0 z-50`}
      >
        <li>
          <Link href="/" className="hover:text-[#003366]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-[#003366]">
            About Us
          </Link>
        </li>

        {/* Group of Companies */}
        <li
          className="relative"
          ref={dropdownRef}
          onMouseEnter={() => {
            if (!isMobile) {
              clearTimeout(timeoutRef.current!);
              setShowDropdown(true);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              timeoutRef.current = setTimeout(() => {
                setShowDropdown(false);
                setHoveredCompany(null);
              }, 500);
            }
          }}
        >
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-[#003366]"
            onClick={() => isMobile && setShowDropdown((prev) => !prev)}
          >
            Group of Companies ▾
          </div>

          {/* Dropdown */}
          <ul
            className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-64 z-50 transition-all duration-200 ${
              showDropdown
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {companies.map((company, idx) => (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => !isMobile && setHoveredCompany(idx)}
                onMouseLeave={() => !isMobile && setHoveredCompany(null)}
              >
                <div className="flex justify-between items-center px-4 py-2 text-sm text-[#2E3237] hover:bg-[#003366] hover:text-white">
                  {/* Company name as link */}
                  <Link
                    href={`/${company.name.toLowerCase().replace(/\s+/g, "_")}`}
                    className="flex-1"
                  >
                    {company.name}
                  </Link>

                  {/* Chevron for mobile expand */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenMobileSubMenu(
                        openMobileSubMenu === idx ? null : idx
                      );
                    }}
                    className="ml-2"
                  >
                    <FaChevronRight className="text-xs" />
                  </button>
                </div>

                {/* Desktop subpages */}
                {!isMobile && hoveredCompany === idx && (
                  <ul className="absolute top-0 left-full ml-1 w-48 bg-white shadow-lg rounded-md z-50">
                    {company.pages.map((page, pageIdx) => (
                      <li key={pageIdx}>
                        <Link
                          href={`/${company.name
                            .toLowerCase()
                            .replace(/\s+/g, "_")}/${page
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-[#2E3237] hover:bg-[#003366] hover:text-white"
                        >
                          {page}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mobile subpages */}
                {isMobile && openMobileSubMenu === idx && (
                  <ul className="ml-4 bg-[#f9f9f9] border-l border-gray-300">
                    {company.pages.map((page, pageIdx) => (
                      <li key={pageIdx}>
                        <Link
                          href={`/${company.name
                            .toLowerCase()
                            .replace(/\s+/g, "_")}/${page
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-[#2E3237] hover:bg-[#003366] hover:text-white"
                        >
                          {page}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </li>

        <li>
          <Link href="/Group-Events" className="hover:text-[#003366]">
            Group Events
          </Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-[#003366]">
            Contact Us
          </Link>
        </li>

        {/* Mobile Social */}
        <div className="flex space-x-3 pt-2 lg:hidden">
          <Link
            href="https://www.facebook.com/CombineGroup"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-[#003366] text-white"
          >
            <FaFacebookF size={18} className="group-hover:text-[#1877f2]" />
          </Link>
          <Link
            href="https://www.instagram.com/colorsofcombine/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-[#003366] text-white"
          >
            <FaInstagram size={18} className="group-hover:text-[#E1306C]" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/combinegroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-[#003366] text-white"
          >
            <FaLinkedinIn size={18} className="group-hover:text-[#0A66C2]" />
          </Link>
        </div>
      </ul>

      {/* Desktop Social */}
      <div className="hidden lg:flex items-center space-x-2 md:space-x-3 mt-4 lg:mt-0">
        <Link
          href="https://www.facebook.com/CombineGroup"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-2.5 rounded-full bg-[#003366] text-white"
        >
          <FaFacebookF size={18} className="group-hover:text-[#1877f2]" />
        </Link>
        <Link
          href="https://www.instagram.com/colorsofcombine/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-2.5 rounded-full bg-[#003366] text-white"
        >
          <FaInstagram size={18} className="group-hover:text-[#E1306C]" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/combinegroup/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-2.5 rounded-full bg-[#003366] text-white"
        >
          <FaLinkedinIn size={18} className="group-hover:text-[#0A66C2]" />
        </Link>
      </div>
    </nav>
  );
}
