"use client";
import React from "react";
import { MapPin, Phone, Smartphone, Mail, Building2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f9f9ff] text-gray-800">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] bg-[url('/ContactPage/contact-us.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0" />
          <h1 className="z-10 text-4xl md:text-6xl text-white font-extrabold font-[Montserrat] drop-shadow-lg">
            CONTACT US
          </h1>
          <p className="z-10 mt-4 text-white text-lg md:text-2xl font-light max-w-3xl px-4">
            Drop us an email or call if you have any query, opinion or
            suggestion which can make the world a better place.
          </p>
        </section>

        {/* Locations Section */}
        <section className="relative z-10 px-6 md:px-20 py-16 bg-[#f3f5ff]">
          <h2 className="relative text-center text-blue-600 font-semibold tracking-wider text-sm mb-1">
            FIND US
          </h2>
          <h3 className="relative text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Office Locations
          </h3>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pakistan Office */}
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">Pakistan</h4>
              <p className="flex items-start gap-2">
                <MapPin className="text-blue-700 mt-1" size={18} />B - 18 Block
                16, Gulshan-e-Iqbal, Karachi.
              </p>
              <p className="flex items-start gap-2">
                <Phone className="text-blue-700 mt-1" size={18} />
                +92 21 34801551-52
              </p>
              <p className="flex items-start gap-2">
                <Smartphone className="text-blue-700 mt-1" size={18} />
                +92 319 3372277
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="text-blue-700 mt-1" size={18} />
                Office 301, 3rd Floor On Plot No. 13-C, Zamzama Lane No.4,
                Zamzama Commercial Karachi
              </p>
              <p className="flex items-start gap-2">
                <Building2 className="text-blue-700 mt-1" size={18} />
                Plot: 9,10,11&21 Sector E-V, Phase II, K.E.P.Z Karachi
              </p>
            </div>

            {/* China Office */}
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">CHINA</h4>
              <p className="flex items-start gap-2">
                <MapPin className="text-blue-700 mt-1" size={18} />
                Room1101, TianMa commercial building, Keqiao district, Shaoxing,
                Zhejiang, China
              </p>
              <p className="flex items-start gap-2">
                <Mail className="text-blue-700 mt-1" size={18} />
                Postal Code: 312030
              </p>
              <p className="flex items-start gap-2">
                <Building2 className="text-blue-700 mt-1" size={18} />
                浙江绍兴柯桥区柯桥街道天马商务大厦1101室
              </p>
              <p className="flex items-start gap-2">
                <Phone className="text-blue-700 mt-1" size={18} />
                +138 675 72220
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-6 md:px-20 py-16 bg-[#eceeff]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left image + text */}
            <div className="relative w-full h-full">
              <Image
                src="/ContactPage/contact-image.png"
                alt="Contact visual"
                fill
                className="object-cover rounded-md shadow-md"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-6">
                <h2 className="text-4xl md:text-5xl font-extrabold">
                  Let us know what we can do for you!
                </h2>
                <p className="mt-4 text-lg font-light">
                  A good query can change your future
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white p-6 md:p-10 rounded-lg shadow-md space-y-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Phone No.
                </label>
                <input
                  type="tel"
                  placeholder="Phone No."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="bg-[#003366] text-white px-6 py-2 rounded-md hover:bg-[#002244] transition duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
