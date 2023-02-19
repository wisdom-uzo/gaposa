/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Form } from '../../components'


const Register = () => { 
  return (
    <div className={`bg-[url('/registration.jpg')] pt-[10rem] bg-no-repeat`}>
      <h1 className='text-[3em] text-center text-white font-extrabold'>Register with us.</h1>
       
      <div className=" md:w-[70%] w-[90%] shadow-md text-gray-800 bg-white mx-auto mt-10 rounded-md p-5 leading-8 font-semibold text-[20px]">
        <p>The registration fee covering the cost of conference materials, lunch and tea breaks is N25, 000.00. The registration for international paticipant is $100. The registration fee for students who are not academic staff and with identity cards is N15,000.00.</p>
        <p className='mt-4'>The registration fee for international student is $50. Please pay the registration fee to the conference account ( Name of account: University of Ibadan, Faculty of Science Alumni Association, Bank: Union Bank, Account Number: 0109363898) and upload the receipt of your payment. Only registered participants and invited guests will be allowed into the conference venue. Submit your registration fee receipt here</p>
      </div>


      <Form />

      
    </div>
  )
}

export default Register