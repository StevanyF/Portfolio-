import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';



const App = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  // Use the useInView hook to detect when the card is in view
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again on re-scrolling
  });
  

  return (
    <div className='page m-10 '>
      <Header scrollToSection={scrollToSection} />    
      <Home id="home"/>                
      <About id="about"/>
      <Projects id="projects"/>
      <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView? "visible" : "hidden"}
          transition={{ duration: 0.5}}
        >
        <Contact id="contact"/>
      </motion.div>
    </div>
  )
}

export default App

