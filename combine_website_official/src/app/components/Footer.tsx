'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7 }} 
      className="bg-black text-white px-6 py-10 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/combine-footer-image.png"
            alt="Combine Logo"
            width={96}
            height={0}
            className="h-auto"
          />
        </div>

        {/* Socials with brand hover colors */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="#"
            className="group p-2 rounded-full bg-[#003366] text-white hover:text-[#1877f2] transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="group p-2 rounded-full bg-[#003366] text-white hover:text-[#E1306C] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="group p-2 rounded-full bg-[#003366] text-white hover:text-[#0A66C2] transition-colors"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm space-y-2 text-gray-300">
          <p>+92 21 34801551-52</p>
          <p>
            Plot: 9, 10, 11 & 21 Sector E-V, Phase II, <br />
            K.E.P.Z Karachi
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6" />

      <div className="text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© Combine Group Pvt. Ltd. - {new Date().getFullYear()}</p>
        <p>Maintained by WebnHostBIZ</p>
      </div>

      {/* Scroll to top button */}
      <a 
        href="#top" 
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-900 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        ↑
      </a>
    </motion.footer>
  );
}
