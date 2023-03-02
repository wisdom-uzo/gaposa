import Link from 'next/link'
import React from 'react'

const Reg = () => {
  return (
    <div className={`bg-[url('/registration.jpg')] pt-[10rem] bg-no-repeat`}>
    <h1 className='md:text-[3em] text-[2em] text-center text-white font-extrabold'>Register with us.</h1>

    
    <div className=" md:w-[70%] w-[90%] shadow-md text-gray-700 bg-white mx-auto mt-10 rounded-md p-5 leading-8 text-base text-justify ">
        <p>The registration fee for this Conference is fifteen thousand naira (N15,000) for physical participation and ten thousand naira(N10,000) for virtual participation. Please note that late submission of papers shall attract an additional fee of five thousand naira (N5,000).The physical participation cost shall cover Conference materials, lunch and light breakfast on day 2. Registration for international participants is $100 while student registration is five thousand naira (N5,000) only. You may please pay the registration fee to:</p>
          
        <div className="mt-2">
            <p className=""><strong>Account Name: </strong>GAPOSA SS&T CONFERENCE AND JOURNAL</p>
            <p><strong>Account Number </strong>: 1226078857</p>
            <p><strong>Bank:</strong>ZENITH BANK.</p>
        </div>
        
        <p className='mt-2'>Kindly upload the receipt of your payment once done. Please note that only registered participants and invited guests shall be allowed into the venue. Upload your registration fee receipt 
        <Link href='/clearance'> <span className='font-bold text-red-600'>here</span></Link> </p>
    </div>


    

    
    </div>
  )
}

export default Reg