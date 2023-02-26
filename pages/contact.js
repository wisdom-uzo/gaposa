import { Email, Phone } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Layout } from '../sections'
  
                   

const contact = () => {

   
  return (
    <Layout>
        <h1 className=' uppercase text-center my-6 text-[25px] font-extrabold'>contact us </h1>
      <div className="flex flex-col md:flex-row">

          <div className="text-gray-700 px-5">
            <h1 className='font-bold text-[20px] mb-2'>Contact Information</h1>   
              <p className='text-sm'>If you have any questions, feel free to contact us with the information below </p>
              
              <div className="mt-5">
              <p><Email /> : gaposastconf@gmail.com</p>          
              <p><Phone />  : +234 8062618986, +234 806043456</p>
              </div>
              
          </div> 


          <div className="px-5 mt-5">
          <form >
          <h1 className='font-bold text-[20px] mb-7'>Send massage</h1>   

          <div className='mb-2'>
            <Typography className=''>Name</Typography>
           
            <TextField
              id="name"
              variant="outlined"
              required
              className='w-full'
              size='small'
            />
          </div>
          <div className='mb-2'>
            <Typography className=''>Email</Typography>
            <TextField
              id="email"
              type="email"
              variant="outlined"
              className='w-full'
              size='small'
              required
            />
          </div>
          <div className='mb-5'>
            <Typography className=''>Message</Typography>
            <TextField
              id="message"
              variant="outlined"
              className='w-full'
              size='small'
              multiline
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className='w-full bg-blue-700 rounded mb-5 text-white py-2'
          >
            Submit
          </button>

        </form>
          </div>
      
          
      </div>
    </Layout>
  )
}
    
export default contact