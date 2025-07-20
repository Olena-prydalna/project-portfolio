import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between py-4 px-6 md:px-10 bg-gray-200 opacity-95 backdrop-blur-sm">
      <div className="flex items-center">
        <span className="text-green-950 text-xl font-bold">Portfolio</span>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-green-950 text-lg font-semibold">
        <li className="relative">
          <a
            href="#home"
            className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-xl hover:text-green-900"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-xl hover:text-green-900"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-xl hover:text-green-900"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-xl hover:text-green-900"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-xl hover:text-green-900"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="text-green-950 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-200 opacity-95 backdrop-blur-sm md:hidden">
          <ul className="flex flex-col py-4 text-green-950 text-lg font-semibold">
            <li>
              <a
                href="#home"
                className="block px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-green-900"
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-green-900"
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-green-900"
                onClick={closeMobileMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-green-900"
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:text-green-900"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
