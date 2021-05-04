import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function SingleQuestion({ question, answer }) {
  const [display, setDisplay] = useState(false);
  return (
    <div className={`single`}>
      <div className={`question ${display && "display"}`}>
        <p>{question}</p>
        <button
          className="icon"
          onClick={() => setDisplay((oldState) => !oldState)}
        >
          <FaCaretDown />
        </button>
      </div>
      <div className={`answer ${display && "display"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default SingleQuestion;
