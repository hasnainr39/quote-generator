import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="quote-container">
      <h1>Quote Generator</h1>
      <Quote />
    </div>
  );
}

function Quote() {
  //State variables
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  function fetchQuote() {
    fetch("https://dummyjson.com/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const index = Math.floor(Math.random() * data.quotes.length);
        setQuote(data.quotes[index].quote);
        setAuthor(data.quotes[index].author);

        console.log(data);
        // For debugging purposes
        console.log(data.quotes[index].quote);
        console.log(data.quotes[index].author);
      })
      .catch((error) => {
        console.error("Error fetching the quote:", error);
      });
  }

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div>
      <p className="quote-text">{quote}</p>
      <p className="quote-author">- {author}</p>
      <button className="quote-button" onClick={fetchQuote}>
        Get New Quote
      </button>
    </div>
  );
}
export default App;
