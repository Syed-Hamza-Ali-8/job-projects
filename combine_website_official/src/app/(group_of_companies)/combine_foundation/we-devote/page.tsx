import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import CombineFoundationNavbar from "../Combine-Foundation-Navbar";

const OurDevote = () => {
  return (
    <>
      <CombineFoundationNavbar />
      <div className="bg-white text-gray-800 font-montserrat">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/combine-consultant/feedback-banner.jpg"
            alt="Feedback Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-black">
            <h1 className="text-3xl sm:text-4xl font-bold">We Devote</h1>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center py-8 px-4">
          <h2 className="text-lg sm:text-xl font-semibold">HEALTH</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold text-black">
            Transforming Lives Through Accessible, Compassionate Healthcare
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-md mx-auto px-4">
          <Image
            src="/Group-of-Companies/combine-foundation/we-devote/image-3.jpg"
            alt="Health Section"
            width={500}
            height={250}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Description Section */}
        <div className="max-w-5xl mx-auto px-4 py-8 text-justify leading-relaxed">
          <p>
            At Combine Foundation, a proud initiative of Combine Group and a
            registered non-profit organization under the Companies Act 2017, we
            are committed to building a healthier, stronger Pakistan, one
            community at a time. Guided by empathy and action, we work to ensure
            that essential healthcare reaches those who need it the most.
          </p>

          <h3 className="mt-6 text-xl sm:text-2xl font-bold text-black">
            Our Work in Health
          </h3>

          <p className="mt-2">
            We believe that good health is the right of every person, regardless
            of income, background, or location. That’s why we are committed to
            helping those who need it most.
          </p>

          {/* New Bullet Points Section */}
          <ul className="mt-6 space-y-2">
            {[
              "Providing free medicines to poor, needy, and deserving individuals who cannot afford ongoing or urgent treatments.",
              "Arranging health camps in remote or underserved areas, where people can get free checkups, basic treatments, and health advice.",
              "Sponsoring medical tests and treatment for those who cannot afford hospital visits or expensive diagnostic procedures.",
              "Helping hospitals, clinics, and dispensaries by providing support where needed, whether it's supplies, manpower, or financial assistance.",
              "Supporting people during emergencies and natural disasters by offering medical aid and essential healthcare support.",
              "Running seasonal support programs, including distributing warm clothes and blankets in winter and hygiene kits in summer, to protect vulnerable communities from illness.",
              "Creating awareness about basic health issues, preventive care, and healthy living through local campaigns and community engagement.",
              "Promoting clean environments and hygiene, because we believe a clean community is a healthy community.",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <FaCheck className="text-blue-500 text-lg sm:text-xl mt-1 mr-2 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center py-8 px-4">
          <h2 className="text-lg sm:text-xl font-semibold">EDUCATION</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold text-black">
            A Better Future is Everyone’s Right
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-md mx-auto px-4">
          <Image
            src="/Group-of-Companies/combine-foundation/we-devote/education-relief.jpg"
            alt="Health Section"
            width={500}
            height={250}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 text-justify leading-relaxed">
          <p>
            At Combine Foundation, we believe that education is the foundation
            of opportunity. Since 2017, we’ve been working to make quality
            education more accessible for those who cannot afford it, especially
            needy and deserving students across Pakistan. Our efforts are
            focused on both formal education and skill-building, helping
            individuals build a future they deserve.
          </p>

          {/* New Bullet Points Section */}
          <ul className="mt-6 space-y-2">
            {[
              "Providing Scholarships We offer scholarships to students who are talented but financially unable to continue their education, helping them complete school, college, or university.",
              "Paying University & College Fees We support students by covering partial or full tuition fees, especially for those enrolled in higher education who face financial challenges.",
              "Vocational Training & Skill Development We organise and support training programs in various trades and skills to help people, especially youth and women, become self-reliant and job-ready.",
              "Adult Literacy Programs We fund and facilitate adult education centres to support those who missed the chance to learn in their early years, because it’s never too late to learn",
              "Computer Literacy & Digital Access We help set up computer centers and provide basic IT training, giving young people digital skills that are essential in today’s world",
              "Support for Schools & Learning Centers We work to subsidise educational institutions in underserved areas, whether through funding, supplies, or other resources needed to keep education running.",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <FaCheck className="text-blue-500 text-lg sm:text-xl mt-1 mr-2 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <section className="bg-[#f3f3ff] py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Contact Us
            </h2>
            <p className="mt-2 text-black font-semibold">
              Contact us for a quote, help, or to join the team.
            </p>
          </div>

          <div className="max-w-lg mx-auto mt-8 bg-[#0073d1] p-6 rounded-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[#1e90ff] text-white font-bold py-3 rounded-full hover:bg-blue-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-4 h-4"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.5 14a.5.5 0 0 1-.958-.002l-2.087-5.565-5.565-2.087a.5.5 0 0 1 .002-.958l14-5.5a.5.5 0 0 1 .54.11ZM6.9 9.428l1.518 4.046 4.868-12.39-12.39 4.868L6.9 9.428Z" />
                </svg>
                <span>SEND</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurDevote;
