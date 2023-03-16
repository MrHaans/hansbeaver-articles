import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <>
      <header className="flex item-center justify-between bg-black text-white px-6 py-3 h-full">
        <div className="logo">
          <Link to="/">
            <img className="w-40 md:w-56 lg:w-64" src={logo} alt="Logo" />
          </Link>
        </div>

        <nav className="flex items-center">
          <ul className="flex justify-center">
            <li className="mr-5 lg:text-lg">
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="lg:text-lg">
              <button>
                <Link to="/blog">Article</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
