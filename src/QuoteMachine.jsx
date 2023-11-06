// src/QuoteMachine.js
import React, { useState, useEffect } from 'react';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      changeBackgroundColor();
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const changeBackgroundColor = () => {
    const colors = ['#FF5733', '#336BFF', '#33FF57', '#FF33C1', '#D533FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="fdiv" style={{ backgroundColor }} className={`random-bg`}>
      <h2>Random Quote Machine</h2>
      <div id="quote-box">
        <div id="text">
          <blockquote>{quote}</blockquote>
        </div>
        <div id="author">- {author}</div>
        <button id="new-quote" onClick={fetchQuote} style={{ backgroundColor }} className={`random-bg`}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `${quote} - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
      <div className='last'>
        <p> Random Quote Machine App </p>
        <p> Made with ❤ by Gift</p>
      </div>
      </div>
  );
};

export default QuoteMachine;
