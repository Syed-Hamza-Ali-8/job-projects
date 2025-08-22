"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Briefcase,
  ClipboardList,
  Users,
  Building2,
  Settings,
  HeartHandshake,
  UserCheck,
  Target,
  Smile,
  Star,
} from "lucide-react";
import CombineConsultantNavbar from "./Combine-Consultant-navbar";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.12, ease: "easeOut" },
  }),
};

const CombineConsultant: React.FC = () => {
  // separate ref to trigger counters when visible
  const [countersRef, countersInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <CombineConsultantNavbar />

      {/* Banner Section */}
      <motion.section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1470&q=80')",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl text-white">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
            custom={0}
          >
            A Successful Strategy For Your Business
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-6"
            variants={fadeInUp}
            custom={1}
          >
            We are a team of experienced consultants who are experts in their
            respective fields.
          </motion.p>

          <motion.div variants={fadeInUp} custom={2}>
            <Link
              href="/Contact"
              className="inline-block bg-[#024082] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 cursor-pointer"
            >
              Get Appointment
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Two Column Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side */}
        <motion.div
          className="bg-gray-50 p-8 rounded-lg shadow-md"
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-black mb-4">
            You Need the Best Advice
          </h2>
          <p className="text-gray-700 mb-4">
            As a company, our partners and we innovate for businesses with one
            consistent belief: there is always a way to make business better.
            Therefore, meaningful innovation focused on our clients&apos; needs
            remains at the heart of everything we do.
          </p>
          <p className="text-gray-700 mb-6">
            At Combine, our purpose is to improve businesses through meaningful
            innovation. We aim to enhance 2.5 billion lives by 2030, including
            400 million in underserved communities.
          </p>
          <button className="bg-[#024082] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 cursor-pointer">
            Contact Us
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="bg-gray-50 p-8 rounded-lg shadow-md"
          variants={fadeInUp}
          custom={1}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-6">
            Empowering businesses to thrive. We provide a comprehensive suite of
            solutions, including business process outsourcing, specialized
            company licensing, tax & corporate advisory, EMI licensing, process
            automation, and support for NGOs and welfare foundations.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To be the one-stop shop for business success, streamlining
            operations, fostering growth, and empowering every organization,
            from established companies to social causes. We envision a future
            where businesses thrive efficiently, navigate complexities with
            ease, and contribute to a better world.
          </p>
        </motion.div>
      </motion.section>

      {/* Industries We Serve */}
      <motion.section
        className="bg-[#f6f7fc] py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-black mb-12"
            variants={fadeInUp}
            custom={0}
          >
            INDUSTRIES WE SERVE
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Briefcase size={36} />,
                title: "Business Process Outsourcing",
                desc: "We take care of your business’s administrative tasks, so you can focus on what you do best.",
              },
              {
                icon: <ClipboardList size={36} />,
                title: "Specialized Companies Licensing",
                desc: "We help you obtain the necessary licenses and permits to start and operate your business.",
              },
              {
                icon: <Users size={36} />,
                title: "Tax & Corporate Advisory",
                desc: "We provide you with tax and corporate advice to help you save money and grow your business.",
              },
              {
                icon: <Building2 size={36} />,
                title: "EMI Licensing",
                desc: "We help you obtain the necessary licenses and permits to offer EMI to your customers.",
              },
              {
                icon: <Settings size={36} />,
                title: "Process Automation",
                desc: "We automate your business processes to save you time and money.",
              },
              {
                icon: <HeartHandshake size={36} />,
                title: "NGOs & Welfare Support",
                desc: "We help you set up and manage your NGO or welfare foundation.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center"
                variants={fadeInUp}
                custom={i + 1}
              >
                <div className="bg-[#024082] text-white p-4 rounded-full mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#54595F] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Message of Chairman */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 font-montserrat"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="bg-gray-50 p-10 rounded-lg shadow-md"
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#024082] mb-6 text-center">
            Message of Chairman
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Our team is passionate about innovation, entrepreneurship and
            business transformation to drive competitiveness and customer value.
            Our vision is to be a Pakistan based internationally recognized
            brand representing the highest standard of value for the client,
            professional excellence and integrity.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            We offer world-class professionalism combined with a deep
            understanding of and insight into the local challenges and
            opportunities. CCPL has the scale, the skills, and the culture to
            help our customers get to where they need to be.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Yet, in an industry as fast-moving as ours, we can rarely innovate
            in isolation. Increasingly this means partnering with other service
            providers, start-ups, universities and other companies.
          </p>
        </motion.div>
      </motion.section>

      {/* Happy Clients / Testimonials */}
      <motion.section
        className="bg-black text-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-16"
            variants={fadeInUp}
            custom={0}
          >
            HAPPY CLIENTS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                quote:
                  "Combine consultants pvt. ltd. was a great help to our company. They helped us to identify and solve some of our most pressing problems.",
                name: "Andi Lane",
                company: "Quisque Tech",
                avatar: "/Group-of-Companies/combine-consultants/andi-lane.jpg",
              },
              {
                quote:
                  "We were very impressed with Combine consultants. They were very knowledgeable and experienced. We would definitely use them again in the future.",
                name: "Olive Mathews",
                company: "Lorem Fund",
                avatar:
                  "/Group-of-Companies/combine-consultants/olive-mathews.jpg",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="flex flex-col justify-between bg-[#111] p-8 rounded-lg shadow-md"
                variants={fadeInUp}
                custom={i + 1}
              >
                <div>
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} size={18} />
                    ))}
                  </div>

                  <p className="text-gray-200 text-lg leading-relaxed flex-grow">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-[70px] h-[70px] md:w-[80px] md:h-[80px]"
                  />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-gray-400 text-sm">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Numbers Speak (Counters) */}
      <motion.section
        className="bg-[#f6f7fc] py-20"
        ref={countersRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-black mb-16"
            variants={fadeInUp}
            custom={0}
          >
            Let the Numbers Speak
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { icon: <Smile size={40} />, end: 350, label: "Happy Clients" },
              {
                icon: <Target size={40} />,
                end: 620,
                label: "Successful Projects",
              },
              {
                icon: <UserCheck size={40} />,
                end: 75,
                label: "Advisors & Experts",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                variants={fadeInUp}
                custom={i + 1}
              >
                <div className="bg-[#024082] text-white p-5 rounded-full mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-extrabold text-[#024082]">
                  {countersInView ? (
                    <CountUp end={stat.end} duration={2.5} />
                  ) : (
                    0
                  )}
                  +
                </h3>
                <p className="text-gray-700 text-lg font-medium mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CombineConsultant;
