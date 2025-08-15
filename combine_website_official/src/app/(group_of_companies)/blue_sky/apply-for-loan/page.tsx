import Image from "next/image";
import BlueSkyNavbar from "../Blue-Sky-Navbar";

const ApplyForLoan = () => {
  return (
    <>
      <BlueSkyNavbar />
      <div className="bg-white text-gray-800 font-montserrat">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/blue-sky/apply-for-loan/loan.png"
            alt="Loan Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-white">
            <h1 className="text-4xl sm:text-6xl font-bold">Apply for Loan</h1>
          </div>
        </div>

        {/* Loan Details Section */}
        <section className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Loan Details</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            A flexible loan facility that provides financial assistance when
            needed, helping you finance your dreams and support you through
            tough times.
          </p>
        </section>

        {/* Loan Application Form */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-6">
            Fill The Form For Loan.
          </h2>
          <p className="text-center text-gray-600 mb-8">
            📩 applyloan@combinegrp.com
          </p>
          <form className="space-y-4">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>

            {/* Dropdown */}
            <select className="border border-gray-300 rounded px-4 py-2 w-full">
              <option>- What do you need help with today? -</option>
              <option>My Account</option>
              <option>App Install</option>
              <option>Feature Feedback</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={4}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#E94743] text-white px-6 py-3 rounded w-full cursor-pointer"
            >
              SEND EMAIL
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ApplyForLoan;
