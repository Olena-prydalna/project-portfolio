import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  // Überprüfen der Bildschirmgröße
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const imgPerPage = isMobile ? 1 : 4;

  const prevSlide = () => {
    setIndex((prev) =>
      (prev === 0 ? projects.length - imgPerPage : prev - imgPerPage)
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      (prev >= projects.length - imgPerPage ? 0 : prev + imgPerPage)
    );
  };

  return (
    <div id="portfolio" className="relative w-full max-w-7xl mx-auto px-4">
      {/* Linke Button */}
      <button
        className="absolute left-2 md:left-[-60px] top-1/2 -translate-y-1/2 bg-gray-200 opacity-90 text-green-950 px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg hover:opacity-100 transition-opacity z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      
      {/* Bildlauf */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {projects.slice(index, index + imgPerPage).map((project) => (
          <div key={project.id} className="w-full flex flex-col items-center">
            <img
              className="w-full h-48 md:h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              src={project.image}
              alt={`Project ${project.id}`}
            />
            <button className="bg-gray-200 opacity-90 text-green-950 font-bold px-4 py-2 w-full rounded-lg shadow-lg mt-3 hover:opacity-100 transition-opacity">
              View More
            </button>
          </div>
        ))}
      </div>
      
      {/* Rechte Button */}
      <button
        className="absolute right-2 md:right-[-60px] top-1/2 -translate-y-1/2 bg-gray-200 opacity-90 text-green-950 px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg hover:opacity-100 transition-opacity z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

const Portfolio = () => {
  return (
    <div id="portfolio" className="min-h-screen flex flex-col items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h1 className="flex items-center justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl opacity-90 font-extrabold leading-tight tracking-tight text-gray-200 mb-16">
          Portfolio
        </h1>
        <Carousel />
      </div>
    </div>
  );
};

export default Portfolio;
