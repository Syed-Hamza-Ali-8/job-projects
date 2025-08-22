"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CombineFoundationNavbar from "./Combine-Foundation-Navbar";

// Reusable fade-in-up variant (supports stagger with `custom` index)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const CombineFoundation = () => {
  return (
    <>
      <CombineFoundationNavbar />

      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] md:h-[90vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 max-w-4xl text-white"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            Making a difference, one person at a time
          </h1>
          <p className="text-base md:text-xl leading-relaxed mb-6">
            Helping one person might not change the world, but it could change
            the world for that one person.
          </p>
          <p className="text-base md:text-xl leading-relaxed mb-6">
            We’re here to bring hope, help, and healing to those who need it
            most. We believe that even the smallest act of kindness can spark a
            wave of hope. Every life we touch is a step toward a brighter, more
            compassionate world.
          </p>
          <p className="text-base md:text-xl leading-relaxed mb-8">
            Combine Foundation works passionately to uplift those in need
            through impactful programs in health and education.
          </p>

          <Link
            href="/Contact"
            className="inline-block bg-[#024082] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      {/* Health Section */}
      <section className="py-20 bg-[#f9fafc]">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          {/* Left Image */}
          <motion.div variants={fadeInUp} custom={0.1}>
            <Image
              src="/Group-of-Companies/combine-foundation/donate-clothes.jpg"
              alt="Healthcare support"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div variants={fadeInUp} custom={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              HEALTH
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Transforming Lives Through Accessible, Compassionate Healthcare
            </p>
            <p className="text-gray-600 mb-6">
              Having dream to grow and strengthen Pakistan, Combine Group is
              always step ahead in social works specially related to health and
              education. To strengthen its attachment, Combine Group has
              registered its foundation (NPO formed under Companies Act 2017) to
              specially focus on Health and Education works in Pakistan.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Targeting following areas in Health:
            </h3>

            <ul className="space-y-4">
              {[
                "Offering donations and aid during natural disasters and emergencies.",
                "Supporting hospitals, nursing homes, childcare centers, clinics, dispensaries, and vaccination centers.",
                "Organizing awareness programs about healthy food and lifestyle choices to prevent diseases.",
                "Advocating for a cleaner environment as a foundation for better public health.",
                "Supporting people during emergencies and natural disasters by offering medical aid and essential healthcare support.",
                "Running seasonal support programs, including distributing warm clothes and blankets in winter and hygiene kits in summer, to protect vulnerable communities from illness.",
                "Creating awareness about basic health issues, preventive care, and healthy living through local campaigns and community engagement.",
                "Promoting clean environments and hygiene, because we believe a clean community is a healthy community.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                  custom={0.3 + i * 0.05}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Check
                    size={20}
                    strokeWidth={4}
                    className="text-[#0d71db] flex-shrink-0"
                  />
                  <p className="text-gray-700">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          {/* Mission */}
          <motion.div variants={fadeInUp} custom={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-5">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Combine Foundation, our mission is to uplift underprivileged
              and marginalised communities by improving their access to quality
              healthcare and education. We focus on practical, meaningful
              support, providing essential services, resources, and
              opportunities to those who need them most. Through collaboration
              with local partners and on-the-ground efforts, we aim to create
              sustainable change that empowers individuals to lead healthier,
              more educated, and more independent lives.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div variants={fadeInUp} custom={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A Pakistan where every person, regardless of their background or
              income, has access to quality healthcare and education. Through
              compassionate programs and community-driven initiatives, we
              envision a future where support, dignity, and opportunity are
              within everyone’s reach.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-[#f9fafc]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-black mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            What We Do
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
          >
            At Combine Foundation, we are committed to supporting vulnerable
            communities through practical, life-changing services in health,
            education, and basic human needs. Our programs are designed to bring
            relief, dignity, and opportunity to those who need it most.
          </motion.p>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              {
                img: "/Group-of-Companies/combine-foundation/hunger-relief.jpg",
                title: "Hunger Relief",
                desc: "We provide food to individuals and families who are struggling to afford daily meals, helping them get through difficult times.",
              },
              {
                img: "/Group-of-Companies/combine-foundation/desaster-relief.jpg",
                title: "Disaster Relief",
                desc: "In times of natural disasters and emergencies, we respond quickly with emergency supplies, medical aid, and essential support for affected communities.",
              },
              {
                img: "/Group-of-Companies/combine-foundation/homeless-relief.jpg",
                title: "Homeless Assistance",
                desc: "We offer shelter, clothing, and support services to people experiencing homelessness, helping them find safety, stability, and a path forward.",
              },
              {
                img: "/Group-of-Companies/combine-foundation/education-relief.jpg",
                title: "Education Support",
                desc: "We support students from disadvantaged backgrounds by providing scholarships, financial aid, and course sponsorships, helping them access higher education and skill-building opportunities.",
              },
              {
                img: "/Group-of-Companies/combine-foundation/healthcare-support.jpg",
                title: "Healthcare Access",
                desc: "We offer free or subsidised healthcare services, including medications, checkups, health camps, and medical test sponsorships, to individuals who cannot afford basic treatment.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer break-inside-avoid"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={i * 0.1}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay (hover on sm+), always show text on mobile */}
                <div className="absolute inset-0 bg-black/60 opacity-0 sm:group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="hidden sm:block text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="hidden sm:block text-sm">{item.desc}</p>
                </div>
                <div className="block sm:hidden p-3 text-left">
                  <h3 className="text-lg font-semibold text-[#024082]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          {/* Left Image */}
          <motion.div
            className="flex justify-center items-center"
            variants={fadeInUp}
            custom={0.1}
          >
            <Image
              src="/Group-of-Companies/combine-foundation/education-relief-1.jpg"
              alt="Education support"
              width={800}
              height={600}
              className="w-full h-[450px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div variants={fadeInUp} custom={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              EDUCATION
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Better Future is Everyone&apos;s Right
            </p>
            <p className="text-gray-600 mb-6">
              At Combine Foundation, we believe that education is the foundation
              of opportunity. Since 2017, we’ve been working to make quality
              education more accessible for those who cannot afford it,
              especially needy and deserving students across Pakistan. Our
              efforts are focused on both formal education and skill-building,
              helping individuals build a future they deserve.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Work in Education
            </h3>

            <ul className="space-y-4">
              {[
                "Providing Scholarships – We offer scholarships to students who are talented but financially unable to continue their education, helping them complete school, college, or university.",
                "Paying University & College Fees – We support students by covering partial or full tuition fees, especially for those enrolled in higher education who face financial challenges.",
                "Scholarships for Foreign Studies – To provide scholarships to students for foreign studies and expertise with commitment to serve back to nation.",
                "Vocational Training & Skill Development – We organise and support training programs in various trades and skills to help people, especially youth and women, become self-reliant and job-ready.",
                "Adult Literacy Programs – We fund and facilitate adult education centres to support those who missed the chance to learn in their early years, because it’s never too late to learn.",
                "Computer Literacy & Digital Access – We help set up computer centers and provide basic IT training, giving young people digital skills that are essential in today’s world.",
                "Support for Schools & Learning Centers – We work to subsidise educational institutions in underserved areas, whether through funding, supplies, or other resources needed to keep education running.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                  custom={0.3 + i * 0.05}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Check
                    size={20}
                    strokeWidth={4}
                    className="text-[#0d71db] flex-shrink-0"
                  />
                  <p className="text-gray-700">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Contribute & Contact Section */}
      <section className="py-20 bg-[#f9fafc]">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          {/* Left - Contribution */}
          <motion.div variants={fadeInUp} custom={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Want to Contribute
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Here’s How You Can Make a Difference
            </p>
            <p className="text-gray-600 mb-6">
              At Combine Foundation, we believe that real change starts with
              ordinary people coming together for an extraordinary cause. Your
              support, no matter how big or small, helps us reach those who are
              struggling and bring hope into their lives.
            </p>
            <p className="text-gray-600 mb-6">
              Every little bit helps. Thank you for your support!
            </p>

            <ul className="space-y-6">
              {[
                {
                  title: "Donate",
                  desc: "Your contribution goes directly toward helping the needy, whether it’s a student’s tuition, life-saving medicines, or food for a family in crisis. Every rupee matters.",
                },
                {
                  title: "Volunteer",
                  desc: "Give your time, energy, or skills to support our on-ground projects. From organizing camps to teaching skills, your time can change someone’s future.",
                },
                {
                  title: "Spread the Word",
                  desc: "Tell others about our mission. Share our work on social media, talk to friends and family, or help us connect with new partners. Awareness is powerful.",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                  custom={0.2 + i * 0.05}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Check
                    size={22}
                    strokeWidth={4}
                    className="text-[#0d71db] flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Contact */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            variants={fadeInUp}
            custom={0.3}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Want to Know More?
            </h2>
            <p className="text-lg text-gray-700 mb-6">Get in Touch With Us</p>
            <p className="text-gray-600 mb-6">
              At Combine Foundation, we’re committed to helping people overcome
              challenges and build brighter futures through access to health,
              education, and opportunity. We believe every person deserves the
              chance to live with dignity, hope, and purpose.
            </p>
            <p className="text-gray-600 mb-8">
              If you’d like to learn more about our work, ask questions, or find
              out how you can get involved, we’d love to hear from you. Reach
              out today and become part of the change.
            </p>

            <Link
              href="/Contact"
              className="inline-block bg-[#024082] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default CombineFoundation;
