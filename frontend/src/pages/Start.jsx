import React from 'react'
import { Link } from 'react-router-dom'
import cabielogo from '../assets/images/cabielogo.png'
import bgimg from '../assets/images/bgimg.png'

const Start = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* background image */}
      <img
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={bgimg}
        alt="background"
      />

      {/* logo */}
      <img className="w-36 ml-6 mt-6 relative z-10" src={cabielogo} alt="logo" />

      {/* 🔽 White div at bottom */}
      <div className='absolute bottom-0 left-0 w-full bg-white pb-7 py-4 px-4 shadow-md'>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Get Started with Cabie/Uber
        </h2>
        <Link
          to="/login"
          className="w-full block text-center bg-black text-white text-lg font-medium py-3 rounded-xl hover:bg-gray-900 transition duration-200"
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Start
