import React, { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="flex justify-between w-full py-4 text-left text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span>Accordion Item #{item}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4 text-gray-600">
              This is the {index + 1} item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
