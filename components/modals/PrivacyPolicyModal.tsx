"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
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
                Privacy Policy
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
              <div className="space-y-0 text-gray-700 leading-none text-sm md:text-base">
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <p className="font-bold text-primaryblue">
                    Last Updated: 26 January 2026
                  </p>
                  <p className="mt-2 text-sm">
                    TriageHome (&ldquo;we&rdquo;, &ldquo;us&rdquo;, and
                    &ldquo;our&rdquo;) respects the privacy of our users
                    (&ldquo;you&rdquo;, &ldquo;user&rdquo;). This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you visit or use our website
                    triage-home.com and any related services (collectively, the
                    &ldquo;Platform&rdquo;). Please read this Privacy Policy
                    carefully to understand our views and practices regarding
                    your personal data and how we treat it.
                  </p>
                  <p className="mt-2 text-xs font-bold text-red-600 uppercase">
                    IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY,
                    PLEASE DO NOT ACCESS OR USE THE PLATFORM.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-sm">
                    We reserve the right to make changes to this Privacy Policy
                    at any time. Any changes will be indicated by updating the
                    &lsquo;Last Updated&rsquo; date. Your continued use of the
                    Platform after such changes constitutes your acceptance of
                    the revised Privacy Policy.
                  </p>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      1. About TriageHome
                    </h3>
                    <p>
                      TriageHome is an innovative technology marketplace
                      designed to improve healthcare access by connecting
                      patients with verified and independently licensed clinical
                      providers, including nurses, health assistants,
                      caregivers, and other related professionals for in-home
                      healthcare services.
                    </p>
                    <p className="mt-2">
                      TriageHome is committed to protecting personal and medical
                      data in line with the Nigeria Data Protection Act 2023
                      (NDPA) and other applicable laws.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      2. Collection of Your Information
                    </h3>
                    <p>
                      We may collect information about you in various ways
                      depending on how you interact with the Platform.
                    </p>

                    <div className="mt-4 space-y-0">
                      <div>
                        <h4 className="font-semibold text-primaryblue">
                          a. Personal Data
                        </h4>
                        <p className="text-sm">
                          Personally identifiable information you voluntarily
                          provide to us, including:
                        </p>
                        <ul className="list-disc ml-5 mt-1 text-sm space-y-0">
                          <li>Full name, Email address, Phone number</li>
                          <li>Physical Address, Date of Birth</li>
                          <li>Government issued ID and or License Number</li>
                          <li>Account login details and Profile information</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primaryblue">
                          b. Medical and Health Data
                        </h4>
                        <p className="text-sm italic">
                          Due to the nature of our services, we may collect and
                          store sensitive medical information, including but not
                          limited to:
                        </p>
                        <ul className="list-disc ml-5 mt-1 text-sm space-y-0">
                          <li>Medical history, Symptoms and diagnoses</li>
                          <li>Treatment records, Care notes</li>
                        </ul>
                        <p className="mt-2 text-sm underlineDecoration">
                          Medical data is stored securely on our servers and is
                          accessible only to authorized users.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primaryblue">
                          c. Location Data
                        </h4>
                        <p className="text-sm">
                          We collect GPS or location-based information to match
                          patients with nearby clinical providers and enable
                          home service delivery.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primaryblue">
                          d. Financial Data
                        </h4>
                        <p className="text-sm">
                          Payment information is processed securely through
                          Paystack or another fintech provider. We do not store
                          your full card or banking details on our servers.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primaryblue">
                          e. Device and Usage Data
                        </h4>
                        <p className="text-sm">
                          Information automatically collected: Device type,
                          model, operating system, IP address, browser type, and
                          usage logs.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primaryblue">
                          f. Media Access
                        </h4>
                        <p className="text-sm">
                          With your permission, we may access Camera and
                          Microphone for profile photos or consultations.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primaryblue">
                          g. Push Notifications
                        </h4>
                        <p className="text-sm">
                          We may send notifications related to your account or
                          appointments. You can disable these in your settings.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      3. Use of Your Information
                    </h3>
                    <p>We use the information collected to:</p>
                    <ul className="list-disc ml-5 mt-1 space-y-0">
                      <li>Create and manage user accounts</li>
                      <li>
                        Facilitate connections between patients and clinical
                        providers
                      </li>
                      <li>
                        Deliver home healthcare services and process payments
                      </li>
                      <li>
                        Communicate regarding services, updates, or support
                      </li>
                      <li>
                        Improve platform functionality and monitor usage trends
                      </li>
                      <li>Comply with legal and regulatory obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      4. Disclosure of Your Information
                    </h3>
                    <p>
                      We do not share or disclose your personal or medical data
                      except in the following situations:
                    </p>
                    <ul className="list-disc ml-5 mt-2 space-y-0">
                      <li>
                        <span className="font-semibold">
                          Legal Obligations:
                        </span>{" "}
                        Where required by law or government request under
                        Nigerian law.
                      </li>
                      <li>
                        <span className="font-semibold">Service Delivery:</span>{" "}
                        Data shared between patients and assigned clinical
                        providers strictly for service.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Third-Party Providers:
                        </span>{" "}
                        Trusted partners (Paystack, hosting, analytics) who
                        comply with data laws.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Business Transfers:
                        </span>{" "}
                        In the event of a merger or acquisition, subject to
                        confidentiality.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      5. Cookies and Tracking Technologies
                    </h3>
                    <p>
                      We may use cookies to enhance user experience. You can
                      manage preferences through browser settings. We may
                      partner with vendors like Google Analytics to track
                      website use.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      6. Third-Party Websites and Advertising
                    </h3>
                    <p>
                      The Platform may contain links to third-party sites. We
                      are not responsible for their privacy practices. We may
                      use third-party advertising software to share ads.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      7. Security of Your Information
                    </h3>
                    <p>
                      We implement technical and physical security measures to
                      protect your data. However, no system is completely
                      secure, and we cannot guarantee absolute security.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      8. Marketing and Communications
                    </h3>
                    <p>
                      With your consent, we may share your information with
                      third parties for marketing purposes.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      9. Policy for Children
                    </h3>
                    <p>
                      TriageHome is intended for users 18 years and above. We do
                      not knowingly collect personal information from children
                      under 18. If discovered, it will be promptly deleted.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      10. Your Data Protection Rights
                    </h3>
                    <p>Under the NDPA 2023, you have the right to:</p>
                    <ul className="list-disc ml-5 mt-1 space-y-0">
                      <li>Access your personal data</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of your account and data</li>
                      <li>Withdraw consent where applicable</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      11. Account Deletion
                    </h3>
                    <p>
                      Users may request account deletion at any time via email.
                      We will deactivate or delete your account, subject to
                      legal retention requirements.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-primaryblue text-lg mb-2">
                      12. Contact Us
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                      <p>
                        If you have any questions or concerns regarding this
                        Privacy Policy:
                      </p>
                      <p className="mt-2 font-bold">Data Protection Officer</p>
                      <p>TriageHome</p>
                      <p>Lagos, Nigeria</p>
                      <p>📧 traigehome@gmail.com</p>
                    </div>
                  </section>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="italic font-medium text-center text-gray-900 bg-gray-50 p-4 rounded-xl border border-gray-200">
                    By using the TriageHome Platform, you acknowledge that you
                    have read and understood this Privacy Policy and agree to
                    its terms.
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
                I Understand
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
