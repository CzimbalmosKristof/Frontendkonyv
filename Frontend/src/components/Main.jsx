import React from 'react'
import Footer from './Footer'

function Main() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="min-h-screen absolute inset-0">
      <img src="https://cdn.pixabay.com/photo/2015/10/10/13/03/prague-980732_1280.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-5d flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-5xl font-bold leading-tight mb-4">Üdvözöllek a könyvtári weboldalunkon</h1>
      <p className="text-lg text-gray-300 mb-8">Fedezd fel a könyvek csodálatos világát</p>
      <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Kezdj bele</a>
    </div>
    <Footer />
  </div>
  

    
)
}

export default Main