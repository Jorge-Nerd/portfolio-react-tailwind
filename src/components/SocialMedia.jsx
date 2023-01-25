import React from 'react'

const SocialMedia = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a 
            href="https://www.linkedin.com/in/jailsonsanches " 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel='noreferrer'
            >
                <img src="../assets/linkedin.png" alt="linkedin" />
            </a>
        
        <a 
            href="https://www.facebook.com" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel='noreferrer'
            >
                <img src="../assets/facebook.png" alt="linkedin" />
            </a>
        
        <a 
            href="https://www.instagram.com" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel='noreferrer'
            >
                <img src="../assets/instagram.png" alt="linkedin" />
            </a>
        
    </div>
  )
}

export default SocialMedia