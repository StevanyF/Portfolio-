import React from 'react'

const Header = ({ scrollToSection }) => {
  return (
    <div>
      <nav className="flex justify-center items-center mb-10">
        <ul className="fixed space-x-8 rounded-full p-4 px-6 text-lg text-white border-2 border-lime-200  z-10 backdrop-blur-md bg-black/30  md:scale-65 shadow-xl transition-all" style={{fontFamily:"Public"}}>
            <a onClick={() => scrollToSection('home')} className="hover:bg-lime-200 hover:text-black hover:p-2 hover:rounded-full hover:transition-all cursor-pointer">Home</a>
            {/* <a onClick={() => scrollToSection('about')} className="hover:bg-lime-200 hover:text-black hover:p-2 hover:rounded-full hover:transition-all cursor-pointer">About</a> */}
            <a onClick={() => scrollToSection('projects')} className="hover:bg-lime-200 hover:text-black hover:p-2 hover:rounded-full hover:transition-all cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="hover:bg-lime-200 hover:text-black hover:p-2 hover:rounded-full hover:transition-all cursor-pointer">Contact</a>
        </ul>
      </nav>
    </div>
  )
}

export default Header
