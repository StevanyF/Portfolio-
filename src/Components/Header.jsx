import React from 'react'

const Header = ({ scrollToSection }) => {
  return (
    <div id='home'>
      <nav className="flex justify-center items-center mb-10 ">
        <ul className="flex fixed space-x-4 p-4 text-lg text-white rounded-full border-2 border-lime-200 backdrop-blur-md bg-black/20 shadow-lg z-10" style={{fontFamily:"Public"}}>
            <li><a onClick={() => scrollToSection('home')} className="hover:bg-lime-200 hover:text-black hover:p-2 hover:rounded-full hover:transition-all cursor-pointer ">Home</a></li>
            <li><a onClick={() => scrollToSection('about')} className="hover:bg-lime-200 hover:text-black hover:p-2 hover:rounded-full hover:transition-all cursor-pointer">About</a></li>
            <li><a onClick={() => scrollToSection('projects')} className="hover:bg-lime-200 hover:text-black hover:p-2 hover:rounded-full hover:transition-all cursor-pointer">Projects</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="hover:bg-lime-200 hover:text-black hover:p-2 hover:rounded-full hover:transition-all cursor-pointer">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
