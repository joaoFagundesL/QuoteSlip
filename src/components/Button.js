import React from "react";
import './_button.scss';

const Button = ( {loadQuote} ) => {
  return (
    <button onClick={loadQuote} className="quote-button">
    </button>
  );
}

export default Button;