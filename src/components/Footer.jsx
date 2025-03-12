import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaPinterestSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between py-1 px-10 bg-gray-200 opacity-80 text-green-950 font-bold mt-10">
      <aside>
        <p> © {new Date().getFullYear()} Created by Olena Prydalna</p>
      </aside>

      <div className="flex flex-wrap gap-20 md:place-self-start md:justify-self-end mt-2">
        <ul className="flex gap-7">
          <li>
            <a
              href="https://www.instagram.com/"
              className="text-green-950 inline-block transition-transform duration-300 ease-in-out transform hover:scale-125"
            >
              <FaInstagramSquare size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="text-green-950 inline-block transition-transform duration-300 ease-in-out transform hover:scale-125"
            >
              <FaFacebookSquare size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              className="text-green-950 inline-block transition-transform duration-300 ease-in-out transform hover:scale-125"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
