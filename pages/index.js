import React from 'react'
import { Pricing, Program, Timer } from '../components'
import { About, Explore, Hero, Layout, MeetOurSpeakers } from '../sections'


const Index = () => {
  return (
    <Layout className=''>
    <div className=" overflow-hidden">
        <Hero />
        <Timer />
        <About />
        
        <Program />
        <MeetOurSpeakers />
        <Pricing />
        <Explore />
      
    </div>
    
    
    
    
    </Layout>
  )
}

export default Index