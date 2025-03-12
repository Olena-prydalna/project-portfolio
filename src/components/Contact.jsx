import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center mt-30 mb-15">
      <div className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-36 md:pr-28 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="text-2xl opacity-90 font-extrabold leading-9 tracking-tight mb-3  text-gray-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
          Contact Me
        </h1>
        <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed text-2xl text-gray-200 opacity-90">
          I am open to collaboration and new projects. Feel free to contact me!
        </p>
        <div className="flex flex-wrap gap-20 md:place-self-start md:justify-self-end mt-10">
          <ul className="flex gap-10">
            <li>
              <a
                href="mailto:test@example.com"
                className="text-gray-200 opacity-90 inline-block transition-transform duration-300 ease-in-out transform hover:scale-125"
              >
                <MdOutlineMailOutline size={50} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/1234567890"
                className="text-gray-200 opacity-90 inline-block transition-transform duration-300 ease-in-out transform hover:scale-125"
              >
                <MdOutlineWhatsapp size={50} />
              </a>
            </li>
            <li>
              <a
                href="tel:+1234567890"
                className="text-gray-200 opacity-90 inline-block transition-transform duration-300 ease-in-out transform hover:scale-125"
              >
                <BsTelephone size={39} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 opacity-90 p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl opacity-90 font-extrabold leading-9 tracking-tight mb-3  text-green-950 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
          Contact Form
        </h2>
        <form action="#" method="POST">
          <div className="mb-5">
            <label
              for="name"
              className="block text-xl font-medium text-green-950"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full border-green-950 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="block text-xl font-medium text-green-950"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full  border-green-950 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>
          <div className="mb-5">
            <label
              for="message"
              className="block text-xl font-medium text-green-950"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              class="w-full  border-green-950 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-950 text-gray-200 py-3 rounded-lg font-medium hover:bg-green-900 transition duration-300 hover:font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
