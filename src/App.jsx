import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';




const App = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='page m-10 '>
      <Header scrollToSection={scrollToSection} />    
      <Home id="home"/>                
      <About id="about"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
      
    </div>
  )
}

export default App

