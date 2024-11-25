import React from 'react';
import './AboutUs.css';
import ranjanDas from '../../assets/Team/ranjanDas.jpg';

function AboutUs() {
    return (
        <>
            <div className="text-center p-5 bg-custom-blue text-white">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    About Us
                </h2>

                {/* First Section: Image on the Left, Text on the Right */}
                <div className="flex flex-wrap items-center mt-20 text-center">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4 test">
                        {/* Image is set as the background in CSS */}
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-left md:text-left lg:pl-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                            Who we are
                        </h3>
                        <p className="mt-6">
                        AFSA is a not for profit , non-political and social development organization established in 2022 dedicating to enhance the quality of lives of rural and urban poor in INDIA.  The strategic priorities are mitigating acute poverty and starvation, ensuring social inclusion and justice, good governance and citizen’s right. Sensitizing communities identify and initiate development measures. Being a strong believer of the thought people’s participation key to social reforms, we facilitate community to be engaging with different initiatives taken for their development. We are directly work with community and takes their issues into larger development forums for their accelerate growth. Besides the basic needs i.e. livelihood, health, education, habitation, emergency support, water and sanitation, we are analysing socio-economic issues, which prevent their growth. To make the success of NDLM mission, AFSA is trying to create at least a digitally literate and empowered person per house hold in each block of INDIA.  Our digital education to community is a remarkable contribution to the society.  Our campaigns: on making alive of verbal tribal languages, saving indigenous seeds that are in endanger stage, street dogs and cattle care movement are exceptional efforts to serve the society in differently. Support to visually impaired students, Promotion of quality and inclusive education, enhance the skills of youth and financial support to poor genius students bounces us incomparable pleasure which energies us to continue our work even with minimum resources available. At present we are focussed on Odisha State and have Vision to reach PAN India in next 5 years.
                            <br />
                            {/* Continue your text here */}
                        </p>
                    </div>
                </div>

                {/* Second Section: Text on the Left, Image on the Right */}
                <div className="flex flex-wrap items-center mt-20 text-center">
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-left md:text-left lg:pr-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                            Our history
                        </h3>
                        <p className="mt-6">
                            Being an educationalist and mentor Er. Alexzandar Das involved in teaching engineering students and realised how students from poor economic back ground struggle to continue their higher study and then scuffle for employment. Keeping the thought in mind “Instead of running behind job how youth create jobs for others”, Our Founder started some remarkable initiatives to bring changes in entrepreneurship ecosystem in the locality. Set up incubation centres and entrepreneurship parks where potential youth are getting all type of support and services to become successful entrepreneurs.   During his teaching profession he had also opportunities to manage series of NSS camps in county side where he witnessed specially how girls and women folks are suffering to get social justice. Those issues stimulated Our Founder to build a civil society organization to serve people. Those times gave an opportunity to realize that people need to take initiatives for their development and support mainstream agencies for overall growth of the society. It has been realized that there is a need to extend professional support from NGOs to the community and joint effort of GO- NGO and corporates is highly required in the state of Odisha for quick socio-economic growth of the state. Under the leadership of Our Founder AFSA has formally incorporated on 24 days, Feb,2022 after two years of interaction and engagement with rural communities, with the mission to “educate enable and engage communities to realize their potential”. We started by working with a few rural communities in Jajpur District in the state of Odisha. Since its inception it has focused on Education, Entrepreneurship Development, Climate action, Digital literacy, Skill Development, Livelihood Promotion etc and have come a long way to being functional in Odisha, Chattsigarh, Delhi and Jharkhand.
                            <br />
                            {/* Continue your text here */}
                        </p>
                    </div>
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4 test mt-10">
                        {/* Image is set as the background in CSS */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
