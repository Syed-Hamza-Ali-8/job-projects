"use client";

import Link from "next/link";
import CombinePlasticnavbar from "./Combine-Plastic-Navbar";
import Image from "next/image";
import { FaRecycle, FaTruck, FaIndustry } from "react-icons/fa";
import { motion } from "framer-motion";

const CombinePlastic = () => {
  return (
    <>
      <CombinePlasticnavbar />

      {/* Banner */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gray-900 flex items-center justify-center overflow-hidden font-montserrat">
        <Image
          src="/Group-of-Companies/combine-plastic/combine-plastic-banner.png"
          alt="Combine Plastic Banner"
          fill
          className="object-cover opacity-60"
          priority
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-white mb-4">
            Combine Plastic
          </h1>
          <p className="text-sm sm:text-5xl md:text-5xl font-bold text-white mb-2">
            Combine Plastic & Engineering
          </p>
          <br />
          <p className="text-xs sm:text-2xl md:text-2xl font-bold text-white mb-6">
            Our professional team works to increase productivity and cost
            effectiveness on the market
          </p>
          <Link
            href="/Contact"
            className="inline-block bg-[#024082] hover:bg-white hover:text-[#024082] transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Two-column Section */}
      <section className="bg-[#2B3F49] max-w-8xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 font-montserrat">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Reliable Engineering Takes Many Forms
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
            Our Combined Experience
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center text-gray-200 text-sm sm:text-xl md:text-lg"
        >
          <p className="mb-4">
            More than two decades, Combine Plastic and Engineering started as a
            small structured family-owned enterprise and today it has
            established as the most renowned, reputed and reliable partner of
            the plastic recycling machinery manufacturing industry in Pakistan.
          </p>
          <p>
            C.P.E has won its customers continued trust by always providing them
            with a perfect solution to their specific requirements, and this has
            helped C.P.E to emerge as a market leader.
          </p>
        </motion.div>
      </section>

      {/* Image Grid Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 font-montserrat">
        <div className="-mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/Group-of-Companies/combine-plastic/project-img-5.jpg",
            "/Group-of-Companies/combine-plastic/project-img-3.jpg",
            "/Group-of-Companies/combine-plastic/project-img-1.jpg",
            "/Group-of-Companies/combine-plastic/project-img-2.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt={`Image ${i + 1}`}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-8 font-montserrat">
        {[
          {
            icon: <FaRecycle className="text-[#024082] w-12 h-12 mb-4" />,
            title: "Recycling",
            desc: "Plastic recycling is a process that aims to convert waste plastic materials into reusable raw materials.",
          },
          {
            icon: <FaTruck className="text-[#024082] w-12 h-12 mb-4" />,
            title: "Trading",
            desc: "Combine group is exploring new venues of trade i.e. Textile products, Agricultural produce, Plastic products.",
          },
          {
            icon: <FaIndustry className="text-[#024082] w-12 h-12 mb-4" />,
            title: "Manufacturing",
            desc: "Plastic recycling machines are tailor made to get result of crushed waste to recycle P.P, P.E, A.B.S & P.S etc.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center p-6 border-2 border-[#024082] rounded-lg hover:shadow-lg transition"
          >
            {service.icon}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-8xl mx-auto px-4 py-16 md:py-24 font-montserrat">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-start h-full bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Our Mission
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              CPE provides complete machinery solutions, from design and
              manufacturing to installation and after-sales support by our
              technical team. Our mission is to deliver quality and expedite our
              customers’ success through comprehensive solutions and exceptional
              service.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-start h-full bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Our Vision
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Become the hub for a sustainable plastic future. Seamlessly
              connecting recycling, trading, and innovative manufacturing
              through engineering. Empowering change, one click at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customers Trust Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden font-montserrat">
        <Image
          src="/Group-of-Companies/combine-plastic/contact-us.png"
          alt="Customers Trust"
          fill
          className="object-cover opacity-70"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 text-center px-6 max-w-4xl text-white"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            All of Our Customers Trust <br /> Their Success To Us
          </h2>
          <p className="text-sm sm:text-lg md:text-xl mb-6">
            C.P.E has won its customers continued trust by always providing them
            with a perfect solution to their specific requirements, and this has
            helped C.P.E to emerge as a market leader.
          </p>
          <Link
            href="/Contact"
            className="inline-block bg-[#024082] hover:bg-white hover:text-[#024082] transition-colors text-white font-semibold py-3 px-8 rounded-lg shadow-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default CombinePlastic;
