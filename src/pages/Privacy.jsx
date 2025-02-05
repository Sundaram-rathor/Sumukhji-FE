import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto text-gray-800">
      {/* Navbar */}
      <div className="bg-zinc-800 p-4 sm:p-6">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-8 lg:px-24 xl:px-44 mt-16 sm:mt-24">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to SumukhJi. We value your privacy and are committed to protecting your personal information.
        </p>

        {[
          { title: "1. Information We Collect", content: "We collect information such as your name, email, phone number, shipping address, and payment details when you make a purchase or register on our website." },
          {
            title: "2. How We Use Your Information",
            content: (
              <ul className="list-disc pl-6">
                <li>To process transactions and deliver orders</li>
                <li>To improve our website and customer service</li>
                <li>To send promotional emails (you can opt out anytime)</li>
                <li>To comply with legal obligations</li>
              </ul>
            ),
          },
          { title: "3. Data Protection & Security", content: "We implement security measures to safeguard your personal data from unauthorized access and misuse. However, no online transaction is 100% secure." },
          { title: "4. Sharing of Information", content: "We do not sell or trade your personal data. However, we may share it with trusted third parties such as payment gateways and delivery partners to fulfill your orders." },
          { title: "5. Cookies", content: "We use cookies to enhance user experience. You can modify your browser settings to disable cookies." },
          { title: "6. Your Rights", content: "As per Indian laws, you have the right to access, modify, or request deletion of your personal data. Contact us for any such requests." },
          { title: "7. Changes to This Policy", content: "We may update this privacy policy from time to time. Any changes will be posted on this page." },
          { title: "8. Contact Us", content: "If you have any questions about this privacy policy, please contact us at sumukhship@gmail.com." },
        ].map((section, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">{section.title}</h2>
            <p className="mt-2 text-sm sm:text-base">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
