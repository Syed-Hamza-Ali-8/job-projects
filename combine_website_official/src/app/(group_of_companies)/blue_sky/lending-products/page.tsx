import BlueSkyNavbar from "../Blue-Sky-Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

const LendingProducts = () => {
  const products = [
    {
      img: "/Group-of-Companies/blue-sky/lending-products/digital-wallets.jpeg",
      title: "Digital Wallets (Easy Paisa)",
      desc: "Simplify transactions with Easy Paisa, your digital wallet solution. Secure, convenient, and accessible anytime, anywhere. Experience seamless payments today.",
    },
    {
      img: "/Group-of-Companies/blue-sky/lending-products/credit-card.webp",
      title: "Debit/Credit Cards (VISA, MasterCard)",
      desc: "Experience convenience with our Visa and MasterCard debit/credit cards. Enjoy global acceptance, rewards, and security for seamless transactions worldwide.",
    },
    {
      img: "/Group-of-Companies/blue-sky/lending-products/buy-now-pay-later.png",
      title: "Buy Now Pay Later (Installments)",
      desc: "Shop now, pay later with our convenient installment plans. Enjoy flexibility and convenience with manageable payments tailored to your needs.",
    },
    {
      img: "/Group-of-Companies/blue-sky/lending-products/bank-transfer.png",
      title: "Bank Transfer (PayPal)",
      desc: "Secure bank transfers made easy with PayPal. Simple, reliable, trusted.",
    },
    {
      img: "/Group-of-Companies/blue-sky/lending-products/cash-on-delivery.png",
      title: "Delivery at your doorstep (Cash On Delivery)",
      desc: "Convenient cash on delivery option available for doorstep delivery. Enjoy hassle-free shopping with payment upon receipt of your order.",
    },
  ];

  return (
    <>
      <BlueSkyNavbar />

      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 py-12">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#E94743] leading-snug">
            Leading Products
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            Explore our diverse lending products tailored to your needs. From
            loans to credit solutions, we’ve got you covered. Discover more
            today!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-[#E94743] text-xl sm:text-2xl">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="hover:scale-110 transition-transform duration-200" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="hover:scale-110 transition-transform duration-200" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:scale-110 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="bg-[#ff5a66] p-4 sm:p-6 rounded-2xl shadow-lg w-[90%] sm:w-[70%] md:w-[400px]">
            <Image
              src="/Group-of-Companies/blue-sky/lending-products/mobile-mockups.png"
              alt="Lending Products"
              width={400}
              height={400}
              className="rounded-xl object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      {products.map((item, index) => (
        <section
          key={index}
          className="min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 py-12 border-b"
        >
          {/* Alternate Layout: Image Left / Right */}
          <div
            className={`md:w-1/2 flex justify-center ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            <div className="rounded-2xl shadow-lg overflow-hidden w-[90%] sm:w-[70%] md:w-[400px] h-[220px] sm:h-[260px] md:h-[300px] flex items-center justify-center bg-white">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`md:w-1/2 mt-8 md:mt-0 space-y-4 sm:space-y-6 text-center md:text-left ${
              index % 2 === 0 ? "order-2 md:pl-12" : "order-1 md:pr-12"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700">{item.desc}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default LendingProducts;
