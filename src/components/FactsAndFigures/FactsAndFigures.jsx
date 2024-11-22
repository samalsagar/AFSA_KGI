import React, { useState, useEffect } from 'react';
import './FactsAndFigures.css';

function FactsAndFigures() {
    // State for each card's number digits
    const [digitsCampaigns, setDigitsCampaigns] = useState([]);
    const [digitsAnimalRescue, setDigitsAnimalRescue] = useState([]);
    const [digitsGroupImpacted, setDigitsGroupImpacted] = useState([]);
    const [digitsPlantation, setDigitsPlantation] = useState([]);

    // Numbers to be displayed
    const numberCampaigns = "589+";
    const numberAnimalRescue = "878+";
    const numberGroupImpacted = "50048+";
    const numberPlantation = "98526+";

    // Effect to load digits one by one for each card
    useEffect(() => {
        const intervalCampaigns = setInterval(() => {
            setDigitsCampaigns((prevDigits) => {
                const nextDigit = prevDigits.length < numberCampaigns.length ? [...prevDigits, numberCampaigns[prevDigits.length]] : prevDigits;
                return nextDigit;
            });
        }, 500);

        const intervalAnimalRescue = setInterval(() => {
            setDigitsAnimalRescue((prevDigits) => {
                const nextDigit = prevDigits.length < numberAnimalRescue.length ? [...prevDigits, numberAnimalRescue[prevDigits.length]] : prevDigits;
                return nextDigit;
            });
        }, 500);

        const intervalGroupImpacted = setInterval(() => {
            setDigitsGroupImpacted((prevDigits) => {
                const nextDigit = prevDigits.length < numberGroupImpacted.length ? [...prevDigits, numberGroupImpacted[prevDigits.length]] : prevDigits;
                return nextDigit;
            });
        }, 500);

        const intervalPlantation = setInterval(() => {
            setDigitsPlantation((prevDigits) => {
                const nextDigit = prevDigits.length < numberPlantation.length ? [...prevDigits, numberPlantation[prevDigits.length]] : prevDigits;
                return nextDigit;
            });
        }, 500);

        // Clean up intervals on component unmount
        return () => {
            clearInterval(intervalCampaigns);
            clearInterval(intervalAnimalRescue);
            clearInterval(intervalGroupImpacted);
            clearInterval(intervalPlantation);
        };
    }, [numberCampaigns, numberAnimalRescue, numberGroupImpacted, numberPlantation]);

    return (
        <div className="bg-custom-blue flex flex-col w-full p-2 mx-auto">
            <h1 className="text-white fact-heading">Facts and Figures</h1>
            <p className="text-white p-3">"Impacting lives across the globe with every act of kindness, every donation, and every effort."</p>
            <div className="product-card grid grid-cols-1 md:grid-cols-4 gap-10 py-12 lg:pb-8 lg:pt-10">
                
                {/* Campaigns Card */}
                <div className="bg-gradient-to-b from-blue-500 to-blue-300 dark:from-gray-900 dark:to-gray-800 border border-transparent rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-6 p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <div className="w-full flex flex-col justify-between gap-y-6 max-w-[20rem] mx-auto p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
                        <img
                            className="rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
                            src="https://media.istockphoto.com/id/1465607289/photo/hands-teamwork-and-collaboration-of-friends-community-or-people-together-for-charity-support.jpg?s=612x612&w=0&k=20&c=9mqMSkXShJmXSdyADBbl7OSyvCID0RAulpcv2WA8DlE="
                            alt="Campaigns"
                            style={{ width: '100%', height: '200px' }}
                        />
                        <div className="flex flex-col items-center gap-y-4">
                            <h4 className="font-extrabold text-blue-600 dark:text-blue-400 lg:text-center">CAMPAIGNS</h4>
                            <h5 className="text-4xl font-semibold text-gray-900 dark:text-white lg:text-center">{digitsCampaigns.join("")}</h5>
                        </div>
                    </div>
                </div>

                {/* Animal Rescue Card */}
                <div className="bg-gradient-to-b from-blue-500 to-blue-300 dark:from-gray-900 dark:to-gray-800 border border-transparent rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-6 p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <div className="w-full flex flex-col justify-between gap-y-6 max-w-[20rem] mx-auto p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
                        <img
                            className="rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
                            src="https://www.globalgiving.org/pfil/26817/ph_26817_96667.jpg"
                            alt="Animal Rescue"
                            style={{ width: '100%', height: '200px' }}
                        />
                        <div className="flex flex-col items-center gap-y-4">
                            <h4 className="font-extrabold text-blue-600 dark:text-blue-400 lg:text-center">Animal Rescue</h4>
                            <h5 className="text-4xl font-semibold text-gray-900 dark:text-white lg:text-center">{digitsAnimalRescue.join("")}</h5>
                        </div>
                    </div>
                </div>

                {/* Group Impacted Card */}
                <div className="bg-gradient-to-b from-blue-500 to-blue-300 dark:from-gray-900 dark:to-gray-800 border border-transparent rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-6 p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <div className="w-full flex flex-col justify-between gap-y-6 max-w-[20rem] mx-auto p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
                        <img
                            className="rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
                            src="https://images.yourstory.com/cs/5/98c65090592f11ea9f62339ce853ca75/Imagebgz2-1596541448387.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
                            alt="Group Impacted"
                            style={{ width: '100%', height: '200px' }}
                        />
                        <div className="flex flex-col items-center gap-y-4">
                            <h4 className="font-extrabold text-blue-600 dark:text-blue-400 lg:text-center">GROUP IMPACTED</h4>
                            <h5 className="text-4xl font-semibold text-gray-900 dark:text-white lg:text-center">{digitsGroupImpacted.join("")}</h5>
                        </div>
                    </div>
                </div>

                {/* Plantation Card */}
                <div className="bg-gradient-to-b from-blue-500 to-blue-300 dark:from-gray-900 dark:to-gray-800 border border-transparent rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-6 p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <div className="w-full flex flex-col justify-between gap-y-6 max-w-[20rem] mx-auto p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
                        <img
                            className="rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
                            src="https://nelda.org.in/wp-content/uploads/2018/11/blog_img_2018-11-09_11-14-55_Y1HyDbI6XseN3pLj.jpg"
                            alt="Plantation"
                            style={{ width: '100%', height: '200px' }}
                        />
                        <div className="flex flex-col items-center gap-y-4">
                            <h4 className="font-extrabold text-blue-600 dark:text-blue-400 lg:text-center">PLANTATION</h4>
                            <h5 className="text-4xl font-semibold text-gray-900 dark:text-white lg:text-center">{digitsPlantation.join("")}</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FactsAndFigures;
