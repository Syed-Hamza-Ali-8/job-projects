"use client";
import {
  FaBuilding,
  FaFileAlt,
  FaChartLine,
  FaPiggyBank,
  FaDollarSign,
  FaFileInvoice,
  FaUniversity,
  FaMoneyBillWave,
  FaFileSignature,
  FaSyncAlt,
  FaHandshake,
  FaSearchDollar,
  FaBusinessTime,
  FaStore,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";
import CombineConsultant from "../Combine-Consultant-navbar";

const services = [
  {
    icon: <FaBuilding size={28} />,
    title: "NBFC Licensing",
    description:
      "NBFC licensing entails submitting required documents, meeting compliance criteria, and adhering to regulatory guidelines to obtain authorization for non-banking financial activities.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Investment Finance Services",
    description:
      "IFS provides tailored investment solutions, financial advice, and strategic planning to optimize wealth management.",
  },
  {
    icon: <FaPiggyBank size={28} />,
    title: "Micro Financing",
    description:
      "Micro-financing provides small loans and financial services to underserved communities, helping them improve their quality of life and create sustainable livelihoods.",
  },
  {
    icon: <FaDollarSign size={28} />,
    title: "Discounting",
    description:
      "Discounting involves reducing the value of something in financial terms or other contexts such as qualitative assessments.",
  },
  {
    icon: <FaFileInvoice size={28} />,
    title: "Asset Management",
    description:
      "Optimizing returns while minimizing risks of various investments, tailored to individual or institutional objectives.",
  },
  {
    icon: <FaUniversity size={28} />,
    title: "REIT Leasing",
    description:
      "Renting out properties owned by Real Estate Investment Trusts (REITs) to tenants in exchange for regular rental income.",
  },
  {
    icon: <FaMoneyBillWave size={28} />,
    title: "Venture Capital Housing",
    description:
      "Pertains to investments made by venture capital firms into startups and emerging companies within the housing sector.",
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "Finance & Accounts",
    description:
      "Managing financial resources, tracking transactions, preparing reports, and analyzing data to support decision-making.",
  },
  {
    icon: <FaFileSignature size={28} />,
    title: "Financial Reporting",
    description:
      "Preparation and presentation of financial information to stakeholders, facilitating decision-making and ensuring transparency.",
  },
  {
    icon: <FaSyncAlt size={28} />,
    title: "Internal Auditing",
    description:
      "Evaluate and improve the effectiveness of risk management, control, and governance processes within an organization.",
  },
  {
    icon: <FaHandshake size={28} />,
    title: "Joint Venturing",
    description:
      "Collaborating between two or more entities to pursue a specific project or business opportunity.",
  },
  {
    icon: <FaSearchDollar size={28} />,
    title: "Due Diligence",
    description:
      "A thorough investigation and analysis of a company or investment opportunity to assess its viability and risks.",
  },
  {
    icon: <FaBusinessTime size={28} />,
    title: "Business Transformation",
    description:
      "Implementing strategic changes across an organization to improve performance, efficiency, and adaptability.",
  },
  {
    icon: <FaStore size={28} />,
    title: "Business Acquisition",
    description:
      "Purchasing another company to gain access to its assets, customers, technology, or market share.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Portal & App Development",
    description:
      "Designing and building digital platforms and applications to streamline processes and enhance user experiences.",
  },
  {
    icon: <FaFileSignature size={28} />,
    title: "Customize ERP Solution",
    description:
      "Tailoring ERP software to meet specific business needs, optimizing workflows, and integrating modules.",
  },
  {
    icon: <FaCloud size={28} />,
    title: "Cloud Management",
    description:
      "Overseeing deployment, optimization, and security of cloud-based services to ensure reliability and performance.",
  },
];

export default function KeyServices() {
  return (
    <>
      <CombineConsultant />
      <div className="bg-white text-gray-800">
        {/* Banner Section */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('/Group-of-Companies/combine-consultant/key-services-banner.jpg')",
            }}
          />
          <div className="z-10 px-4 text-center text-black">
            <h1 className="text-3xl sm:text-4xl font-bold">Key Services</h1>
            <p className="text-sm sm:text-base mt-2 max-w-3xl mx-auto">
              We specialise in providing feasibility, research, business
              delegation, marketing, localisation, and accounting services to
              help organisations translate their conceptual ideas into reality.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-r border-b px-6 py-10 flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#DAA520] flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#DAA520]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
