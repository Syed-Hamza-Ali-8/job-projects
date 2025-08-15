"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaBullseye, FaEye } from "react-icons/fa"; // ✅ Imported icons
import { FiMic } from "react-icons/fi";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      {/* About Us Banner */}
      <section className="relative w-full h-[50vh] bg-[url('/AboutPage/about-us-image.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0" />
        <h1 className="z-10 text-4xl md:text-6xl text-white font-extrabold font-[Montserrat] drop-shadow-lg">
          ABOUT US
        </h1>
        <p className="z-10 mt-4 text-white text-lg md:text-2xl font-light">
          Crafting Global Excellence Since 1998
        </p>
      </section>

      {/* About Us Text & Image Section */}
      <section className="bg-[#F3F3FF] py-20 font-[Montserrat] px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Left Text */}
          <div className="lg:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
              Combine Group
            </h2>
            <p className="leading-relaxed text-base md:text-lg mb-4">
              We have been serving our valued customers for more than 25 years
              in the field of plastic machinery and products. In 2013, we
              launched our manufacturing operations in EXPORT PROCESSING ZONE
              KARACHI, PAKISTAN, to cater to the international market.
            </p>
            <p className="leading-relaxed text-base md:text-lg">
              Combine Group also operates in China and Malaysia as a
              manufacturer and exporter of plastic recycling machinery, recycled
              raw materials, and textile products. Our global presence enables
              us to deliver cutting-edge solutions in the plastic and textile
              industries, ensuring innovation, quality, and sustainability.
            </p>
          </div>

          {/* Right Single Image */}
          <div className="lg:w-1/2 relative rounded-md overflow-hidden shadow-xl h-[400px] w-full">
            <Image
              src="/AboutPage/about-image-gallery.png"
              alt="Combine Group Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white py-20 font-[Montserrat] px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-[#f4f7ff] rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FaBullseye className="text-blue-600" size={28} />
              Our Mission
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              To empower businesses and communities worldwide through innovative
              plastic recycling machinery, global textile trade solutions, and
              sustainable organic farming practices. With decades of expertise
              in import-export services, business consultancy in Pakistan, and
              community development, we are committed to driving operational
              excellence, fostering sustainable growth, and creating a lasting
              positive impact on society and the environment. As a trusted
              partner, we connect global markets, support cross-border business
              ventures, and promote better health and education through our
              foundation’s initiatives, ensuring a brighter future for all.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#f4f7ff] rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FaEye className="text-green-600" size={28} />
              Our Vision
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              To be a global leader in sustainable business solutions,
              revolutionizing industries through innovative plastic recycling
              machinery, advanced textile trade networks, and eco-friendly
              organic farming practices. We envision a future where businesses
              thrive in harmony with the environment, empowered by our expertise
              in global trade, cutting-edge technology, and community-driven
              initiatives. By fostering sustainable growth, promoting
              cross-border collaboration, and investing in health and education,
              we aim to create a lasting legacy of prosperity, innovation, and
              social impact for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Years of Journey Section */}
      <section className="bg-[#E6E6FA] py-20 font-[Montserrat] px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-black">
            Our History - Years of Journey
          </h2>
          <div className="relative">
            {/* Vertical line (hidden on small screens) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-600 z-0" />

            <div className="space-y-16 relative z-10">
              {[
                {
                  year: "1986",
                  title: "Combine Group",
                  description:
                    "Established in 1986, as a small family-owned business and today it is known as one of the most reputed and reliable partners of plastic recycling machinery manufacturers in Pakistan as well as global.",
                  side: "left",
                },
                {
                  year: "2007",
                  title: "Zhejiang Combine Trading Co. Ltd.",
                  description:
                    "Combine Group has also got its footprint in China by the name of Zhejiang Combine trading Co. ltd. As a manufacturer and trader of textile fabric and plastic recycling machinery.",
                  side: "right",
                },
                {
                  year: "2008",
                  title: "Combine Plastic & Engineering",
                  description:
                    "C.P.E has won its customers continued trust by always providing them with a perfect solution to their specific requirements Malaysia.",
                  side: "left",
                },
                {
                  year: "2013",
                  title: "Combine Holding",
                  description:
                    "Combine Holding was established in 2013 in Karachi by a group of dynamic professionals.",
                  side: "right",
                },
                {
                  year: "2018",
                  title: "Colors of Combine",
                  description:
                    "Colors of Combine was started with the concept of organic food provision. Project was appreciated by masses, so we decided to spread awareness about benefits of organic products on national level.",
                  side: "left",
                },
                {
                  year: "2021",
                  title: "Combine Consultants",
                  description:
                    "We provide expert business consultancy services to enhance efficiency, productivity, and profitability. We also promote Pakistan globally, especially to Chinese investors and visitors.",
                  side: "right",
                },
                {
                  year: "2022",
                  title: "Combine Supply Chain",
                  description:
                    "Combine Group also operates in China & Malaysia as manufacturer, exporter of plastic recycling machineries, recycled raw materials & textile products.",
                  side: "left",
                },
                {
                  year: "2023",
                  title: "Combine Foundation",
                  description:
                    "A non-profit NGO founded in 2003, working in poverty alleviation, education, health, and disaster relief across Pakistan.",
                  side: "right",
                },
              ].map(({ year, title, description, side }, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row justify-between items-center w-full gap-4 ${
                    side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-[45%] relative group transition duration-300 ease-in-out">
                    <div className="bg-gradient-to-r from-[#fdfbff] to-[#e6e6fa] group-hover:from-black group-hover:to-black p-6 rounded-xl shadow-xl border border-gray-300 group-hover:border-white transition duration-300 ease-in-out">
                      <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white">
                        {title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-100">
                        {description}
                      </p>
                    </div>

                    {/* Year (absolute on md+, static on sm) */}
                    <span
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-xl font-bold text-blue-600 ${
                        side === "left" ? "right-[-50px]" : "left-[-50px]"
                      }`}
                    >
                      {year}
                    </span>

                    <span className="md:hidden block text-center mt-2 text-lg font-bold text-blue-600">
                      {year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[50vh] bg-[url('/AboutPage/about-us-image.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0" />

        <h1 className="z-10 text-4xl md:text-6xl text-white font-extrabold font-[Montserrat] drop-shadow-lg">
          CONTACT US
        </h1>

        <p className="z-10 mt-4 text-white text-lg md:text-2xl font-light">
          Drop us an email or call if you have any query, opinion or suggestion
          which can make the world a better place.
        </p>

        <Link
          href="/Contact"
          className="z-10 mt-6 flex items-center gap-2 px-6 py-3 bg-white
          text-black text-lg font-medium rounded-full shadow-lg
          hover:bg-[#003366] hover:text-white transition duration-300 cursor-pointer"
        >
          <FiMic className="text-xl" />
          Contact Us
        </Link>
      </section>
    </>
  );
}
