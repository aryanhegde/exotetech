import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
      <div className='justify-between mx-auto gap-16 sm:flex'>

        {/* First Column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h1 className='font-bold'>ExoteTech</h1>
          <p className='my-5'>Your ultimate destination for cutting-edge AI and technology insights. Our blog app is designed to keep you up-to-date with the latest advancements in artificial intelligence, automation, and all things tech-related. Whether youre a tech enthusiast, a professional in the industry, or simply curious about the future of technology, ExoteTech is your go-to resource.</p>
          <p>@ ExoteTech All Rights Reserved.</p>
          
        </div>
         {/* Second Column */}
         <div className="mt-16 basis-1/4 sm:mt-0">
          <h1 className='font-bold'>Links</h1>
          <p className='my-5'>Home</p>
          <p className='my-5'>Trending</p>
          <p className='my-5'>About</p>

          </div>

          {/* Third Column */}
         <div className="mt-16 basis-1/4 sm:mt-0">
          <h1 className='font-bold'>Contact Us</h1>
          <p className='my-5'>hello@exotetech.com</p>
          <p>+91 81168 45199</p>

          </div>


      </div>
    </footer>
  )
}

export default Footer