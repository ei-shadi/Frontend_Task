"use client";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { MapPin, Mail } from "lucide-react";
import { PiPhoneCall } from "react-icons/pi";

const Footer1 = () => {
  return (
    <footer>
      {/* Logo & Social Links */}
      <div className="pt-8 md:pt-10 xl:pt-[120px] flex flex-col xl:flex-row gap-8 md:gap-10 xl:gap-[80px] justify-center 2xl:justify-between">
        {/* Logo */}
        <div>
          <h2 className="text-xl md:text-[32px] font-bold mb-4 md:mb-7">Business Logo</h2>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-black hover:text-[#1877F2] transition-colors"
            >
              <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-black hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-black hover:text-[#1DA1F2] transition-colors"
            >
              <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-black hover:text-[#E4405F] transition-colors"
            >
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>
        </div>



        {/* Services & Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-[130px] xl:gap-20 text-sm text-[#2A2F32]">

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
                  <li><Link href="#" className="hover:underline">Customer Services</Link></li>
                  <li><Link href="#" className="hover:underline">Updates</Link></li>
                  <li><Link href="#" className="hover:underline">Locations</Link></li>
                  <li><Link href="#" className="hover:underline">Sitemap</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Info */}
        <div className="text-sm text-[#2A2F32] font-semibold">
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

      {/* Copy Right */}
      <div className="flex flex-col md:flex-row items-center justify-between text-[#2A2F32]/40 mt-8 mb-8 md:mt-10 md:mb-10 xl:mt-20 xl:mb-[60px] text-[10px] md:text-sm gap-2">
        <p>© Plumbing Pros. All Rights Reserved </p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
};

export default Footer1;