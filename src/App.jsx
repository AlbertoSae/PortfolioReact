import React from 'react'
import './App.css'
import Navbar from './Components/layout/Navbar'
import Hero from './Sections/Hero/Hero'
import AboutMe from './Sections/AboutMe/AboutMe';
import Projects from './Sections/Projects/Projects';
import Stack from './Sections/Stack/Stack';
import Contact from './Sections/Contact/Contact';
import Footer from './Components/layout/Footer/Footer';


function App() {
  return (
    <div className='portfolio-container'>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
