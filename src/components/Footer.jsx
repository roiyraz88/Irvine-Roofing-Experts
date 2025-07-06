import logo from "../assets/navbar-image.png";

const Footer = () => (
  <footer className="bg-[#EAAA00] text-black py-6 mt-auto">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
      
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="w-25 h-25 rounded p-1 mb-2 md:mb-0" />
      </div>

      <div className="flex-1 flex flex-col items-center text-center">
        <div className="flex gap-8 text-base font-semibold justify-center mb-2">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#cta" className="hover:text-white transition">Contact</a>
        </div>
        <div className="text-sm text-black">
          <div className="font-semibold">1234 Main St, Irvine, CA</div>
          <div className="font-semibold">
            (555) 123-4567 • info@irvineroofing.com
          </div>
          <div className="mt-1 text-white">
            &copy; {new Date().getFullYear()} Irvine Roofing. All rights reserved.
          </div>
          <div className="mt-1 text-white">
            This site is for informational purposes only. No offers or contracts are made via this website.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
