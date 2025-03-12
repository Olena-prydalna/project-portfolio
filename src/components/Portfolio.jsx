import { useState } from "react";

const projects = [
  {
    id: 1,
    image: "/images/project_1.png",
  },
  {
    id: 2,
    image: "/images/project_2.png",
  },
  {
    id: 3,
    image: "/images/project_3.png",
  },
  {
    id: 4,
    image: "/images/project_4.png",
  },
  {
    id: 5,
    image: "/images/project_5.png",
  },
  {
    id: 6,
    image: "/images/project_6.png",
  },
  {
    id: 7,
    image: "/images/project_7.png",
  },
  {
    id: 8,
    image: "/images/project_8.png",
  },
];

export function Carousel() {
  const [index, setIndex] = useState(0);
  const imgPerPage = 4;

  const prevSlide = () => {
    // setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIndex((prev) =>
      (prev === 0 ? projects.length - imgPerPage : prev - imgPerPage)
    );
  };

  const nextSlide = () => {
    // setIndex((prev) => (prev + 1) % projects.length);
    setIndex((prev) =>
      (prev >= projects.length - imgPerPage ? 0 : prev + imgPerPage)
    );
  };

  return (
    <div id="portfolio" className="relative w-full max-w-6xl mx-auto">
      {/* Левая кнопка */}
      <button
        className="absolute sm:left-[-40px] md:left[-60px] top-1/2 -translate-y-1/2 bg-gray-200 opacity-90 text-green-950 px-4 py-2 rounded-lg shadow-lg "
        onClick={prevSlide}
      >
        &#10094;
      </button>
      {/* Сетка изображений */}
      <div className="grid grid-cols-4 gap-10">
        {projects.slice(index, index + imgPerPage).map((project) => (
          <div key={project.id} className="w-full flex flex-col items-center">
            <img
              className="w-full h-60 object-cover rounded-lg shadow-lg"
              src={project.image}
              alt={`Project ${project.id}`}
            />
            <button className="bg-gray-200 opacity-90 text-green-950 font-bold px-4 py-1 w-full rounded-lg shadow-lg mt-2">
              View More
            </button>
          </div>
        ))}
      </div>
      {/* Правая кнопка */}
      <button
        className="absolute sm:right-[-40px] md:right[-60px] top-1/2 -translate-y-1/2 bg-gray-200 opacity-90 text-green-950 px-4 py-2 rounded-lg shadow-lg"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

const Portfolio = () => {
  return (
    <div className="mb-30 mt-20">
      <h1 className="flex items-center justify-center text-2xl opacity-90 font-extrabold leading-9 tracking-tight text-gray-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal mb-10">
        Portfolio
      </h1>
      <div className="flex flex-wrap justify-center gap-15"></div>
      <Carousel />
    </div>
  );
};

export default Portfolio;
