import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = () => {
  const questions = [
    {
      ques: "Do you offer freelancers?",
      ans: "Yes, we offer freelancers",
    },
    {
      ques: "What’s the guarantee that I will be satisfied with the hired talent?",
      ans: "We have a 100% satisfaction guarantee. If you are not satisfied with the talent you have hired, we will replace them for you at no additional cost.",
    },
    {
      ques: "Can I hire multiple talents at once?",
      ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      ques: "Why should I not go to an agency directly?",
      ans: "Agencies are great for certain projects, but they can be expensive and slow. We offer a more flexible and affordable solution for your project.",
    },
    {
      ques: "Who can help me pick a right skillset and duration for me?",
      ans: "Our team of experts can help you pick the right skillset and duration for your project. Just reach out to us and we will help you get started.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion w-[590px]">
      {questions.map((question, index) => (
        <div
          key={index}
          className="accordion-item transition-all my-4 duration-200 border-b border-[#D7D7D7]"
        >
          <div
            className={`accordion-header manrope text-[20px] flex justify-between p-4 cursor-pointer `}
            onClick={() => handleClick(index)}
          >
            {question.ques}
            <span
              className={`accordion-icon ml-[30px] transition duration-400 ease-in-out`}
            >
              {activeIndex !== index ? <FaPlus /> : <FaMinus />}
            </span>
          </div>
          <div
            className={`accordion-content manrope text-[15px] text-[#617275] p-4 ${
              activeIndex === index ? "opacity-100" : "opacity-0 hidden"
            } ${
              activeIndex === index
                ? "transition-opacity duration-500 delay-[200ms]"
                : ""
            }`}
          >
            {question.ans}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
