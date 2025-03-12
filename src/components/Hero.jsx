const Hero = () => {
  return (
    <div id="#" className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center mt-50 mb-25">
      <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1 w-3/6 ">
        <img
          className="object-cover object-center rounded-lg shadow-lg"
          alt="hero"
          src="/images/hero.png"
        />
      </div>
      <div className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pl-36 md:pl-28 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="text-2xl opacity-90 font-extrabold leading-9 tracking-tight mb-3  text-gray-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
          Web Developer
        </h1>
        <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed text-2xl text-gray-200 opacity-90">
          Hi! I'm Olena, a web developer passionate about creating user-friendly
          and beautiful websites
        </p>
      </div>
    </div>
  );
};

export default Hero;
