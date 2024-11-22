import React from 'react';
import OurTeamCard from '../OurTeamCard/OurTeamCard';
import './OurTeam.css';

function OurTeam() {
    // User data for the team members
    const users = [
        {
            name: "Er. Alexzandar Das",
            designation: "Founder, Director & CEO",
            image: "https://readymadeui.com/team-1.webp", // Add the actual image URL
            description: "Founder and visionary behind the organization. Alexzandar leads with a focus on innovation and growth."
        },
        {
            name: "Mr. Deepak Kumar Tripathy",
            designation: "Chief Operating Officer",
            image: "https://readymadeui.com/team-1.webp", // Add the actual image URL
            description: "Deepak drives the operational efficiency of the organization with a strategic approach to business operations."
        },
        {
            name: "Mr. Gagan Joshi",
            designation: "Head (Learning and Development)",
            image: "https://readymadeui.com/team-1.webp", // Add the actual image URL
            description: "Gagan is responsible for employee training, talent development, and fostering a culture of continuous learning."
        },
        {
            name: "Mr. Bijaya Prasad Nayak",
            designation: "Designation",  // Replace with actual designation
            image: "https://readymadeui.com/team-1.webp", // Add the actual image URL
            description: "Bijaya is a key member of the leadership team, contributing to the organization’s strategic growth."
        }
    ];

    return (
        <>
            {/* Main Section */}
            <div className="bg-custom-blue">
                <h2 className="text-white text-3xl font-extrabold text-center py-8">Meet Our Team</h2>

                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Side: Text Section */}
                        <div className="max-w-lg">
                            <h2 className="text-2xl font-extrabold text-white sm:text-4xl">Mr. Ranjan Das</h2>
                            <h4 className="text-white text-2xl font-bold p-2">Rtd.IAS</h4>
                            <p className="mt-4 text-white text-left">
                                Shri Ranjan Kumar Das, a retired IAS officer, has made an indelible mark on public administration through his distinguished career. Starting as Sub-Collector in Kendrapada, he adeptly tackled local issues and spearheaded developmental initiatives. As Collector of Jajpur, he improved district administration and service delivery, while his role as Secretary of the Bhubaneswar Development Authority saw significant strides in urban planning and modernization.
                                In the Culture Department, Shri Das dedicated himself to preserving and promoting regional cultural heritage. His tenure as Chief Administrator of the Jagannath Temple was marked by efficient management of the temple operations, ensuring a smooth experience for millions of devotees. His final role as Revenue Divisional Commissioner for South and Central Division involved overseeing development activities across several districts, fostering balanced regional growth.
                                He writes regularly for various Odia newspapers and has represented Odisha in numerous national and international literary forums.
                            </p>
                        </div>

                        {/* Right Side: Image */}
                        <div className="main-img md:mt-0 border">
                            {/* Add any additional content for the image section if needed */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Cards Section */}
            <div className="font-[sans-serif] bg-custom-blue">
                <div className="lg:max-w-6xl max-w-xl mx-auto p-1">
                    {/* Team Cards Grid */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-12">
                        {/* Loop through the users array and pass props to each OurTeamCard */}
                        {users.map((user, index) => (
                            <OurTeamCard
                                key={index}
                                name={user.name}
                                designation={user.designation}
                                image={user.image}
                                description={user.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurTeam;
