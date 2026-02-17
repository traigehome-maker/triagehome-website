"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";

import { toast } from "react-toastify";

const WaitList = () => {
  const [formData, setFormData] = useState<{
    email: string;
    userType: string;
    services: string[];
  }>({
    email: "",
    userType: "",
    services: [],
  });

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServiceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);

    try {
      const response = await fetch(
        "/api/submit-form",
        // "/https://script.google.com/macros/s/AKfycbyHQepIJrWenTUtxlNCZ7aUonSj1M4mP6PIReotH5vdk7BK6du2B4v78g6Mj3a6JfQ0/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      console.log(data);
      // const response = await fetch("/api/waitlist", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // const data = await response.json().catch(() => ({}));
      // console.log(data)

      if (response.ok && data.success) {
        toast.success("Thank you for joining! We'll be in touch soon.");
        setFormData({
          email: "",
          userType: "",
          services: [],
        });
      } else {
        const errorMsg =
          data.error ||
          data.message ||
          "Something went wrong. Please try again.";
        toast.error(errorMsg);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to join waitlist. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const servicesOptions = [
    "Home Care",
    "Partnership (hospitals, clinics, etc...",
    "VIP Concierge",
  ];

  return (
    <section
      id="waitlist"
      className="md:max-w-7xl mx-auto  md:px-8 mb-10 md:mb-20"
    >
      <div className="bg-[#B67A26] rounded-4xl px-4 py-16 md:py-20 ">
        <div className=" flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Logo Pill */}
          <div className="bg-primaryblue px-8 py-2 rounded-2xl shadow-lg">
            <Image
              src="/triagelogowhite.png"
              alt="Triage Logo"
              width={161}
              height={40}
              priority
            />
          </div>

          <h3 className="text-2xl md:text-4xl text-white font-semibold mt-6 mb-4 drop-shadow-sm">
            Secure Your Spot, Join the Waitlist Now
          </h3>
          <p className="text-white/90 text-xs md:text-sm mb-10 font-light">
            Get exclusive access and be the first to know when we launch.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4"
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
              className="w-full bg-white rounded-full px-6 py-2 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#023150] shadow-sm transition-all"
            />

            <div className="relative">
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="w-full bg-white rounded-full px-6 py-2 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#023150] shadow-sm transition-all cursor-pointer"
              >
                <option value="" disabled className="text-gray-400">
                  Select account type
                </option>
                <option value="client">Client</option>
                <option value="clinical_provider">Clinical Provider</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="text-gray-600 w-5 h-5" />
              </div>
            </div>

            {/* Custom Multi-select Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className="w-full bg-white rounded-full px-6 py-2 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#023150] shadow-sm transition-all"
              >
                <span
                  className={`${
                    formData.services.length === 0
                      ? "text-gray-400"
                      : "text-gray-800"
                  } block truncate`}
                >
                  {formData.services.length === 0
                    ? "Select services"
                    : formData.services.join(", ")}
                </span>
                <ChevronDown className="text-gray-600 w-5 h-5 flex-shrink-0 ml-2" />
              </button>

              {isServiceDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-2xl shadow-xl overflow-hidden text-left p-2 border border-gray-100">
                  {servicesOptions.map((option) => {
                    const isSelected = formData.services.includes(option);
                    return (
                      <div
                        key={option}
                        onClick={() => toggleService(option)}
                        className={`flex items-center justify-between px-4 py-3 cursor-pointer rounded-xl transition-colors ${
                          isSelected
                            ? "bg-[#023150]/10 text-[#023150] font-medium"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <span>{option}</span>
                        {isSelected && (
                          <Check className="w-5 h-5 text-[#023150]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#023150] hover:bg-[#03446d] disabled:bg-[#023150]/70 disabled:cursor-not-allowed text-white font-medium text-lg px-6 py-3 rounded-full mt-4 transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Joining...
                </>
              ) : (
                "Join now"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitList;
