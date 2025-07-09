import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-white text-[#1A2E25] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#f7f5e9] py-16 px-4 md:px-20 flex flex-col items-center text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-[#163026]"
          style={{ letterSpacing: "-1px" }}
        >
          About Irvine Roofing Experts
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#163026]">
          Your Trusted Roofing Professionals in Irvine
        </h2>
        <p className="text-xl md:text-2xl font-medium mb-8 text-[#163026] max-w-3xl">
          With years of experience serving the Irvine community, we are
          dedicated to providing top-quality roofing solutions with honesty,
          integrity, and craftsmanship. Our team is passionate about protecting
          your home and ensuring your peace of mind.
        </p>
      </div>

      {/* Company Description */}
      <div className="py-12 px-4 md:px-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-[#163026]">Who We Are</h3>
        <p className="text-lg text-[#1A2E25] mb-6 leading-relaxed">
          Irvine Roofing Experts is a locally owned and operated company
          specializing in residential and commercial roofing services. Our
          skilled professionals use only the highest quality materials and the
          latest techniques to deliver lasting results. We pride ourselves on
          transparent communication, fair pricing, and exceptional customer
          service.
        </p>
        <p className="text-lg text-[#1A2E25] leading-relaxed">
          Whether you need a minor repair, a full roof replacement, or regular
          maintenance, we approach every project with the same level of care and
          attention to detail. Your satisfaction is our top priority.
        </p>
      </div>

      {/* Values / Mission Section */}
      <div className="bg-[#faf8ee] py-12 px-4 md:px-20">
        <h3 className="text-3xl font-bold mb-8 text-center text-[#163026]">
          Our Mission & Values
        </h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-lg text-[#163026] text-center flex flex-col items-center">
            <span className="material-icons text-4xl mb-2 text-[#EAAA00]">
              verified
            </span>
            <div className="font-bold mb-2">Quality Craftsmanship</div>
            <div>
              We use the best materials and skilled workmanship to ensure every
              roof stands the test of time.
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-lg text-[#163026] text-center flex flex-col items-center">
            <span className="material-icons text-4xl mb-2 text-[#EAAA00]">
              handshake
            </span>
            <div className="font-bold mb-2">Integrity & Trust</div>
            <div>
              Honesty and transparency guide every interaction, from the first
              estimate to project completion.
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-lg text-[#163026] text-center flex flex-col items-center">
            <span className="material-icons text-4xl mb-2 text-[#EAAA00]">
              support_agent
            </span>
            <div className="font-bold mb-2">Customer Commitment</div>
            <div>
              Your satisfaction and safety are our highest priorities. We’re
              here for you every step of the way.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
