import React from 'react'
import { About, Explore, Hero } from '../sections'
import Layout from './Layout'

const Index = () => {
  return (
    <Layout className=''>
    
        <Hero />
        
        <div className="relative">
        <About />
        <div className=" gradient-03 z-0"/>
        <Explore />
        </div>
    
    
    
    
    
    </Layout>
  )
}

export default Index