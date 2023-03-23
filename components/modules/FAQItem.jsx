import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b  py-4 md:py-6  " >
      <button
        className="w-full text-left font-semibold  text-lg focus:outline-none"
        onClick={toggleAnswer}
      >
        <div className='flex justify-between'> 
                <h1 className='font-bold text-sm '> {question}</h1>
        <p className={`ml-4 ${isOpen ? 'rotate-180' : ''} transition-transform duration-300 inline-block`}>
          ▼
        </p>
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p className='text-sm w-[80%rem] sm:w-full mx-auto'> {answer} </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
