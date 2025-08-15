import Image from "next/image";
import CombineFoundationNavbar from "../Combine-Foundation-Navbar";

const Donate = () => {
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
            <h1 className="text-3xl sm:text-4xl font-bold">Donate Now</h1>
          </div>
        </div>

        {/* Donation Info Section */}
        <section className="bg-[#f5f5ff] py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side: Text */}
            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase">
                Combine Foundation
              </h4>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">
                Donate Through Online Banking & Direct Deposits
              </h2>
              <div className="mt-6 space-y-2 text-black font-bold">
                <p>
                  ACCOUNT NO. :-{" "}
                  <span className="font-normal">PK95FAYS3505301000001453</span>
                </p>
                <p>
                  ACCOUNT TITLE:-{" "}
                  <span className="font-normal">COMBINE FOUNDATION</span>
                </p>
                <p>
                  BANK :-{" "}
                  <span className="font-normal">FAYSAL BANK LIMITED</span>
                </p>
                <p>
                  BRANCH:-{" "}
                  <span className="font-normal">
                    ALLAMA IQBAL ROAD, KARACHI
                  </span>
                </p>
              </div>
            </div>

            {/* Right Side: Image */}
            <div>
              <Image
                src="/Group-of-Companies/combine-foundation/donate/education-relief.jpg"
                alt="Donation Support"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

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

export default Donate;
