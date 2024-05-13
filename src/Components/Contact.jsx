import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='mt-4 h-screen'>
      {/* <div className='section flex '> */}
        {/* <div className='section_1 justify-center items-center'>
          <h1 className='text-7xl sm:text-9xl md:text-lg lg:text-[200px] font-semibold text-orange-600 '>Coffee?</h1>
        </div>
        <div className='flex mt-20'>
          <p className='text-xl text-orange-600 '>Let's get in touch and maybe share one someday.</p>
        </div>
        <div className='flex space-x-4 py-4 border-b text-black uppercase '>
          <a href='https://www.linkedin.com' className='text-xl  ' >Linkdln</a>
          <a href='https://github.com' className='text-xl   ' >github</a>
          <a href='https://github.com' className='text-xl  ' >Email</a>         
        </div>
      </div>
      <div className='flex justify-center items-end'>
        <h1 className='uppercase text-orange-600 '>Designed and developed by Stevany</h1>
      </div>    */}

        <div className='section flex-col items-end p-5 rounded-[20px] '>
            <div className='section_1 items-end '>
                <h1 className='text-7xl sm:text-9xl md:text-lg lg:text-[200px] h-60 py-24 font-semibold text-violet-600' style={{fontFamily:"Wood"}}>Coffee?</h1>
            </div>
            <div className='section_1 content-end  h-20 '>
                <p className='text-xl text-violet-600' style={{fontFamily:"Public"}}>Let's get in touch and maybe share one someday.</p>
            </div>
            <div className='section_1 h-20 space-x-4  py-4 text-black uppercase' style={{fontFamily:"Public"}}>
                <a href='https://www.linkedin.com' className='text-xl rounded-full border-2 border-black p-2' >Linkdln</a>
                <a href='https://github.com' className='text-xl rounded-full border-2 border-black  p-2 ' >github</a>
                <a href='https://github.com' className='text-xl  rounded-full border-2 border-black  p-2' >Email</a>
                
            </div>
        </div>
        <div className='flex justify-center items-end'>
            <h1 className='uppercase text-orange-600 '>Designed and developed by Stevany</h1>
        </div>
    </div>
  )
}

export default Contact
