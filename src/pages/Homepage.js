import { Link } from "react-router-dom";
import icon from "../images/icon.png";

export default function Homepage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-start text-center h-screen">
        <img
          className="w-32 md:w-44 lg:w-52 mt-32 mb-8 items-center justify-center"
          src={icon}
          alt="Icon"
        />
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-7xl items-center justify-center">
          Hans Beaver's Article
        </h1>
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
            href="https://hansbeaver-website.vercel.app/"
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
