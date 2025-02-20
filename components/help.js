import { useState } from "react";

const HelpSupport = () => {
  const [selectedCategory, setSelectedCategory] = useState("Partner Onboarding");
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = ["Partner Onboarding", "Legal", "FAQs", "Instamart Onboarding"];

  const faqs = {
    "Partner Onboarding": [
      {
        question: "I want to partner my restaurant with FoodKart",
        answer: "You can register your restaurant on FoodKart by visiting our partner page and filling out the necessary details."
      },
      {
        question: "What are the mandatory documents needed to list my restaurant on FoodKart?",
        answer: "FSSAI license, GST registration, PAN card, and bank details are required to list your restaurant."
      },
      {
        question: "I want to opt-out from Google reserve",
        answer: "You can opt-out of Google Reserve by contacting our support team through the FoodKart Partner app."
      },
      {
        question: "After I submit all documents, how long will it take for my restaurant to go live on FoodKart?",
        answer: "It usually takes 3-5 working days for the verification and approval process to complete."
      },
      {
        question: "What is this one-time Onboarding fee? Do I have to pay for it while registering?",
        answer: "The onboarding fee covers setup and verification charges. You will be notified about the fee during registration."
      },
      {
        question: "Who should I contact if I need help & support in getting onboarded?",
        answer: "You can reach out to FoodKart Partner Support through the FoodKart Partner app or email us at partnersupport@foodkart.in."
      }
    ],
    "Legal": [
      {
        question: "What are the legal terms for partnering with FoodKart?",
        answer: "FoodKart’s legal terms include commission structures, payment cycles, and policies related to cancellations and refunds. You can read more in the FoodKart Partner Agreement."
      },
      {
        question: "How does FoodKart handle customer complaints?",
        answer: "FoodKart investigates complaints thoroughly and takes necessary action, which may include refunds, warnings, or delisting of vendors in severe cases."
      }
    ],
    "FAQs": [
      {
        question: "How can I track my orders?",
        answer: "You can track your orders in real-time using the FoodKart app under the 'My Orders' section."
      },
      {
        question: "How do I cancel an order?",
        answer: "To cancel an order, go to 'My Orders', select the order, and choose 'Cancel Order'. Cancellation policies apply."
      },
      {
        question: "What are the refund policies?",
        answer: "Refunds depend on the reason for cancellation. If the restaurant has not started preparing your order, you are eligible for a full refund."
      }
    ],
    "Instamart Onboarding": [
      {
        question: "How can I list my products on FoodKart Instamart?",
        answer: "To list your products, you need to register as a vendor on FoodKart Instamart and upload your product catalog."
      },
      {
        question: "What are the commission charges for Instamart vendors?",
        answer: "Commission charges vary based on product category and location. You can check the vendor agreement for more details."
      }
    ]
  };

  return (
    <div className="help-container">
      <h1 className="title">Help & Support</h1>
      <p className="subtitle">Let's take a step ahead and help you better.</p>

      <div className="help-content">
        {/* Sidebar */}
        <aside className="sidebar">
          {categories.map((category) => (
            <div
              key={category}
              className={`sidebar-item ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <div className="faq-section">
          <h2>{selectedCategory}</h2>
          {faqs[selectedCategory].map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                {faq.question}
                <span className="faq-icon">{openQuestion === index ? "⬆️" : "⬇️"}</span>
              </div>
              {openQuestion === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
