import React , {useRef}from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';


const About = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
  
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
     
  return (


    <div id='about' className=''>
        <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
        }}>
            <div className='section flex flex-col justify-center items-center mt-20 gap-x-4 '>
                <img className='size-60' src='img/business-3d-black-young-woman-in-glasses-sitting-and-drinking-coffee-with-eyes-closed.png' alt='me' />
                <div className='box flex flex-col space-y-8 m-10 ' >
                    <div><h1 className='title text-violet-600 uppercase text-3xl sm:text-6xl lg:text-6xl font-bold'style={{fontFamily:"Wood"}} >Things about me (3.)</h1></div>
                    <div className='description space-y-2 w-full text-base sm:text-base md:text-lg lg:text-xl' style={{fontFamily:"Public"}}>
                        <p className='border-b-2 border-black p-4'>Background in Marketing and Sales</p>
                        <p className='border-b-2 border-black p-4'>Studing at Ada Tech School to be a Front-End Developer</p>
                        <p className='border-b-2 border-black p-4'>I like to create user interface with engaging animations for a memorable user experience</p>
                    </div>            
                </div>  
            </div>
        </motion.div>  
        

    </div>
  )
}

export default About

