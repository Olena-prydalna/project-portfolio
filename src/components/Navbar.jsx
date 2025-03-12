const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between py-6 px-10 bg-gray-200 opacity-80">
      <ul className="hidden md:flex gap-10 text-green-950 text-xl font-bold ">
        <li className="relative z-20">
          <a
            href="#"
            className="cursor-pointer opacity-90 transition-all duration-300 hover:opacity-100 hover:text-2xl hover:text-green-900"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="cursor-pointer opacity-90 transition-all duration-300 hover:opacity-100 hover:text-2xl hover:text-green-900"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="cursor-pointer opacity-90 transition-all duration-300 hover:opacity-100 hover:text-2xl hover:text-green-900"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="cursor-pointer opacity-90 transition-all duration-300 hover:opacity-100 hover:text-2xl hover:text-green-900"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-90 transition-all duration-300 hover:opacity-100 hover:text-2xl"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
