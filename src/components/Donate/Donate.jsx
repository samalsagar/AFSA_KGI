import React from 'react'
import qr from '../../assets/Donate/QrCode.jpg';
import './Donate.css'
function Donate() {
    return (
        <div className='bg-custom-blue'>
            <h2 className="text-white text-3xl font-extrabold text-center">Donate Now</h2>
            <div className="px-2 py-20 w-full flex justify-center">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                    <div className="lg:w-1/2">
                        <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
                            <img src={qr} alt="" className="object-cover w-full h-full rounded-lg" />
                        </div>
                    </div>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl text-gray-800 font-bold">
                        Make a Difference Today – Donate to Support Our 
                            <span className="text-custom-blue">Cause</span>
                        </h2>
                        <p className="mt-4 text-gray-600 text-justify">
                        Your generosity can help us continue our mission of creating lasting change in the lives of those who need it most. As a non-profit organization, we rely on the support of individuals like you to fund our programs, reach more communities, and make a real impact.
                        </p>
                        <ul className='list-disc text-ul text-left mt-5 font-bold'>
                            <li>Providing education and healthcare to underprivileged children</li>
                            <li>Offering shelter and support to families in need</li>
                            <li>Empowering communities through skill-building workshops</li>
                            <li>Funding vital outreach programs that promote social justice and equality</li>
                        </ul>
                        <div className="mt-8">
                            <button className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Donate Now and Be Part of the Change</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Donate
