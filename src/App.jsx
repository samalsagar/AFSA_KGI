import { useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FactsAndFigures from './components/FactsAndFigures/FactsAndFigures';
import AboutUs from './components/AboutUs/AboutUs';
import Vision from './components/Vision/Vision';
import OurTeam from './components/OurTeam/OurTeam';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import OurWork from './components/OurWork/OurWork';
import ContactUs from './components/ContactUs/ContactUs';
import WhatsappIcon from './components/WhatsappIcon/WhatsappIcon';
import Donate from './components/Donate/Donate';

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const factsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const visionRef = useRef(null);
  const ourTeamRef = useRef(null);
  const ourWorkRef = useRef(null);
  const galleryRef = useRef(null);
  const contactusRef = useRef(null);
  const donateRef = useRef(null);

  return (
    <>
      <Header
        heroRef={heroRef}
        factsRef={factsRef}
        aboutUsRef={aboutUsRef}
        visionRef={visionRef}
        ourTeamRef={ourTeamRef}
        ourWorkRef={ourWorkRef}
        galleryRef={galleryRef}
        contactusRef={contactusRef}
        donateRef={donateRef}
      />
      <main>
        {/* <section id="herosection" ref={heroRef}> */}
          <HeroSection />
        {/* </section> */}
        <section id="facts" ref={factsRef}>
          <FactsAndFigures />
        </section>
        <section id="aboutus" ref={aboutUsRef}>
          <AboutUs />
        </section>
        <section id="vision" ref={visionRef}>
          <Vision />
        </section>
        <section id="ourteam" ref={ourTeamRef}>
          <OurTeam />
        </section>
        <section id="ourwork" ref={ourWorkRef}>
          <OurWork />
        </section>
        <section id="gallery" ref={galleryRef}>
          <Gallery />
        </section>

        <section id="contactus" ref={contactusRef}>
          <ContactUs />
        </section>

        <section id='donate' ref={donateRef}>
          <Donate />
        </section>
      </main>
      <WhatsappIcon />
      <Footer />
      
    </>
  );
}

export default App;
