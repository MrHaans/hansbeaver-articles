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
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-7 md:text-6xl lg:text-7xl items-center justify-center">
          Hans Beaver's Article
        </h1>
        <button className="items-center justify-center">
          <Link
            to="/blog"
            className="py-2 px-6 rounded shadow text-white bg-green-400 hover:bg-transparent border-2 border-green-400
            transition-all duration-500 hover:text-black font-bold"
          >
            Read my article post
          </Link>
        </button>
      </section>
    </div>
  );
}
