import React from 'react';
import './FactsAndFigures.css';
import fact1 from '../../assets/Facts/fact1.jpg'
import fact2 from '../../assets/Facts/fact2.jpg'
import fact3 from '../../assets/Facts/fact3.jpg'
import fact4 from '../../assets/Facts/fact4.jpg'

function FactsAndFigures() {
  return (
    <div className="bg-custom-blue flex flex-col w-full p-6 mx-auto">
      <h1 className="text-white fact-heading text-3xl font-semibold text-center mb-6">Facts and Figures</h1>
      <p className="text-white p-3 text-center mb-10 text-lg">"Impacting lives across the globe with every act of kindness, every donation, and every effort."</p>
      <div className="product-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 lg:py-8">

        {/* Campaigns Card */}
        <div className="transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto h-[43vh] sm:h-[43vh] md:h-[42vh] lg:h-[40vh] bg-gradient-to-t from-transparent to-transparent hover:bg-gradient-to-b hover:from-opacity-50 hover:to-opacity-100">
            <img src={fact1} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
          </article>
        </div>

        {/* Animal Rescue Card */}
        <div className="transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto h-[43vh] sm:h-[43vh] md:h-[42vh] lg:h-[40vh] bg-gradient-to-t from-transparent to-transparent hover:bg-gradient-to-b hover:from-opacity-50 hover:to-opacity-100">
            <img src={fact2} alt="Animal Rescue" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
          </article>
        </div>

        {/* Group Impacted Card */}
        <div className="transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto h-[43vh] sm:h-[43vh] md:h-[42vh] lg:h-[40vh] bg-gradient-to-t from-transparent to-transparent hover:bg-gradient-to-b hover:from-opacity-50 hover:to-opacity-100">
            <img src={fact3} alt="Group Impacted" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
          </article>
        </div>

        {/* Another Card */}
        <div className="transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto h-[43vh] sm:h-[43vh] md:h-[42vh] lg:h-[40vh] bg-gradient-to-t from-transparent to-transparent hover:bg-gradient-to-b hover:from-opacity-50 hover:to-opacity-100">
            <img src={fact4} alt="Another Impact" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
          </article>
        </div>

      </div>
    </div>
  );
}

export default FactsAndFigures;
