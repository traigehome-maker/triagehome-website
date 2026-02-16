"use client";

import  { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {  FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import TermsAndConditionsModal from "../modals/TermsAndConditionsModal";
import PrivacyPolicyModal from "../modals/PrivacyPolicyModal";

const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#023150] text-white pt-16 pb-8">
      <TermsAndConditionsModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      />
      <PrivacyPolicyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
      <Container>
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-10 md:gap-8 mb-16">
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="mb-2">
              <Image
                src="/triagelogowhite.png"
                alt="Triage Logo"
                width={160}
                height={40}
                className="w-auto h-8 md:h-10"
              />
            </Link>
            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base font-light">
              <p>HomeHealth Powered By People</p>
              <p>Triage&copy;2026. All Rights Reserved</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base font-light">
            <h4 className="font-bold text-xl text-white">Reach out</h4>
            <a href="mailto:traigehome@gmail.com" className="hover:text-white transition-colors w-fit">
                traigehome@gmail.com
              </a>
              <a href="tel:+234812345678" className="hover:text-white transition-colors w-fit">
                +234812345678
              </a>
          </div>

          {/* Column 2: Main Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl text-white">Company</h4>
            <Link href="/#services" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit">
              Our services
            </Link>
            <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit">
              How it works
            </Link>
            <Link href="/#faq" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit">
              FAQs
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit">
              About us
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit">
              Contact us
            </Link>
          </div>

          {/* Column 3: Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl text-white">Terms</h4>
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit text-left"
            >
              Privacy policy
            </button>
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit text-left"
            >
              Terms and Condition
            </button>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl text-white">Follow us</h4>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/triage.home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/2348131837183"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="X (WhatsApp)"
              >
                <FaWhatsapp size={24} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={24} />
              </a> */}
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a> */}
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a> */}
            </div>
          </div>
        </div>

        <p>Made In Africa</p>
        </div>

        {/* Optional Copyright - Layout doesn't explicitly show it but it's good practice */}
        {/* <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Triage Home. All rights reserved.
        </div> */}
      </Container>
    </footer>
  );
};

export default Footer;
