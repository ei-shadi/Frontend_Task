"use client";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { MapPin, Mail} from "lucide-react";
import { PiPhoneCall } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="px-6 py-12 flex flex-col xl:flex-row justify-between ">
        
        {/* Logo + Social */}
        <div>
          <h2 className="text-xl font-bold mb-4">Business Logo</h2>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-black hover:text-[#1877F2] transition-colors"
            >
              <FaFacebook size={22} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-black hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedinIn size={22} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-black hover:text-[#1DA1F2] transition-colors"
            >
              <FaTwitter size={22} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-black hover:text-[#E4405F] transition-colors"
            >
              <FaInstagram size={22} />
            </Link>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Plumbing</Link></li>
            <li><Link href="#" className="hover:underline">Drainage</Link></li>
            <li><Link href="#" className="hover:underline">Bathrooms</Link></li>
            <li><Link href="#" className="hover:underline">Commercial</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <div className="flex items-center gap-10">

          <div>
            <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="hover:underline">Updates</Link></li>
            <li><Link href="#" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Rates</Link></li>
          </ul>
          </div>

          <div>
            <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="hover:underline">Updates</Link></li>
            <li><Link href="#" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Rates</Link></li>
          </ul>
          </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <MapPin size={18} className="text-gray-600 mt-1" />
              <span>1 Sail Street, London, SE11 6NQ</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-gray-600" />
              <Link href="mailto:enquiries@PlumbingPros.com" className="hover:underline">
                enquiries@PlumbingPros.com
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <PiPhoneCall size={18} className="text-gray-600" />
              <Link href="tel:02045276474" className="hover:underline">
                020 4527 6474
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
};

export default Footer;
