import Link from 'next/link'
import React from 'react'

const Reg = () => {
  return (
    <div className={`bg-[url('/registration.jpg')] pt-[10rem] bg-no-repeat`}>
    <h1 className='md:text-[3em] text-[2em] text-center text-white font-extrabold'>Register with us.</h1>

    
    <div className=" md:w-[70%] w-[90%] shadow-md text-gray-800 bg-white mx-auto mt-10 rounded-md p-5 leading-8 font-semibold text-[20px]">
        <p>The registration fee covering the cost of conference materials, lunch and tea breaks is N25, 000.00. The registration for international paticipant is $100. The registration fee for students who are not academic staff and with identity cards is N15,000.00.</p>
        <p className='mt-4'>The registration fee for international student is $50. Please pay the registration fee to the conference account ( Name of account: University of Ibadan, Faculty of Science Alumni Association, Bank: Union Bank, Account Number: 0109363898) and upload the receipt of your payment. Only registered participants and invited guests will be allowed into the conference venue. Submit your registration fee receipt
        <Link href='/clearance'> <span className='font-bold text-red-600'>here</span></Link> </p>
    </div>


    

    
    </div>
  )
}

export default Reg