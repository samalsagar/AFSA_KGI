import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import FactsAndFigures from './components/FactsAndFigures/FactsAndFigures'
import AboutUs from './components/AboutUs/AboutUs'
import Vision from './components/Vision/Vision'
import OurTeam from './components/OurTeam/OurTeam'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <FactsAndFigures />
      <AboutUs />
      <Vision />
      <OurTeam />
   
    </>
  )
}

export default App
