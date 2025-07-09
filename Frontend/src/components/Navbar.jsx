import React, { useState } from "react";
import logo from "../assets/navbar-image.png";
import { services } from "./ServiceGridServices";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#EAAA00] sticky top-0 z-50 w-full shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 focus:outline-none">
            <img src={logo} alt="Total Roofing Logo" className="h-14 w-auto" />
          </a>
        </div>
        <button
          className="md:hidden flex items-center px-2 py-1 text-[#1A2E25] focus:outline-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#1A2E25"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-base font-semibold text-[#1A2E25]">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="#services"
              className="hover:bg-[#FFD966] rounded px-3 py-1 transition-colors flex items-center gap-1 cursor-pointer select-none"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              SERVICES <span className="text-[18px] mt-[2px]">▼</span>
            </a>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-md z-50"
                style={{ marginTop: 0 }}
              >
                <ul className="py-2">
                  {services.map((service) => (
                    <li key={service.title}>
                      <a
                        href={`/services/${service.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")}`}
                        className="block px-5 py-2 text-[#1A2E25] hover:bg-[#FFD966] transition-colors"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className="hover:bg-[#FFD966] rounded px-3 py-1 transition-colors flex items-center gap-1"
          >
            ABOUT US
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EAAA00] px-4 pb-4 pt-2 shadow-lg border-t border-[#FFD966] animate-fade-in-down">
          <div className="flex flex-col gap-2">
            <div className="relative">
              <button
                className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-[#FFD966] font-semibold text-[#1A2E25]"
                onClick={() => setServicesOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                SERVICES <span className="text-[18px] mt-[2px]">▼</span>
              </button>
              {servicesOpen && (
                <div className="bg-white shadow-lg rounded-md mt-1 z-50">
                  <ul className="py-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <a
                          href={`/services/${service.title
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")}`}
                          className="block px-5 py-2 text-[#1A2E25] hover:bg-[#FFD966] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="w-full px-3 py-2 rounded hover:bg-[#FFD966] font-semibold text-[#1A2E25] text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
