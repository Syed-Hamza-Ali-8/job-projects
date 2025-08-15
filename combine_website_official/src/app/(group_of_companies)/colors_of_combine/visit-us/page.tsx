import Image from "next/image";
import ColorsOfCombine from "../Colors-of-Combine-Navbar";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const VisitUs = () => {
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
            <h1 className="text-3xl sm:text-4xl font-bold">Visit Us</h1>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Have any Questions?
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <FiPhone className="text-green-600 text-3xl mb-2" />
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-700">+92 318 3384794</p>
            </div>
            <div className="flex flex-col items-center">
              <FiMail className="text-blue-600 text-3xl mb-2" />
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-700">info@combinegrp.com</p>
            </div>
            <div className="flex flex-col items-center">
              <FiMapPin className="text-red-600 text-3xl mb-2" />
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-700">
                Colors of Combine, Haji Abdul Kareem Goth, near Baqai Cadet
                College, Karachi, 75340
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Google Map */}
        <div className="w-full h-64 sm:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7231.0661302711615!2d67.23531498784745!3d25.015977551136103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1754689645061!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VisitUs;
