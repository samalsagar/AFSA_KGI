import React from 'react'

function Vision() {
  return (
    <>
      <div>
        <section className="bg-custom-blue py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white text-center animate__animated animate__fadeIn">Our Vision</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Mission */}
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50 hover:text-gray-800 ease-in-out">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white transition-all duration-300 transform hover:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Mission</h3>
                  <p className="mt-2 text-base text-gray-500">To endorse sustainable practices includes socially inclusive and gender equitable to enable hard-core poor and group of conscientized people or communities to enjoy a dignified quality of life.</p>
                </div>
              </div>

              {/* Values */}
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50 hover:text-gray-800 ease-in-out">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white transition-all duration-300 transform hover:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Values</h3>
                  <p className="mt-2 text-base text-gray-500">Combining transparency, accountability, integrity, gender equity, social justice, participatory action, and peace creates a fair, inclusive, and harmonious society where everyone can thrive.</p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50 hover:text-gray-800 ease-in-out">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white transition-all duration-300 transform hover:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Vision</h3>
                  <p className="mt-2 text-base text-gray-500">An equitable society where people can realize and exercise their potential, and live in peace with dignity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Vision
