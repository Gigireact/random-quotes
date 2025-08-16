import { useState, useEffect } from 'react';
import quotes from './json files/quotes.json';
import colors from './json files/colors.json';
import { FaXTwitter } from "react-icons/fa6"; 


const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const fetchQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random.text);
    setAuthor(random.author);
    changeBackgroundColor();
  };

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };
  
 
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id='fdiv' style={{ backgroundColor }} className={`random-bg`}>
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
          <FaXTwitter className='twit'/>
        </a>
      </div>
      
    </div>
  );
};

export default QuoteMachine;


 // try {
    //    const response = await fetch('https://zenquotes.io/api/random');
    //   const data = await response.json();
    //   setQuote(data.content);
    //   setAuthor(data.author);
    //   changeBackgroundColor();
    // } catch (error) {
    //   console.error('Error fetching quote:', error);
    // }