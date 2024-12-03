import React from 'react';
import OurTeamCard from '../OurTeamCard/OurTeamCard';
import './OurTeam.css';
import alex from '../../assets/Team/alexzandar.png';
import deepak from '../../assets/Team/Deepak-Kumar.png';
import gagan from '../../assets/Team/Gagan.jpg';
import bijay from '../../assets/Team/Mr.-Bijaya.png';
import ranjanDas from '../../assets/Team/ranjanDas.jpg';

function OurTeam() {
  // User data for the team members
  const users = [
    {
      name: "Er. Alexzandar Das",
      designation: "Founder, Director & CEO",
      image: alex,
      linkedIn : "https://www.linkedin.com/in/alexzandar-das-286110289/",
      twitter : "https://x.com/alexdasknp?t=5OPOY3vqpxyUzyw0Q58hqg&s=08",
      description: "Founder and visionary behind the organization. Alexzandar leads with a focus on innovation and growth.",
      moreDescription : "Er. Alexzandar Das, born on January 2, 1985, is a visionary leader who prioritized community service over corporate success, despite his academic achievements in engineering and technology. Holding an MTech in Electronics and Telecommunications Engineering, a PGDM in Human Resources from XIMB, an MA in Mass Communication and Journalism, and an LLM from Utkal University, he is currently pursuing a Ph.D. at Utkal University. In 2022, he launched the Aryalex Foundation for Social Activities (AFSA) to tackle issues like environmental conservation, healthcare, women’s empowerment, and education. Alexzandar also empowered over 1,500 artisans by establishing the Soro Stone Cluster and Haripur Mytho Dress Cluster and founded Kalinga FabLab, Odisha’s first rural innovation lab, to inspire rural entrepreneurship. His work reflects an unwavering commitment to social welfare and environmental sustainability. Also, being an Editor, diverse fields, including education, extensive knowledge and multidisciplinary expertise have allowed him to approach issues from a unique perspective, making his contributions not only informative but also transformative. Through his editorial leadership, he has enriched public discourse and inspired many to engage with the pressing issues of our time."
    },
    {
      name: "Mr. Deepak Kumar Tripathy",
      designation: "Chief Operating Officer",
      image: deepak,
      linkedIn : "",
      twitter : "",
      description: "Deepak drives the operational efficiency of the organization with a strategic approach to business operations.",
       moreDescription : "Mr. Deepak Kumar Tripathy is the Chief Operation Officer (COO) and mentor of AFSA. He has 30 years of experience in development sector and has associated with AFSA since last 6 months. He has successfully performed his job responsibilities with different agencies in different capacities. He has served at various National level NGOs, International donors, bilateral agencies, Govt Department and Corporates. He has well managed programs in collaboration with Plan International, DFID, USAID, OFDA, UNICEF, Clinton Foundation CII and Tata Steel. He has also worked with JICA, CRS, CARE, Lepra, J.K Paper, Habitat for Humanity India and Aarvee associates Pvt Ltd. He has quality overseas work experiences in Indonesia, Bangladesh and Nepal. His core competency area is “Poverty Analysis and Planning for hard core poor and minorities”. He well versed with social research, motivational training, mentoring, Participatory planning monitoring and evaluation. Core skill area arePartnership and resource mobilization."
    },
    {
      name: "Mr. Gagan Joshi",
      designation: "Head (Learning and Development)",
      image: gagan,
      linkedIn : "",
      twitter : "",
      description: "Gagan is responsible for employee training, talent development, and fostering a culture of continuous learning.",
       moreDescription : "A dedicated and results-driven learning and development leader with two decades of experience designing and implementing innovative training programs to enhance organizational capacity and individual growth within the social sector. Adept at aligning learning initiatives with strategic goals to improve service delivery and community impact. Is a certified WPPF(Whole Person Process Facilitator) from Dalar International Raleigh, United States. Has facilitated and delivered more than 250 training sessions across INDIA in domains like Personality Development, Life Skills, Retail, BFSI, and Future Skills."
    },
    {
      name: "Mr. Bijaya Prasad Nayak",
      designation: "Designation",
      image: bijay,
      linkedIn : "",
      twitter : "",
      description: "Bijaya is a key member of the leadership team, contributing to the organization’s strategic growth.",
       moreDescription : "...."
    }
  ];

  return (
    <>
      {/* Main Section */}
      <div className="bg-custom-blue lg:ps-36 ps-0">
        <h2 className="text-white text-3xl font-extrabold text-center">Meet Our Team</h2>
        <div className="container">
          <section className="py-16 relative"> {/* Reduced vertical padding */}
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
              <div className="w-full justify-center items-center gap-20 grid lg:grid-cols-2 grid-cols-1"> {/* Adjust grid alignment */}
                <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                    <div className="flex items-center space-x-4">
                      <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        Mr. Ranjan Das
                      </h2>
                      <p className="text-white text-lg sm:text-xl md:text-2xl font-bold font-manrope leading-normal lg:text-start text-center">
                        (Rtd. IAS)
                      </p>
                    </div>

                    <p className="text-gray-400 text-base font-normal leading-relaxed mt-4 text-justify">
                      Shri Ranjan Kumar Das, a retired IAS officer, has made an indelible mark on public administration through his distinguished career. Starting as Sub-Collector in Kendrapada, he adeptly tackled local issues and spearheaded developmental initiatives. As Collector of Jajpur, he improved district administration and service delivery, while his role as Secretary of the Bhubaneswar Development Authority saw significant strides in urban planning and modernization.
                      In the Culture Department, Shri Das dedicated himself to preserving and promoting regional cultural heritage. His tenure as Chief Administrator of the Jagannath Temple was marked by efficient management of the temple operations, ensuring a smooth experience for millions of devotees. His final role as Revenue Divisional Commissioner for South and Central Division involved overseeing development activities across several districts, fostering balanced regional growth.
                      He writes regularly for various Odia newspapers and has represented Odisha in numerous national and international literary forums.
                    </p>
                  </div>
                </div>

                <img
                  className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                  src={ranjanDas}
                  alt="about Us image"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Team Cards Section */}
      <div className="font-[sans-serif] bg-custom-blue">
        <div className="lg:max-w-6xl max-w-xl mx-auto p-1">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-12">
            
            {users.map((user, index) => (
              <OurTeamCard
                key={index}
                name={user.name}
                designation={user.designation}
                image={user.image}
                description={user.description}
                linkedIn = {user.linkedIn}
                twitter = {user.twitter}
                more = {user.moreDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
