import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import FactsAndFigures from './components/FactsAndFigures/FactsAndFigures'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <FactsAndFigures />
    </>
  )
}

export default App
