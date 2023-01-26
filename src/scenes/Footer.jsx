import React from 'react'
import SocialMedia from '../components/SocialMedia'

const Footer = () => {
  return (
    <footer className='h-64 bg-gradient-j pt-10'>
      <div className="w-5/6 mx-auto">
        <SocialMedia />
        <div className='md:flex justify-center md:justify-between text-center'>
          <p className='font-playfair font-semibold text-2xl text-purple'>Jailson Sanches</p>
          <p className='font-playfair text-md text-purple '>©Copyrights 2023. All rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer