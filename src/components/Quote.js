import React from 'react'
import {useEffect, useState} from 'react';
import './_quote.scss';


const Quote = () => {
  const [quote, setQuote] = useState({ content: '', author: ''});

  const loadQuote = async () => {
    try {
      const response = await fetch ('https://api.quotable.io/random');
      const data = await response.json();
      setQuote( {
          quote: data.content,
          author: data.author,
        });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadQuote();
  }, [])

  return (
    <div className='quote-container'>
      <p className='quote-author'>{quote.author}</p>
      <div>
        <h1 className='quote-phrase'>"{quote.quote}"</h1>
      </div>
      <button className='quote-button' onClick={ () => loadQuote() }></button>
    </div>
  );
};

export default Quote;