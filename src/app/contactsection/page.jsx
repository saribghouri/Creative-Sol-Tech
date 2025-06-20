import React from 'react'
import ContactUs from '../components/contact-us'
import Header from '../components/header'
import AnimatedMarketingSection from '../components/hero-section';

const Page = () => {
  return (
    <div>
      <div className='mt-[150px]'>

      <Header/>
      </div>

      <ContactUs/>
    </div>
  )
}

export default Page