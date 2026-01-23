"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 px-6 md:px-0"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-3xl z-[101] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-primaryblue p-6 md:p-8 flex items-center justify-between text-white">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                Platform Use Disclaimer & Limitation of Liability
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <p className="font-medium text-primaryblue flex items-center gap-2">
                    <span className="w-2 h-2 bg-primaryblue rounded-full"></span>
                    Purpose
                  </p>
                  <p className="mt-1">
                    To clearly state that clinical providers use the platform at their own risk and to limit the company&apos;s liability for certain actions of its users.
                  </p>
                  <p className="mt-2 font-bold text-red-600">
                    Important: Please read this disclaimer carefully.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-primaryblue text-lg">Platform as a Marketplace</h3>
                    <p>
                      TriageHome operates as a technology platform to connect independent, licensed clinical providers with patients. We are not a healthcare provider and do not employ the clinical providers on our platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-primaryblue text-lg">Clinical Provider’s Responsibility</h3>
                    <p>
                      Clinical providers are independent professionals solely responsible for the quality and appropriateness of the healthcare services they provide. They are required to maintain their own professional liability insurance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-primaryblue text-lg">Use at Your Own Risk</h3>
                    <p>
                      Clinical providers use the TriageHome platform at their own risk. While we verify credentials, we cannot guarantee the outcome of any service or be held liable for the acts, errors, or omissions of independent clinical providers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-primaryblue text-lg">Limitation of Liability</h3>
                    <p>
                      To the fullest extent permitted by law, TriageHome shall not be liable for any indirect, incidental, special, or consequential damages arising out of or relating to the use of the platform.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="italic font-medium text-center text-gray-900 bg-gray-50 p-4 rounded-xl border border-gray-200">
                    By creating an account and using the TriageHome app, you acknowledge and agree to these terms.
                  </p>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                  <span>Policy Version: 1.0</span>
                  <span>Effective Date: January 23, 2026</span>
                </div>
              </div>
            </div>

            {/* Footer button */}
            <div className="p-6 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="bg-primaryblue text-white px-8 py-3 rounded-full font-bold hover:bg-primaryblue/90 transition-all shadow-lg hover:shadow-primaryblue/20"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
