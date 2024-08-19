import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './RandomQuoteMachinePage.css';

function RandomQuoteMachinePage() {
  const [quote, setQuote] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://api.quotable.io/quotes?limit=150')
      .then(response => response.json())
      .then(data => {
        const quotesArray = data.results;
        setQuotes(quotesArray);
        if (quotesArray.length > 0) generateRandomQuote(quotesArray);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
        setQuote({
          text: 'Failed to fetch quotes. Please try again later.',
          author: ''
        });
      });
  }, []);

  const generateRandomQuote = (quotesArray) => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomIndex];
    setQuote({
      text: randomQuote.content,
      author: randomQuote.author || "Unknown"
    });
  };

  const handleNewQuote = () => {
    if (quotes.length === 0) return;
    generateRandomQuote(quotes);
  };

  return (
    <div>
      <NavBar />
      <div className="random-quote-machine">
        <div id="quote-box">
          <p id="text">"{quote.text}"</p>
          <p id="author">- {quote.author}</p>
          <div id='buttons'>
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <button id="new-quote" onClick={handleNewQuote}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomQuoteMachinePage;
