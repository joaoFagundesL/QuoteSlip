import React from 'react'
import {useEffect, useState} from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);

  const loadQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    loadQuote();
  }, [])

  return(
    <div>
      <h1>{quote}</h1>
      <button onClick={ () => loadQuote() }>Click</button>
    </div>
  );
};

export default Quote;