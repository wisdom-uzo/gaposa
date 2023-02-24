import React from 'react'
import { CloudinaryUpload } from '../components'
import { Layout } from '../sections'

const clearance = () => {
  return (
    <Layout>
        <div className="bg-[url('/registration.jpg')] h-[20rem] flex justify-center font-extrabold items-center text-[25px] bg-black text-white">

            Clearance
        </div>
        
        <CloudinaryUpload />
        
    </Layout>
  )
}

export default clearance