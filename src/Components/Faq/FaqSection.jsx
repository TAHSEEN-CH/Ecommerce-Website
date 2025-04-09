import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = () => {
  const faqs = [
    {
      question: "Mauris Congue Euismod Purus At Semper?",
      answer:
        "Aliquam pulvinar lacus eu leo mattis venenatis. Suspendisse potenti. Curabitur mollis aliquet dignissim. Aliquam mattis lectus ac nulla blandit, ac maximus nisi viverra.",
    },
    {
      question: "Donec Mattis Finibus Elit Ut Tristique?",
      answer:
        "Aliquam id egestas lacus. Nam efficitur purus at laoreet fringilla. Etiam venenatis eget metus ultricies eleifend.",
    },
    {
      question: "Aenean Elit Orci, Efficitur Quis Nisl?",
      answer:
        "Suspendisse potenti. Curabitur mollis aliquet dignissim. Aliquam mattis lectus ac nulla blandit, ac maximus nisi viverra.",
    },
    {
      question: "Pellentesque Habitant Morbi Tristique?",
      answer:
        "Aliquam pulvinar lacus eu leo mattis venenatis. Curabitur mollis aliquet dignissim.",
    },
    {
      question: "Nam Pellentesque Aliquam Metus?",
      answer:
        "Aliquam pulvinar lacus eu leo mattis venenatis. Suspendisse potenti. Curabitur mollis aliquet dignissim. Aliquam mattis lectus ac nulla blandit, ac maximus nisi viverra.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-12 px-6 lg:px-24 ">
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-sx md:text-2xl font-semibold text-gray-900 mb-6">
          Below are frequently asked questions, you may find the answer for yourself
        </h2>
        <p className="text-[14px] sm:text-lg font-base text-gray-900 mb-6">
          Sed viverra eget tellus tristique egestas. Phasellus at odio bibendum, consectetur sapien non, lacinia lacus. Aliquam pretium, risus ac rhoncus vehicula, sem urna fermentum lorem, nec sodales lectus orci vel risus. Nulla et pharetra magna. Mauris vulputate tellus et orci luctus imperdiet.
        </p>

        {faqs.map((faq, index) => (
          <div key={index} className="relative border-b border-gray-300 bg-gray-100 mt-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center text-[12px] sm:text-xl w-full text-left px-4 py-4 font-medium text-gray-800 
                 hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              <span>{index + 1}. {faq.question}</span>
              {openIndex === index ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
