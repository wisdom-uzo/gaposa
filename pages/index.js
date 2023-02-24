import React from 'react'
import { Timer } from '../components'
import { About, Explore, Hero, Layout } from '../sections'


const Index = () => {
  return (
    <Layout className=''>
    <div className=" overflow-hidden">
        <Hero />
        <Timer />
        <About />
        <Explore />
      
    </div>
    
    
    
    
    </Layout>
  )
}

export default Index