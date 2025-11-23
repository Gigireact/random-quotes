import { useState, useEffect } from 'react';
import quotes from './json files/quotes.json';
import colors from './json files/colors.json';
import { FaXTwitter } from "react-icons/fa6"; 

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [fade, setFade] = useState(false);

  const fetchQuote = () => {
    setFade(false);  

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setTimeout(() => {
      setQuote(random.text);
      setAuthor(random.author);
      setFade(true);
    }, 100);

    setBackgroundColor(randomColor);
    document.documentElement.style.setProperty('--dynamic-color', randomColor);

  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id='fdiv' style={{ backgroundColor }}>
      <div className='title'> Gift's Random Quote Machine App </div>
      <div id="quote-box" className={fade ? "fade" : ""}>
        <div id="text">
          <blockquote>{quote}</blockquote>
        </div>

        <div id="author">- {author}</div>

        <button id="new-quote" onClick={fetchQuote} style={{ backgroundColor }}>
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
          Tweet Quote <FaXTwitter className='twit'/>
        </a>
      </div>
    </div>
  );
};

export default QuoteMachine;
