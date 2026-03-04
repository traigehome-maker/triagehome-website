"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { FaInstagram } from "react-icons/fa";
import { FaApple, FaWhatsapp } from "react-icons/fa6";
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
                            src="/triagewhite.svg"
                            alt="Triage Logo"
                            width={160}
                            height={40}
                            priority
                            className=" w-auto object-contain"
                          />
              </Link>
              <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base font-light">
                <p>HomeHealth Powered By People,</p>
                <p>
                  TriageHome making quality care accessible <br></br> anytime,
                  anywhere.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-gray-300 text-sm md:text-base font-light">
              <h4 className="font-bold text-xl text-white">Reach Out</h4>
              <a
                href="mailto:support@triage-home.com"
                className="hover:text-white transition-colors w-fit"
              >
                support@triage-home.com
              </a>
              <a
                href="tel:+2349134664547"
                className="hover:text-white transition-colors w-fit"
              >
                +234-9134664547
              </a>
            </div>

            {/* Column 2: Main Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-xl text-white">Company</h4>
              <Link
                href="/#services"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit"
              >
                Our Services
              </Link>
              <Link
                href="/#how-it-works"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit"
              >
                How it Works
              </Link>
              <Link
                href="/#faq"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit"
              >
                FAQs
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit"
              >
                Contact Us
              </Link>
            </div>

            {/* Column 3: Legal Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-xl text-white">About Us</h4>
              <Link
                href="/about/#corevalues"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit"
              >
                Our Core Values
              </Link>
              <Link
                href="/about/#team"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-light w-fit"
              >
                The Team
              </Link>
            </div>

            {/* Column 4: Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-xl text-white">Follow Us</h4>
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
                  href="https://wa.me/2349134664547"
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


              <div className="grid mt-5 gap-4">
                            <button
                              type="button"
                              className="flex w-fit items-center gap-2 bg-black rounded-lg py-1 px-2"
                            >
                              <Image
                                src="/icons/googleplay.png"
                                alt="Triage Home care"
                                height={25}
                                width={25}
                                className=""
                              />
                              <div className="text-white">
                                <p>Coming soon on</p>
                                <p>Google Play</p>
                              </div>
                            </button>
                            <button
                              type="button"
                              className="flex w-fit items-center gap-2 bg-black rounded-lg py-1 px-2"
                            >
                              <FaApple size={25} className="text-white" />
                              <div className="text-white">
                                <p>Coming soon on</p>
                                <p>App Store</p>
                              </div>
                            </button>
                          </div>
            </div>
          </div>
        </div>

        {/* Optional Copyright - Layout doesn't explicitly show it but it's good practice */}
        {/* <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Triage Home. All rights reserved.
        </div> */}
      </Container>

      <div className="border-t pt-2 border-white/10">
        <Container>
          <div className="flex max-md:flex-col text-gray-300 text-sm items-center justify-between">
            <span className=" ">Made In Africa</span>
            <div className="flex max-md:flex-col justify-between items-center gap-2 my-2 md:gap-4">
              
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="cursor-pointer "
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsOpen(true)}
                className=" cursor-pointer"
              >
                Terms and Conditions
              </button>
            </div>
            <span className="  text-sm">
              TriageHome©2026. All Rights Reserved
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
