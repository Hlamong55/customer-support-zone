import { FaXTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
  <footer className="bg-black text-gray-300 p-6 md:px-12 py-10">
    <div className="md:flex gap-10 justify-between container mx auto">
      <div className="lg:col-span-2">
        <h2 className="text-white font-bold text-lg mb-4">
          CS — Ticket System
        </h2>
        <p className="text-sm leading-6 w-[300px] text-[#A1A1AA]">
         CS — Ticket System simplifies customer support with smart ticket tracking.It connects teams and assigns issues to the right people quickly.Fast responses and clear updates build stronger customer trust.
        </p>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              Our Mission
            </a>
          </li>
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              Contact Saled
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Services</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              Products & Services
            </a>
          </li>
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              Customer Stories
            </a>
          </li>
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              Download Apps
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Information</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className="text-[#A1A1AA] hover:text-white">
              Join Us
            </a>
          </li>
        </ul>
      </div>

      <div className="sm:col-span-2 md:col-span-1 lg:col-auto">
        <h3 className="text-white font-semibold mb-4">Social Links</h3>
        <ul className="space-y-3 text-sm">

          <li className="flex items-center gap-2">
            <FaXTwitter className="text-lg" />
            <a href="#" className="text-[#A1A1AA] hover:text-white">
               @CS — Ticket System
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin className="text-lg" />
            <a href="#" className="text-[#A1A1AA] hover:text-white">
               @CS — Ticket System
            </a>
          </li>
          <li className="flex items-center gap-2"> 
            <FaFacebook className="text-lg" />
            <a href="#" className="text-[#A1A1AA] hover:text-white">
               @CS — Ticket System
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <a href="mailto:support@cst.com" className="text-[#A1A1AA] hover:text-white">
               support@cst.com
            </a>
          </li>

        </ul>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
      © 2025 CS — Ticket System. All rights reserved.
    </div>
  </footer>
  );
};

export default Footer;
