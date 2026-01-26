"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ isOpen, onClose }) => {
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
                Terms and Conditions
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
              <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <p className="font-bold text-primaryblue">Last Updated: 26 January 2026</p>
                  <p className="mt-2 text-sm">
                    These Terms and Conditions (&lsquo;Terms&rsquo;) govern your access to and use of the TriageHome website (triage-home.com) and all related services (collectively, the &lsquo;Platform&rsquo;). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, please do not use the Platform.
                  </p>
                </div>

                <div className="space-y-6">
                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">1. About TriageHome</h3>
                    <p>
                      TriageHome is an innovative technology marketplace designed to improve healthcare access by connecting patients with verified and independently licensed clinical providers, including nurses, health assistants, caregivers, and other related professionals for in-home healthcare services.
                    </p>
                    <p className="mt-2">
                      TriageHome does not provide medical care directly. We facilitate connections and access between users, patients and independent clinical providers.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">2. Eligibility</h3>
                    <p>To use the Platform, you must:</p>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Be at least 18 years old</li>
                      <li>Have the legal capacity to enter into a binding agreement</li>
                    </ul>
                    <p className="mt-2">By using the Platform, you represent and warrant that you meet these requirements.</p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">3. User Accounts</h3>
                    <p>To access certain features, you may be required to create an account.</p>
                    <p className="mt-2 font-semibold">You agree to:</p>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Keep your login credentials secure</li>
                      <li>Notify us immediately of any unauthorized use of your account</li>
                    </ul>
                    <p className="mt-2 italic">TriageHome is not responsible for any loss or damage resulting from unauthorized access to your account.</p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">4. Healthcare or Clinical Services Disclaimer</h3>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>TriageHome is not a hospital, clinic, or medical provider.</li>
                      <li>All healthcare services are provided by independent, third-party clinical providers.</li>
                      <li>TriageHome does not diagnose, treat, or prescribe medical conditions.</li>
                      <li>Users acknowledge that medical outcomes depend on multiple factors and that TriageHome does not guarantee treatment results.</li>
                      <li>In case of a medical emergency, users should contact local emergency services immediately.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">5. Use of the Platform</h3>
                    <p className="font-semibold">You agree not to:</p>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Use the Platform for unlawful or fraudulent purposes</li>
                      <li>Misrepresent your identity or qualifications</li>
                      <li>Interfere with the security or operation of the Platform</li>
                      <li>Upload harmful, false, or misleading content</li>
                      <li>Attempt to access data or accounts not belonging to you</li>
                    </ul>
                    <p className="mt-2">We reserve the right to suspend or terminate access for violations of these Terms.</p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">6. Payments and Fees</h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Payments for services are processed through Paystack or another fintech provider.</li>
                      <li>Prices, fees, and payment terms will be displayed before confirmation.</li>
                      <li>TriageHome may charge service or platform fees where applicable.</li>
                      <li>Refunds, if any, are subject to our refund policy and the circumstances of the transaction.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">7. Cancellations and Appointments</h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Users may cancel appointments subject to the cancellation terms displayed at booking.</li>
                      <li>Clinical providers may cancel appointments due to unforeseen circumstances.</li>
                      <li>TriageHome is not liable for losses arising from cancellations beyond our control.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">8. User Content</h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>You retain ownership of content you submit, including medical information and communications.</li>
                      <li>By submitting content, you grant TriageHome a limited, non-exclusive license to use such content solely for operating and improving the Platform.</li>
                      <li>You are responsible for ensuring that any content you provide is lawful and accurate.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">9. Data Protection and Privacy</h3>
                    <p>
                      Your use of the Platform is subject to our Privacy Policy, which explains how we collect, use, and protect personal and medical data in compliance with the Nigeria Data Protection Act (NDPA).
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">10. Account Suspension and Termination</h3>
                    <p className="font-semibold">We may suspend or terminate your account if you:</p>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Violate these Terms</li>
                      <li>Engage in fraudulent or harmful conduct</li>
                      <li>Misuse the Platform</li>
                    </ul>
                    <p className="mt-2">You may request account deletion at any time by contacting us.</p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">11. Limitation of Liability</h3>
                    <p>To the maximum extent permitted by law:</p>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>TriageHome shall not be liable for any indirect, incidental, or consequential damages</li>
                      <li>We are not responsible for acts, omissions, or negligence of third-party healthcare providers</li>
                    </ul>
                    <p className="mt-2 italic">Your use of the Platform is at your own risk.</p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">12. Indemnification</h3>
                    <p>
                      You agree to indemnify and hold harmless TriageHome, its directors, officers, employees, and partners from any claims, losses, or damages arising out of your use of the Platform or violation of these Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">13. Intellectual Property</h3>
                    <p>
                      All content, trademarks, logos, and materials on the Platform are owned by or licensed to TriageHome and may not be used without prior written consent.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">14. Modifications to the Terms</h3>
                    <p>
                      We may update these Terms at any time. Changes will be effective upon posting. Continued use of the Platform constitutes acceptance of the updated Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">15. Governing Law</h3>
                    <p>
                      These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">16. Contact Us</h3>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                      <p>For questions or concerns regarding these Terms and conditions, please contact us:</p>
                      <p className="mt-2 font-bold">TriageHome</p>
                      <p>Lagos, Nigeria</p>
                      <p>📧 traigehome@gmail.com</p>
                    </div>
                  </section>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="italic font-medium text-center text-gray-900 bg-gray-50 p-4 rounded-xl border border-gray-200">
                    By using the TriageHome Platform, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                  </p>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400 font-medium pb-4">
                  <span>Version: 2.0</span>
                  <span>Effective Date: 26 January 2026</span>
                </div>
              </div>
            </div>

            {/* Footer button */}
            <div className="p-6 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="bg-primaryblue text-white px-8 py-3 rounded-full font-bold hover:bg-primaryblue/90 transition-all shadow-lg hover:shadow-primaryblue/20"
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TermsAndConditionsModal;
