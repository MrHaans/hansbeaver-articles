import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";

export default function Homepage() {
  // NEW CODE FOR ANIMATION
  const quotes = [
    "Reading is an activity of the imagination, and the imagination in question is not the writer's alone. - THOMAS C. FOSTER",
    "Do what you love, especially if your sharing the word. - ANN SIMPSON",
    "I read to live, I write to share their life. - JESSIE WINTERSPRING",
    "The more I learn, the more I realize how much I don’t know. - ALBERT EINSTEIN",
    "Everyone who's born has a mysterious life path to follow. We must live to find that one reason to live. - SUCHET CHATURVEDI",
    "If you cant hold, you wont be rich. - CZ BINANCE",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((quoteIndex) =>
        quoteIndex === quotes.length - 1 ? 0 : quoteIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);
  // ANIMATION END

  return (
    <div>
      <section className="flex flex-col items-center justify-start text-center h-screen">
        <img
          className="w-32 md:w-44 lg:w-52 mt-16 mb-8 items-center justify-center"
          src={icon}
          alt="Icon"
        />
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-0 md:text-6xl lg:text-7xl items-center justify-center">
          Hans Beaver's Article
        </h1>
        {/* QUOTE ANIMATION CHANGER CODE  */}
        <div className="quote-container">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`quote-text ${
                index === quoteIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-bold text-base md:text-lg lg:text-xl"><q>{quote}</q></p>
            </div>
          ))}
        </div>
        {/* ANIMATION END  */}

        <button className="items-center justify-center mb-10">
          <Link
            to="/blog"
            className="py-3 px-8 rounded shadow text-white bg-green-400 hover:bg-transparent border-2 border-green-400
            transition-all duration-500 hover:text-black font-bold"
          >
            Read my article post
          </Link>
        </button>
        <button className="items-center justify-center">
          <a
            href="https://sites-hansbeaver.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-9 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black
            transition-all duration-500 hover:text-black font-bold"
          >
            Back to my website
          </a>
        </button>
      </section>
    </div>
  );
}