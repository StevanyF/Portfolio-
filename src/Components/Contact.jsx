import React from 'react'



const Contact = () => {
  return (
    <div id='contact' className='mt-20 '>  
      <div className='section flex justify-center items-center'>
        <div className='section_1 space-y-4 '>
            <img className='w-80 lg:ml-60 md:ml-50' src='/img/3d-hygge-colleagues-discussing-the-project.png' alt='me' />
            <h1 className='text-7xl sm:text-9xl md:text-8xl lg:text-[200px] font-semibold text-violet-600' style={{fontFamily:"Wood"}}>Coffee?</h1>
            <p className='text-xl text-violet-600 ' style={{fontFamily:"Public"}}>Let's get in touch and maybe share one someday </p>
            <p className='text-2xl text-black/80'>stevanym96@gmail.com</p>

          <div className='section_1 flex justify-center items-center space-x-4  py-4 text-black uppercase text-sm sm:text-base md:text-lg lg:text-2xl' style={{fontFamily:"Public"}}>
              <a href='https://www.linkedin.com' className='link ' >Linkedin</a>
              <a href='https://github.com' className='link ' >Github</a>              
          </div>
        </div>         
      </div>

      <div className='flex m-4 justify-center items-end'>
          <h1 className='text-sm uppercase text-black'> A creative practice by Stevany Ouedraogo &copy; {new Date().getFullYear()}</h1>
      </div>
    </div>
  )
}

export default Contact


