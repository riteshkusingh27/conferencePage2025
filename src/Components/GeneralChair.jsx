import React from 'react'
import udaykumar from "/committee/udaykumar.jpeg";
// import drhemachandra from '../images/drhemachandra.jpeg'
const   GeneralChair = () => {
  return (
    <div className="flex justify-center">
      <div className="relative z-1 grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 ">
        {[
           { name: 'Dr Puttamadappa C', desc: 'Registrar, DSU', img: './images/drputtamadappa.jpeg' },
          { name: 'Dr. Udaya Kumar Reddy K R', desc: 'Dean School of Engineering , DSU', img: '/committee/udaykumar.jpeg' },
          
        ].map((person, index) => (
          <div key={index} className="p-6 bg-white bg-opacity-80 rounded-xl shadow-md text-center hover:shadow-xl transition-all w-70">
            <img src={person.img} alt={person.name} className="w-42 h-42 mx-auto rounded-full mb-4" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">{person.name}</h3>
            <p className="text-gray-600 text-sm">{person.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GeneralChair;
