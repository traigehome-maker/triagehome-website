import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#02385A] max-md:px-2 text-white py-10 md:py-16 "
    >
      <div className="md:w-6xl max-md:space-y-5 mx-auto flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <Image
            src="/triagelogowhite.png"
            alt="Triage Logo"
            width={173}
            height={42}
          />
          <p className="mt-5 md:mt-16">
            Support: <a href="triage@gmail.com">triage@gmail.com</a>
          </p>
          <p>(Available: 10:00am - 07:00pm)</p>
        </div>
        <div className=" text-white font-medium text-sm hover:-underline-offset-1 grid  gap-4 md:gap-12 ">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">How it Works</Link>
          <Link href="/">Be a Pioneer</Link>
        </div>

        <div className="space-y-4">
          <h4>Follow Us</h4>
          <div className="flex items-center gap-3">
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <IoLogoLinkedin />
            </Link>
            <Link href="/">
              <FaXTwitter />
            </Link>
          </div>
          <p>&copy;Triage 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
