import React from 'react'
import { Timer } from '../components'
import { About, Explore, Hero } from '../sections'
import Layout from './Layout'

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