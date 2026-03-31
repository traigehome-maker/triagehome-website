import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primaryblue mb-6">
              Privacy Policy
            </h1>
            <div className="inline-block bg-blue-50 text-primaryblue px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
              Last Updated: 26 January 2026
            </div>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed text-base md:text-lg">
            <p className="text-gray-700">
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
            <p className="font-bold text-red-600 uppercase">
              IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY,
              PLEASE DO NOT ACCESS OR USE THE PLATFORM.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy
              at any time. Any changes will be indicated by updating the
              &lsquo;Last Updated&rsquo; date. Your continued use of the
              Platform after such changes constitutes your acceptance of
              the revised Privacy Policy.
            </p>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
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
              <p className="mt-3">
                TriageHome is committed to protecting personal and medical
                data in line with the Nigeria Data Protection Act 2023
                (NDPA) and other applicable laws.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                2. Collection of Your Information
              </h3>
              <p className="mb-4">
                We may collect information about you in various ways
                depending on how you interact with the Platform.
              </p>

              <div className="grid gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-primaryblue text-lg mb-2">
                    a. Personal Data
                  </h4>
                  <p className="mb-2">
                    Personally identifiable information you voluntarily
                    provide to us, including:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Full name, Email address, Phone number</li>
                    <li>Physical Address, Date of Birth</li>
                    <li>Government issued ID and or License Number</li>
                    <li>Account login details and Profile information</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-primaryblue text-lg mb-2">
                    b. Medical and Health Data
                  </h4>
                  <p className="mb-2 italic">
                    Due to the nature of our services, we may collect and
                    store sensitive medical information, including but not
                    limited to:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-3">
                    <li>Medical history, Symptoms and diagnoses</li>
                    <li>Treatment records, Care notes</li>
                  </ul>
                  <p className="underline decoration-gray-300 underline-offset-4">
                    Medical data is stored securely on our servers and is
                    accessible only to authorized users.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-primaryblue text-lg mb-2">
                    c. Location Data
                  </h4>
                  <p>
                    We collect GPS or location-based information to match
                    patients with nearby clinical providers and enable
                    home service delivery.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-primaryblue text-lg mb-2">
                    d. Financial Data
                  </h4>
                  <p>
                    Payment information is processed securely through
                    Paystack or another fintech provider. We do not store
                    your full card or banking details on our servers.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-primaryblue text-lg mb-2">
                    e. Device and Usage Data
                  </h4>
                  <p>
                    Information automatically collected: Device type,
                    model, operating system, IP address, browser type, and
                    usage logs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-primaryblue text-lg mb-2">
                    f. Media Access
                  </h4>
                  <p>
                    With your permission, we may access Camera and
                    Microphone for profile photos or consultations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-primaryblue text-lg mb-2">
                    g. Push Notifications
                  </h4>
                  <p>
                    We may send notifications related to your account or
                    appointments. You can disable these in your settings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                3. Use of Your Information
              </h3>
              <p className="mb-2">We use the information collected to:</p>
              <ul className="list-disc ml-6 space-y-2">
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
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                4. Disclosure of Your Information
              </h3>
              <p className="mb-3">
                We do not share or disclose your personal or medical data
                except in the following situations:
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong className="text-gray-900">Legal Obligations:</strong>{" "}
                  Where required by law or government request under
                  Nigerian law.
                </li>
                <li>
                  <strong className="text-gray-900">Service Delivery:</strong>{" "}
                  Data shared between patients and assigned clinical
                  providers strictly for service.
                </li>
                <li>
                  <strong className="text-gray-900">Third-Party Providers:</strong>{" "}
                  Trusted partners (Paystack, hosting, analytics) who
                  comply with data laws.
                </li>
                <li>
                  <strong className="text-gray-900">Business Transfers:</strong>{" "}
                  In the event of a merger or acquisition, subject to
                  confidentiality.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
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
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                6. Third-Party Websites and Advertising
              </h3>
              <p>
                The Platform may contain links to third-party sites. We
                are not responsible for their privacy practices. We may
                use third-party advertising software to share ads.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                7. Security of Your Information
              </h3>
              <p>
                We implement technical and physical security measures to
                protect your data. However, no system is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                8. Marketing and Communications
              </h3>
              <p>
                With your consent, we may share your information with
                third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                9. Policy for Children
              </h3>
              <p>
                TriageHome is intended for users 18 years and above. We do
                not knowingly collect personal information from children
                under 18. If discovered, it will be promptly deleted.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                10. Your Data Protection Rights
              </h3>
              <p className="mb-2">Under the NDPA 2023, you have the right to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                11. Account Deletion
              </h3>
              <p>
                Users may request account deletion at any time via email.
                We will deactivate or delete your account, subject to
                legal retention requirements.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                12. Contact Us
              </h3>
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 inline-block w-full text-center sm:text-left sm:w-auto">
                <p className="mb-4 text-gray-700 italic">
                  If you have any questions or concerns regarding this
                  Privacy Policy:
                </p>
                <p className="font-bold text-gray-900">Data Protection Officer</p>
                <p>TriageHome</p>
                <p>Lagos, Nigeria</p>
                <p className="mt-2 text-primaryblue font-medium">📧 traigehome@gmail.com</p>
              </div>
            </section>

            <div className="pt-10 mt-10 border-t border-gray-100">
              <p className="italic font-medium text-center text-gray-700 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                By using the TriageHome Platform, you acknowledge that you
                have read and understood this Privacy Policy and agree to
                its terms.
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

export default PrivacyPolicy;
