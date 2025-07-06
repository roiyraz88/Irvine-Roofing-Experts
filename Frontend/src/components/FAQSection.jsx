/* eslint-disable */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How fast will I get offers?",
    a: "You'll receive multiple roofing quotes straight to your email or phone within minutes of submitting your request.",
  },
  {
    q: "Do I need to call each contractor myself?",
    a: "Nope! We send your request to trusted professionals in your area. They'll reach out to you directly.",
  },
  {
    q: "Is the service really free?",
    a: "Yes, 100% free. You just send your request and compare offers — no obligation, no hidden fees.",
  },
  {
    q: "What if I need a specific type of roofing?",
    a: "You can specify the issue or request when submitting the form, and we'll match you with relevant experts.",
  },
  {
    q: "Can I get offers even for small fixes?",
    a: "Absolutely. Whether it's a minor leak or a full replacement, we'll find professionals ready to help.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <motion.section
      className="py-16 bg-gray-50"
      id="faq"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 max-w-2xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#EAAA00]">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow p-4"
              layout
              transition={{ layout: { duration: 0.4, type: "spring" } }}
            >
              <button
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-[#163026] focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.q}
                <ChevronDown
                  className={`ml-2 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  color="#163026"
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="pt-2 text-gray-700"
                    >
                      {faq.a}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
