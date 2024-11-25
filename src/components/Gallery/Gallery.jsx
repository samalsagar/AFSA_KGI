import React from 'react'
import './Gallery.css'
import start1 from '../../assets/Gallery/Start.jpg'
import start2 from '../../assets/Gallery/start2.jpg'
import jal from '../../assets/Gallery/Jalachhatra.jpg'
import blanket from '../../assets/Gallery/BlanketDistribution.jpg'
import learn from '../../assets/Gallery/Learning.jpg'
import dry1 from '../../assets/Gallery/dryFood.jpg'
import dry2 from '../../assets/Gallery/dryFood2.jpg'
import dry3 from '../../assets/Gallery/dryFood3.jpg'
import dry4 from '../../assets/Gallery/dryFood4.jpg'
import cook1 from '../../assets/Gallery/cookedFood.jpg'
import cook2 from '../../assets/Gallery/cookedFood2.jpg'
import health from '../../assets/Gallery/healthCamp.jpeg'
function Gallery() {
    return (
        <>
            <div className='bg-custom-blue pt-10 pb-4'>
                <h1 className='text-3xl font-extrabold text-white'>Our Gallery</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 bg-custom-blue p-6">
                <div className="gallery-card">
                    <div> 
                        <img className="h-auto max-w-full rounded-lg gallery-img" src={start1} alt="Gallery image" />
                    </div>
                    <div>
                        <h2 className='text-white text-2xl font-bold'>How We Start</h2>
                    </div>
                </div>
                <div className="gallery-card">
                <div> 
                        <img className="h-auto max-w-full rounded-lg gallery-img" src={start2} alt="Gallery image" />
                    </div>
                    <div>
                        <h2 className='text-white text-2xl font-bold'>How We Start</h2>
                    </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={jal} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Jalachhatra</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={blanket} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Blanket distribution</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={learn} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Learning Materials</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={dry1} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Dry Food</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={dry2} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Dry Food</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={dry3} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Dry Food</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={dry4} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Dry Food</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={cook1} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Cooked Food</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={cook2} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Cooked Food</h2>
                    </div>
                   </div>
                </div>
                <div className="gallery-card">
                   <div>
                   <img className="h-auto max-w-full rounded-lg gallery-img" src={health} alt="Gallery image" />
                   <div>
                        <h2 className='text-white text-2xl font-bold'>Health Camp</h2>
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
