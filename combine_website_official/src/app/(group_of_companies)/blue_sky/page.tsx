"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BlueSkyNavbar from "./Blue-Sky-Navbar";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaShareAlt,
  FaTags,
  FaClock,
  FaGift,
  FaDollarSign,
} from "react-icons/fa";
import { easeInOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut, // ✅ Correct
    },
  },
};

const BlueSky = () => {
  // images for the BACK carousel phone
  const slides = [
    "/Group-of-Companies/blue-sky/mobile-1.jpg",
    "/Group-of-Companies/blue-sky/mobile-2.jpg",
  ];
  const [current, setCurrent] = useState(0);

  // countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 23,
    minutes: 43,
    seconds: 15,
  });

  // testimonial pagination state
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      title: "We Are Loved By",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      name: "John Doe",
      role: "CEO",
      image: "/Group-of-Companies/blue-sky/arovane-business-member-1.jpg",
    },
    {
      title: "We Are Loved By",
      desc: "Nulla gravida euismod lorem, tempus hendrerit est porta eu. Aenean tortor enim, cursus eget euismod vel, euismod in eros. Aliquam laoreet rutrum venenatis.",
      name: "John Doe",
      role: "CEO",
      image: "/Group-of-Companies/blue-sky/arovane-business-member-2.jpg",
    },
  ];

  useEffect(() => {
    // image slider interval
    const t = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    // countdown interval
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds -= 1;
        else {
          seconds = 59;
          if (minutes > 0) minutes -= 1;
          else {
            minutes = 59;
            if (hours > 0) hours -= 1;
            else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      clearInterval(t);
      clearInterval(timer);
    };
  }, [slides.length]);

  return (
    <>
      <BlueSkyNavbar />

      {/* HERO SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          <div className="relative bg-gradient-to-br from-[#ff5a66] to-[#ff7a88] flex justify-center items-center p-8 md:p-12">
            {/* BACK carousel phone */}
            <div className="absolute w-[180px] h-[340px] sm:w-[200px] sm:h-[380px] md:w-[250px] md:h-[500px] left-2 md:left-16 top-3 md:top-10 overflow-hidden rounded-xl shadow-lg">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide}
                    alt={`phone back ${idx}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* FRONT phone */}
            <div className="relative z-10 w-[200px] h-[420px] sm:w-[220px] sm:h-[480px] md:w-[300px] md:h-[600px] rounded-xl shadow-xl overflow-hidden translate-x-6 md:translate-x-10">
              <Image
                src="/Group-of-Companies/blue-sky/front-img.png"
                alt="Front Phone"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Easy Shopping For Customers, Higher Sales For You.
            </h2>
            <p className="text-gray-700 mb-6">
              Blue Sky Financial Services has presented its revenue generation
              strategy covering sources of revenue, growth drivers, and
              profitability tactics.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              By endeavoring to offer the swiftest checkout process, we are
              committed to delivering an unparalleled purchasing experience.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the next generation of financial services and to develop new
              forms of relationships for Pakistani consumers and commercial
              customers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* COUNTDOWN SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-900 text-white py-16 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          BLUESKY FINANCIAL SERVICES
        </h2>
        <h3 className="text-xl md:text-2xl text-[#7ce4dce9] font-semibold mb-6">
          50% OFF Pro Version!
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Unlock premium features at half the price with our exclusive 50% off
          offer for the Pro version. Upgrade now and save!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-[#7ce4dce9]">
                {String(value).padStart(2, "0")}
              </span>
              <span className="uppercase text-sm mt-2 text-gray-400">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FEATURES SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#fff4f6] py-20 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* LEFT */}
          <div className="flex flex-col space-y-10">
            <FeatureItem
              icon={<FaTags className="text-pink-500 text-2xl" />}
              title="Know What's Worth Buying"
              desc="Make informed purchases based on quality, durability, and functionality."
            />
            <FeatureItem
              icon={<FaShareAlt className="text-pink-500 text-2xl" />}
              title="Share Your Favorites"
              desc="Explore diverse topics and engage in meaningful conversations."
            />
            <FeatureItem
              icon={<FaGift className="text-pink-500 text-2xl" />}
              title="Enjoy VIP Discounts"
              desc="Exclusive VIP discounts await! Join now and enjoy special savings."
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/Group-of-Companies/blue-sky/front-img.png"
              alt="App Preview"
              width={340}
              height={640}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col space-y-10">
            <FeatureItem
              icon={<FaUsers className="text-pink-500 text-2xl" />}
              title="High Quality Community"
              desc="Engage with a vibrant community committed to sharing valuable insights."
            />
            <FeatureItem
              icon={<FaClock className="text-pink-500 text-2xl" />}
              title="Access To Special Sales"
              desc="Unlock exclusive discounts and early access to sales events."
            />
            <FeatureItem
              icon={<FaDollarSign className="text-pink-500 text-2xl" />}
              title="Earn Referral Bonuses"
              desc="Share with friends and earn rewards by inviting your network."
            />
          </div>
        </div>
      </motion.section>

      {/* RESPONSIVE + VIDEO SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white py-20 px-6 space-y-20"
      >
        {/* Block 1: Image with Text */}
        <div className="max-w-4xl mx-auto flex flex-col space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            User-Friendly APP
          </h2>
          <p className="text-gray-700">
            Simplify your experience with our user-friendly app. Intuitive
            interface, easy navigation, and seamless functionality.
          </p>
          <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center rounded-2xl">
            <Image
              src="/Group-of-Companies/blue-sky/user-friendly-app.png"
              alt="About"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Block 2: Video with Text */}
        <div className="max-w-4xl mx-auto flex flex-col space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Responsive Designs
          </h2>
          <p className="text-gray-700">
            Experience seamless browsing across all devices with our responsive
            designs. Enjoy optimal performance and accessibility wherever you
            go.
          </p>
          <div className="w-full rounded-xl overflow-hidden shadow-md aspect-video">
            <iframe
              src="https://player.vimeo.com/video/218048270?autoplay=1&color&autopause=0&loop=1&muted=1&title=0&portrait=0&byline=0"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {testimonials[testimonialIndex].title}
          </h2>

          {/* Slider Wrapper */}
          <div className="relative overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 flex flex-col items-center space-y-6 px-6"
                >
                  <p className="text-gray-700">{t.desc}</p>

                  {/* Profile Image */}
                  <div className="flex justify-center">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={100}
                      height={100}
                      className="rounded-full shadow-lg"
                    />
                  </div>

                  <div className="mt-6">
                    <p className="font-semibold text-lg text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination buttons */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                aria-pressed={testimonialIndex === idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  testimonialIndex === idx
                    ? "bg-[#7ce4dce9] scale-110"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Subscription Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative bg-[#e07c77] py-12 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Phone Image */}
          <div className="flex justify-center">
            <Image
              src="/Group-of-Companies/blue-sky/managements/mobile-mockup-shadow.png"
              alt="Phone App"
              width={250}
              height={500}
              className="object-contain max-h-[500px] sm:max-h-[550px] md:max-h-[600px] w-auto"
            />
          </div>

          {/* Text + Subscribe */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Subscribe & Save 15% on your first order
            </h2>
            <p className="text-gray-700 mb-6">
              Subscribe now for 15% off your first order! Don’t miss out on
              exclusive savings. Join us today!
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:border-red-400"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

// only small helper for DRY
const FeatureItem = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </div>
  </div>
);

export default BlueSky;
