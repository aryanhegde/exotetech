import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>Subscribe and Follow</h4>
        <div className='my-5 mx-5'>
          <SocialLinks isDark /> 
        </div>
        <Subscribe />
        <div className="bg-wh-900 my-8">advert image</div> 
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center justify-center'>About the Blog</h4>
        <div className='bg-wh-900 my-8'>
          profile image
        </div>
        <h4 className=' py-3 px-5 text-wh-500 text-xs font-bold text-center'>ExoteTech</h4>
        <div className="text-wh-500 text-center font-bold">
          Read the latest Artificial Intelligence and Tech news.
        </div>
    </section>
  )
}

export default Sidebar