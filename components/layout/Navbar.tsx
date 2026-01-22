"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full border-b border-[#02385A]/10 sticky top-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "py-3 shadow-lg backdrop-blur-md bg-primaryblue/80"
          : "py-3 bg-primaryblue"
      }`}
    >
      <div className="flex items-center max-w-7xl mx-auto justify-between px-4 lg:px-0">
        {/* Logo */}
        <Image
          src="/triagelogowhite.png"
          alt="Triage Logo"
          width={161}
          height={40}
          priority
        />

        {/* Desktop Links */}
        <div className="hidden text-white font-normal text-base md:flex gap-12">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="#how-it-works">How it Works</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="drop-shadow-2xl">Join the Waitlist</Button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X size={32} />
          ) : (
            <IoMenu size={32} className="w-16 h-7 text-white" />
          )}
        </button>
      </div>

      {/* ✅ Mobile Dropdown */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-6 p-6 border-t">
          <Link onClick={() => setOpen(false)} href="/">
            Home
          </Link>

          <Link onClick={() => setOpen(false)} href="/about">
            About Us
          </Link>

          <Link onClick={() => setOpen(false)} href="#how-it-works">
            How it Works
          </Link>

          <Link onClick={() => setOpen(false)} href="/contact">
            Contact Us
          </Link>

          <Link href="#waitlist"><Button className="w-full mt-2">Join the Waitlist</Button></Link>
        </div>
      </div>
    </motion.nav>
  );
}
