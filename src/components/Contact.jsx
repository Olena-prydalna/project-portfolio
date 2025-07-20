import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center gap-12">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl opacity-90 font-extrabold leading-tight tracking-tight mb-6 text-gray-200">
            Contact Me
          </h1>
          <p className="mb-8 px-4 md:px-0 leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-200 opacity-90">
            I am open to collaboration and new projects. Feel free to contact me!
          </p>
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-start mt-8">
            <a
              href="mailto:test@example.com"
              className="text-gray-200 opacity-90 transition-transform duration-300 ease-in-out transform hover:scale-125 flex flex-col items-center gap-2"
            >
              <MdOutlineMailOutline size={50} />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              className="text-gray-200 opacity-90 transition-transform duration-300 ease-in-out transform hover:scale-125 flex flex-col items-center gap-2"
            >
              <MdOutlineWhatsapp size={50} />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href="tel:+1234567890"
              className="text-gray-200 opacity-90 transition-transform duration-300 ease-in-out transform hover:scale-125 flex flex-col items-center gap-2"
            >
              <BsTelephone size={45} />
              <span className="text-sm">Phone</span>
            </a>
          </div>
        </div>

        <div className="bg-gray-200 opacity-95 p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-lg md:w-1/2">
          <h2 className="text-2xl lg:text-3xl opacity-90 font-extrabold leading-tight tracking-tight mb-6 text-green-950">
            Contact Form
          </h2>
          <form action="#" method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-green-950 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-green-950 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-green-950 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-green-950 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-green-950 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border-green-950 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 transition-all duration-300 resize-vertical"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-950 text-gray-200 py-3 rounded-lg font-medium hover:bg-green-900 transition duration-300 hover:font-bold transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
