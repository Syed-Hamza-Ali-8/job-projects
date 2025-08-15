import Image from "next/image";
import ColorsOfCombine from "../Colors-of-Combine-Navbar";

const Feedback = () => {
  return (
    <>
      <ColorsOfCombine />
      <div className="bg-white text-gray-800">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/Group-of-Companies/combine-consultant/feedback-banner.jpg"
            alt="Feedback Banner"
            fill
            className="object-cover opacity-60"
          />
          <div className="z-10 px-4 text-center text-black">
            <h1 className="text-3xl sm:text-4xl font-bold">Feedback</h1>
          </div>
        </div>

        {/* Feedback Form Section */}
        <section className="bg-gray-600 text-white py-12 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-8">
              <span className="block text-green-500 text-2xl mb-2">🌱</span>
              <h2 className="text-3xl font-bold">Give Your Feedback</h2>
              <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
                We value your opinion! Share your feedback with us and help us
                improve. Your input matters, so let’s hear from you!
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <textarea
                placeholder="Write message"
                rows={6}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
              >
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#F3EEE6] py-16 px-6 sm:px-12">
          <div className="text-center mb-12">
            <span className="block text-green-500 text-2xl mb-2">🌱</span>
            <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
            <p className="text-xl text-gray-600">What They Say</p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/Group-of-Companies/colors-of-combine/feedback/christine.jpg"
                    alt="Christine Rose"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">Christine Rose</h4>
                    <p className="text-sm text-gray-500">Farmer</p>
                  </div>
                </div>
                <span className="text-4xl text-blue-300">”</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/Group-of-Companies/colors-of-combine/feedback/katrina.jpg"
                    alt="Katrina Grace"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">Katrina Grace</h4>
                    <p className="text-sm text-gray-500">Farmer</p>
                  </div>
                </div>
                <span className="text-4xl text-blue-300">”</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/Group-of-Companies/colors-of-combine/feedback/jim.jpg"
                    alt="Jim Grace"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">Jim Grace</h4>
                    <p className="text-sm text-gray-500">Farmer</p>
                  </div>
                </div>
                <span className="text-4xl text-blue-300">”</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Feedback;
