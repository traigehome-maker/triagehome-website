import React from 'react';

const DeleteAccount = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primaryblue mb-6">
              Delete Your Account
            </h1>
            <div className="inline-block bg-blue-50 text-primaryblue px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
              Account Management
            </div>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed text-base md:text-lg">
            <p className="text-gray-700">
              At TriageHome, we value your privacy and give you full control over your data.
              If you no longer wish to use our services, you can request to delete your account
              and associated data permanently.
            </p>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                How to Delete Your Account
              </h3>
              <p className="mb-4">
                You can easily delete your account from within our application by following these steps:
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <ol className="list-decimal ml-6 space-y-3 font-medium text-gray-800">
                  <li>Log in to your account.</li>
                  <li>Navigate to your <strong>Settings</strong> or <strong>Profile</strong> section.</li>
                  <li>Locate and click on the <strong>Delete Account</strong> option.</li>
                  <li>Confirm your action.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                What gets deleted?
              </h3>
              <p className="mb-4">
                Upon submitting an account deletion request, the following information will be permanently removed from our active databases:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Your personal profile data (Name, Phone number, Address).</li>
                <li>Security credentials and authentication records.</li>
                <li>Uploaded documents and identity verifications.</li>
                <li>Service request history and logs (except where retention is legally mandated).</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                Data Deletion Timeline
              </h3>
              <p className="text-gray-700">
                Your account and all associated personal data will be completely and permanently deleted within <strong>24 hours</strong> of your request.
                Please ensure you have saved any necessary information prior to requesting deletion, as this action cannot be reversed.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primaryblue text-xl mb-3">
                Need Assistance?
              </h3>
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 inline-block w-full text-center sm:text-left sm:w-auto">
                <p className="mb-4 text-gray-700 italic">
                  If you encounter any issues deleting your account via the application or web portal, please send us a direct email request:
                </p>
                <p className="font-bold text-gray-900">TriageHome Support</p>
                <p className="mt-2 text-primaryblue font-medium">📧 traigehome@gmail.com</p>
              </div>
            </section>

            <div className="pt-10 mt-10 border-t border-gray-100 text-center flex flex-col items-center">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Direct Deletion Request</h4>
              <p className="text-gray-600 mb-6 max-w-lg">
                Alternatively, you can request an account deletion by emailing our support team directly. We will process your request within 24 hours.
              </p>
              <a 
                href="mailto:traigehome@gmail.com?subject=Account Deletion Request&body=Hello TriageHome Support,%0D%0A%0D%0AI would like to formally request the permanent deletion of my account and all associated data.%0D%0A%0D%0AMy registered email is: [Insert your email address here]%0D%0A%0D%0AThank you."
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-sm transition-colors duration-200"
              >
                Request Account Deletion via Email
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default DeleteAccount;
