import React from 'react'
import { Timer } from '../components'
import { About, Explore, Hero } from '../sections'
import Layout from './Layout'

const Index = () => {
  return (
    <Layout className=''>
    
        <Hero />
        <Timer />
        <div className="relative">
        <About />
        <div className=" gradient-03 z-0"/>
        <Explore />
        </div>
    
    
    
    
    
    </Layout>
  )
}

export default Index