import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import BlueSkyNavbar from "../Blue-Sky-Navbar";

const CompanyOverview = () => {
  return (
    <>
      <BlueSkyNavbar />
      <div className="bg-white text-gray-800 font-montserrat">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/blue-sky/managements/management-banner.webp"
            alt="Feedback Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-white">
            <h1 className="text-4xl sm:text-6xl font-bold">Company Overview</h1>
          </div>
        </div>

        {/* Two Column Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Our Company</h2>
            <p className="mb-6">
              To be the Next Generation of Financial Services &amp; build new
              forms of Relationships for Pakistani Consumers &amp; Commercial
              customers.
            </p>

            <Link
              href="/Contact"
              className="w-fit bg-[#E94743] text-white px-5 py-2 rounded-md transition-colors mb-6 hover:bg-[#c83b38]"
            >
              Contact Us
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl text-gray-600">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-[#E94743] transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-[#E94743] transition"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-[#E94743] transition"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="hover:text-[#E94743] transition"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <p className="mb-4">
              Blue Sky Financial Services has presented its revenue generation
              strategy covering sources of revenue, growth drivers, and
              profitability tactics lending services, and collaborating with
              businesses to reach end-users. To be the Next Generation of
              Financial Services &amp; build new forms of Relationships for
              Pakistani Consumers &amp; Commercial customers.
            </p>
            <p>
              Non-banking financial companies (NBFCs) have adopted
              technology-driven solutions to offer credit facilities to
              individuals inhabiting remote areas, without the requirement of
              bank approval, by collaborating with established business
              entities. The payment sector at a global level is subject to
              constant change and susceptible to disruption. The industry
              observes an increasing demand for flexible, dynamic, and efficient
              payment methods, with customers seeking alternative credit
              options. The contemporary trends in the sector are largely
              influenced by a preferential inclination towards digital services.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyOverview;
