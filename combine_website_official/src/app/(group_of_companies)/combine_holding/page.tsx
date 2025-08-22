"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import CombineHoldingnavbar from "./Combine-holding-Navbar";
import { motion, Variants } from "framer-motion";

/**
 * Motion variants typed as Variants to avoid TS/ESLint complaints.
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function CombineHolding() {
  return (
    <>
      <CombineHoldingnavbar />

      {/* Banner */}
      <motion.section
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gray-900 flex items-center justify-center overflow-hidden font-montserrat"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <Image
          src="/Group-of-Companies/combine-holding/combine-holding-banner.png"
          alt="Combine Holding Banner"
          fill
          className="object-cover opacity-60"
          priority
        />

        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          variants={fadeIn}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Combine Holding
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-5xl sm:font-bold md:text-5xl md:font-bold text-white mb-2"
          >
            Exporter of Plastic Recycling Machineries & Recycled Granules
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-xs sm:text-2xl sm:font-bold md:text-lg text-white mb-6"
          >
            Based on state-of-the-art technology currently used in the developed
            countries
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              href="/Contact"
              className="inline-block bg-[#024082] hover:bg-white hover:text-[#024082] transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ABOUT Section */}
      <motion.section
        className="bg-[#f8f8f8] py-16 font-montserrat"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center max-w-6xl">
          {/* Left Image */}
          <motion.div className="relative h-[350px]" variants={fadeInUp}>
            <Image
              src="/Group-of-Companies/combine-holding/combine-holding-office.png"
              alt="Plastic Extrusion Machinery"
              fill
              className="object-cover rounded-md shadow-lg"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-black text-3xl font-bold mb-4 relative inline-block">
              ABOUT
            </h2>
            <p className="text-lg font-semibold md:text-base mb-4 sm:text-xl sm:font-bold">
              You Can Find All Kinds of Plastic Extrusion Machinery Here
            </p>

            <p className="text-gray-700 md:text-base leading-relaxed text-sm sm:text-xl">
              Established in 2012 in Karachi’s Export Processing Zone, our team
              of professionals brings over a decade of experience in
              manufacturing plastic extrusion machinery. We are renowned for our
              reliability and expertise in plastic recycling machinery,
              including the production of export-grade plastic granules.
              <br />
              <br />
              During the initial year of EPZ operations, our primary focus was
              on the construction of the factory building. Simultaneously, we
              initiated the installation of a recycling plant and advanced
              machinery. Our tailored solutions have significantly improved
              performance, productivity, and cost efficiency. Notably, our
              exports from KEPZ have grown to cover over 11 countries, including
              China, Japan, Europe, Sri Lanka, Saudi Arabia, Malaysia, Thailand,
              Dubai, South Africa, and Vietnam.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="bg-white py-16 font-montserrat"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-6xl">
          <motion.div variants={fadeInUp}>
            <h2 className="text-black text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-justify md:text-base leading-relaxed text-sm sm:text-xl">
              Our mission is to leverage advanced science and technology,
              integrated with research and development, fabrication, sales, and
              services, to deliver comprehensive solutions that meet the diverse
              needs of our customers. Our highly professional technical team is
              dedicated to providing the best solutions, ensuring customer
              satisfaction through meticulous machinery design, turnkey
              installation, reliable after-sales service, and the availability
              of spare parts.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-black text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 text-justify md:text-base leading-relaxed text-sm sm:text-xl">
              Our vision is to be a leading provider of innovative and
              technologically advanced solutions, recognized for our commitment
              to excellence in customer service and support. We aim to
              continuously evolve and adopt cutting-edge technologies to enhance
              our capabilities, ensuring we remain at the forefront of the
              industry in delivering exceptional value to our customers.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products */}
      <section className="py-16 bg-gray-50 font-montserrat">
        <div className="container mx-auto px-4 text-center mb-12 max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-black mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Our Products
          </motion.h2>

          <motion.p
            className="text-gray-700 md:text-base sm:text-xl max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Delivering advanced recycling and extrusion solutions to meet global
            quality and sustainability standards.
          </motion.p>
        </div>

        <div className="container mx-auto px-4">
          {/* Product 1 */}
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              Mother Baby Palletizing Line
            </h3>
            <div className="relative h-[300px] w-full max-w-lg mb-6">
              <Image
                src="/Group-of-Companies/combine-holding/combine-mother-baby-machine.png"
                alt="Mother Baby Palletizing Line"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 md:text-base sm:text-xl leading-relaxed space-y-3">
              <span className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 w-4 h-4 sm:w-6 sm:h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                <span>
                  Machine is tailor made to get result of crushed waste to
                  recycle P.P, P.E, A.B.S & P.S etc.
                </span>
              </span>

              <span className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 w-4 h-4 sm:w-6 sm:h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                <span>
                  Its Double step extruder system has double filter enable us to
                  get extra clean and ability to exhaust gas completely to get
                  maximum production of fine quality granules.
                </span>
              </span>
            </p>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              Extrusion Pelletizer Unit
            </h3>
            <div className="relative h-[300px] w-full max-w-lg mb-6">
              <Image
                src="/Group-of-Companies/combine-holding/combine-extrusion-pallet-machine.png"
                alt="Extrusion Pelletizer Unit"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 md:text-base sm:text-xl leading-relaxed space-y-3">
              <span className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 w-4 h-4 sm:w-6 sm:h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                <span>
                  Single screw recycling machine enables us to produce high
                  quality recycle granules as A.B.S, P.P, P.E & P.S etc.
                </span>
              </span>

              <span className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 w-4 h-4 sm:w-6 sm:h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                <span>
                  It also allows to get high quality blend of material and
                  maximum production.
                </span>
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
