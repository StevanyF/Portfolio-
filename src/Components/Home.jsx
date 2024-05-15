import React from 'react'

const Home = () => {
  return (
    <div className='bg-violet-500 rounded-[30px] shadow-2xl  '>
        <div className="intro flex justify-center items-center" style={{fontFamily:"Wood"}}>
            <h1 className='maw-w-[290px] sm:maw-w-[520px]  md:ml-1/12 ml-20 text-5xl sm:text-9xl md:text-lg lg:text-9xl  font-bold text-lime-300 mt-20 mb-20 '>
                <span>Hello,</span>  
                <span className='mt-[-30px]'><br/>I'm Stevany</span> 
                <p className=' text-2xl sm:text-4xl md:text-lg lg:text-4xl md:ml-2 mt-5 lg:ml-60 leading-normal font-semibold text-lime-300'>_a Front-End Developer based in Paris</p>
            </h1>
        </div>
    </div>
  )
}

export default Home
