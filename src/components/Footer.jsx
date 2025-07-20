import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 opacity-90 text-green-950 py-6 px-6 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-sm md:text-base">
            © {new Date().getFullYear()} Created by Olena Prydalna
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/"
            className="text-green-950 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-green-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare size={28} />
          </a>
          <a
            href="https://www.facebook.com/"
            className="text-green-950 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-green-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={28} />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="text-green-950 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-green-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/"
            className="text-green-950 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-green-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
