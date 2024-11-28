import React, { useState, useEffect } from 'react';
import './HeroSection.css'
import main1 from '../../assets/MainImage/main_img1.jpg';
import main2 from '../../assets/MainImage/main_img2.jpg';
import main3 from '../../assets/MainImage/main_img3.jpeg';
import main4 from '../../assets/MainImage/main_img4.jpg';
import main5 from '../../assets/MainImage/main_img5.jpg';
function HeroSection() {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      image: main4,
      alt: 'Exotic Fruits',
    },
    {
      id: 2,
      image: main5,
      alt: 'Exotic Fruits',
    },

    {
      id: 3,
      image: main3,
      alt: 'Exotic Fruits',
    },
    {
      id: 4,
      image: main1,
      alt: 'Wild Landscape',
    },
    {
      id: 5,
      image: main2,
      alt: 'Camera',
    },
    {
      id: 6,

      image: main1,
      alt: 'Exotic Fruits',
    },
    {
      id: 7,
      image: main2,
      alt: 'Exotic Fruits',
    },
    {
      id: 8,
      image: main3,
      alt: 'Exotic Fruits',
    },
    {
      id: 9,
      image: main4,
      alt: 'Exotic Fruits',
    },
    {
      id: 10,
      image: main5,
      alt: 'Exotic Fruits',
    },
  ];

  // Function to handle slide change
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative">
      {/* Carousel Slides */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Move slides based on currentIndex
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full corosal-image object-cover shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls (Prev and Next buttons) */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition shadow-xl hover:shadow-2xl"
      >
        <span className="text-2xl">&#10094;</span>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition shadow-xl hover:shadow-2xl"
      >
        <span className="text-2xl">&#10095;</span>
      </button>

      {/* Carousel Indicators (dots for slide navigation) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition transform ${currentIndex === index
                ? 'bg-blue-500 scale-125'
                : 'bg-white opacity-50 hover:opacity-75'
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
