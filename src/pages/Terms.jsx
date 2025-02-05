import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto text-gray-800">
      {/* Navbar */}
      <div className="bg-zinc-800 p-4 sm:p-6">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-8 lg:px-24 xl:px-44 mt-16 sm:mt-24">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to SumukhJi. By using our website, you agree to abide by the following terms and conditions.
        </p>

        {[
          { title: "1. Use of the Website", content: "By accessing this website, you confirm that you are at least 18 years old or have parental consent to use our services." },
          { title: "2. Account Registration", content: "You are responsible for maintaining the confidentiality of your account information and for all activities under your account." },
          { title: "3. Product Information", content: "We strive to provide accurate product descriptions, but we do not warrant that product details are always complete, reliable, or error-free." },
          { title: "4. Pricing and Payments", content: "Prices are subject to change without notice. We accept various payment methods and ensure secure transactions through trusted payment gateways." },
          { title: "5. Order Cancellation & Refunds", content: "Orders can be canceled within 24 hours of placement. Refunds will be processed according to our refund policy." },
          { title: "6. Return Policy", content: "After the product is delivered there is no return policy." },
          { title: "7. Shipping & Delivery", content: "We endeavor to deliver products within the estimated timeframe. However, delays may occur due to unforeseen circumstances." },
          { title: "8. User Conduct", content: "Users must not engage in any illegal activities, infringement of intellectual property, or disruptive behavior on our platform." },
          { title: "9. Limitation of Liability", content: "We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website." },
          { title: "10. Amendments", content: "We reserve the right to modify these terms and conditions at any time. Continued use of our website implies acceptance of the updated terms." },
          { title: "11. Contact Us", content: "For any queries regarding these terms, please contact us at sumukhship@gmail.com." }
        ].map((section, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4">{section.title}</h2>
            <p className="mt-2 text-sm sm:text-base">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Footer Space */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default TermsAndConditions;
