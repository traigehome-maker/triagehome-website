import React from "react";

export const metadata = {
  title: "Terms and Conditions | TriageHome",
  description:
    "Read the Terms and Conditions governing your access to and use of the TriageHome platform.",
};

const TermsAndConditionsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primaryblue mb-6">
              Terms and Conditions
            </h1>
            <div className="inline-block bg-blue-50 text-primaryblue px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
              Last Updated: 26 January 2026
            </div>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed text-base md:text-lg">
            {/* Intro */}
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <p className="text-gray-700">
                These Terms and Conditions (&lsquo;Terms&rsquo;) govern your
                access to and use of the TriageHome website (triage-home.com)
                and all related services (collectively, the
                &lsquo;Platform&rsquo;). By accessing or using the Platform, you
                agree to be bound by these Terms. If you do not agree, please do
                not use the Platform.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  1. About TriageHome
                </h2>
                <p>
                  TriageHome is an innovative technology marketplace designed to
                  improve healthcare access by connecting patients with verified
                  and independently licensed clinical providers, including
                  nurses, health assistants, caregivers, and other related
                  professionals for in-home healthcare services.
                </p>
                <p className="mt-3">
                  TriageHome does not provide medical care directly. We
                  facilitate connections and access between users, patients and
                  independent clinical providers.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  2. Eligibility
                </h2>
                <p>To use the Platform, you must:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Be at least 18 years old</li>
                  <li>
                    Have the legal capacity to enter into a binding agreement
                  </li>
                </ul>
                <p className="mt-3">
                  By using the Platform, you represent and warrant that you meet
                  these requirements.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  3. User Accounts
                </h2>
                <p>
                  To access certain features, you may be required to create an
                  account.
                </p>
                <p className="mt-3 font-semibold">You agree to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Keep your login credentials secure</li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                </ul>
                <p className="mt-3 italic">
                  TriageHome is not responsible for any loss or damage resulting
                  from unauthorized access to your account.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  4. Healthcare or Clinical Services Disclaimer
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    TriageHome is not a hospital, clinic, or medical provider.
                  </li>
                  <li>
                    All healthcare services are provided by independent,
                    third-party clinical providers.
                  </li>
                  <li>
                    TriageHome does not diagnose, treat, or prescribe medical
                    conditions.
                  </li>
                  <li>
                    Users acknowledge that medical outcomes depend on multiple
                    factors and that TriageHome does not guarantee treatment
                    results.
                  </li>
                  <li>
                    In case of a medical emergency, users should contact local
                    emergency services immediately.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  5. Use of the Platform
                </h2>
                <p className="font-semibold">You agree not to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Use the Platform for unlawful or fraudulent purposes</li>
                  <li>Misrepresent your identity or qualifications</li>
                  <li>
                    Interfere with the security or operation of the Platform
                  </li>
                  <li>Upload harmful, false, or misleading content</li>
                  <li>
                    Attempt to access data or accounts not belonging to you
                  </li>
                </ul>
                <p className="mt-3">
                  We reserve the right to suspend or terminate access for
                  violations of these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  6. Payments and Fees
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Payments for services are processed through Paystack or
                    another fintech provider.
                  </li>
                  <li>
                    Prices, fees, and payment terms will be displayed before
                    confirmation.
                  </li>
                  <li>
                    TriageHome may charge service or platform fees where
                    applicable.
                  </li>
                  <li>
                    Refunds, if any, are subject to our refund policy and the
                    circumstances of the transaction.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  7. Cancellations and Appointments
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Users may cancel appointments subject to the cancellation
                    terms displayed at booking.
                  </li>
                  <li>
                    Clinical providers may cancel appointments due to unforeseen
                    circumstances.
                  </li>
                  <li>
                    TriageHome is not liable for losses arising from
                    cancellations beyond our control.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  8. User Content
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    You retain ownership of content you submit, including
                    medical information and communications.
                  </li>
                  <li>
                    By submitting content, you grant TriageHome a limited,
                    non-exclusive license to use such content solely for
                    operating and improving the Platform.
                  </li>
                  <li>
                    You are responsible for ensuring that any content you
                    provide is lawful and accurate.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  9. Data Protection and Privacy
                </h2>
                <p>
                  Your use of the Platform is subject to our Privacy Policy,
                  which explains how we collect, use, and protect personal and
                  medical data in compliance with the Nigeria Data Protection Act
                  (NDPA).
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  10. Account Suspension and Termination
                </h2>
                <p className="font-semibold">
                  We may suspend or terminate your account if you:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Violate these Terms</li>
                  <li>Engage in fraudulent or harmful conduct</li>
                  <li>Misuse the Platform</li>
                </ul>
                <p className="mt-3">
                  You may request account deletion at any time by contacting us.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  11. Limitation of Liability
                </h2>
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    TriageHome shall not be liable for any indirect, incidental,
                    or consequential damages
                  </li>
                  <li>
                    We are not responsible for acts, omissions, or negligence of
                    third-party healthcare providers
                  </li>
                </ul>
                <p className="mt-3 italic">
                  Your use of the Platform is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  12. Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless TriageHome, its
                  directors, officers, employees, and partners from any claims,
                  losses, or damages arising out of your use of the Platform or
                  violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  13. Intellectual Property
                </h2>
                <p>
                  All content, trademarks, logos, and materials on the Platform
                  are owned by or licensed to TriageHome and may not be used
                  without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  14. Modifications to the Terms
                </h2>
                <p>
                  We may update these Terms at any time. Changes will be
                  effective upon posting. Continued use of the Platform
                  constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  15. Governing Law
                </h2>
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of the Federal Republic of Nigeria.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-primaryblue text-xl mb-3">
                  16. Contact Us
                </h2>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 inline-block w-full text-center sm:text-left sm:w-auto">
                  <p className="mb-4 text-gray-700 italic">
                    For questions or concerns regarding these Terms and
                    Conditions, please contact us:
                  </p>
                  <p className="font-bold text-gray-900">TriageHome</p>
                  <p>Lagos, Nigeria</p>
                  <p className="mt-2 text-primaryblue font-medium">
                    📧 traigehome@gmail.com
                  </p>
                </div>
              </section>
            </div>

            {/* Footer note */}
            <div className="pt-10 mt-10 border-t border-gray-100">
              <p className="italic font-medium text-center text-gray-700 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                By using the TriageHome Platform, you acknowledge that you have
                read, understood, and agree to these Terms and Conditions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 font-medium pt-8 mt-8">
              <span>Version: 2.0</span>
              <span>Effective Date: 26 January 2026</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditionsPage;
