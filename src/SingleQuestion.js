import React from "react";
import { FaCaretDown } from "react-icons/fa";

function SingleQuestion({ question, answer }) {
  return (
    <div className="single">
      <div className="question">
        <p>{question}</p>
        <button className="icon">
          <FaCaretDown />
        </button>
      </div>
      <div className="answer display">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default SingleQuestion;
