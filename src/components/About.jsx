const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow mt-8 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl opacity-90 font-extrabold leading-tight tracking-tight mb-6 text-gray-200">
            My Philosophy
          </h1>
          <p className="mb-8 px-4 md:px-0 leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-200 opacity-90">
            A well-developed website isn't just about aesthetics - it's about
            functionality, usability, and an effortless user experience.
          </p>
        </div>

        <div className="lg:max-w-lg lg:w-full mb-8 md:mb-0 md:w-1/2 w-4/5">
          <img
            className="object-cover object-center rounded-lg shadow-lg w-full h-auto"
            alt="about"
            src="/images/about.png"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
