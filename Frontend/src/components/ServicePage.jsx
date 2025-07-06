import React, { useState } from "react";
import ModalForm from "./ModalForm";

const ServicePage = ({
  title,
  tagline,
  description,
  details,
  benefits,
  faqs,
  image,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-[#1A2E25]">
      {/* Hero Section */}
      <div className="bg-white py-16 px-4 md:px-20 flex flex-col items-center text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-[#163026]"
          style={{ letterSpacing: "-1px" }}
        >
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#163026]">
          {tagline}
        </h2>
        <p className="text-xl md:text-2xl font-medium mb-8 text-[#163026]">
          {description}
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-block bg-[#EAAA00] text-white font-bold rounded px-8 py-3 text-lg shadow-md hover:bg-[#cc9200] transition"
        >
          FREE ESTIMATE
        </button>
      </div>

      {/* Description / Details Section */}
      {details && (
        <div className="bg-[#f7f5e9] py-16 px-4 md:px-20 flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 max-w-2xl text-left text-[17px] leading-relaxed space-y-4">
            {details.map((item, i) => (
              <div key={i} className="mb-8">
                <h4 className="text-xl font-bold text-[#163026] mb-2 flex items-center gap-2">
                  {/* אייקון אם אתה רוצה להוסיף לפי שם */}
                  {item.icon && (
                    <span className="material-icons">{item.icon}</span>
                  )}
                  {item.title}
                </h4>
                <p className="text-[#1A2E25] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            <button
              onClick={() => setModalOpen(true)}
              className="inline-block bg-[#EAAA00] text-white font-bold rounded px-8 py-3 text-lg shadow-md hover:bg-[#cc9200] transition mt-6"
            >
              SCHEDULE AN APPOINTMENT
            </button>
          </div>

          {image && (
            <div className="flex-1 flex justify-center">
              <img
                src={image}
                alt={tagline}
                className="w-full max-w-xl rounded-lg shadow-xl object-cover"
                style={{ maxHeight: 400 }}
              />
            </div>
          )}
        </div>
      )}

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <div className="bg-[#faf8ee] py-16 px-4 md:px-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-[#163026]">
            Why Choose Us
          </h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 text-lg text-[#163026] text-left mx-auto"
                style={{
                  minHeight: "110px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <div className="bg-white py-20 px-6 md:px-20 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-center mb-10">FAQs</h3>
          <ul className="max-w-4xl mx-auto space-y-8">
            {faqs.map((faq, i) => (
              <li key={i}>
                <div className="font-semibold text-[#EAAA00] text-xl mb-2">
                  {faq.q}
                </div>
                <div className="text-gray-800 leading-relaxed text-lg">
                  {faq.a}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ModalForm open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default ServicePage;
