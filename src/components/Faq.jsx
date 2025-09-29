"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer: "Yes, we may charge a small call out fee depending on your location and service.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer: "We aim to send out an engineer within 24 hours depending on availability.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer:
      "Turn off your water supply immediately and give us a call so we can send out an engineer as soon as possible.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-8 md:my-10 lg:my-[120px]">
      <h2 className="text-2xl md:text-[32px] lg:text-5xl font-bold text-center mb-8 md:mb-10 lg:mb-[120px]">
        Frequently asked questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`pb-4 cursor-pointer ${index !== faqs.length - 1 ? "border-b border-gray-200" : ""
              }`}
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[16px] md:text-xl lg:text-[28px] font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>

            {openIndex === index && (
              <p className="mt-3 mb-4 md:mt-5 md:mb-6 lg:mt-5 lg:mb-8 text-sm lg:text-lg text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
