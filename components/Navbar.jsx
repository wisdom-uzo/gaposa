/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles';
import { fadeIn, navVariants } from '../utils/motion';
 
const Navbar = () => {

  const [close, setClose] = useState(false)

  return (
  <motion.nav 
    className={`${styles.xPaddings} bg-black flex justify-between relative items-center`} >

       <img src="/logo.png"  alt="" className='bg-white rounded w-[80px] mr-10' />

       <div className="text-white flex-1 md:flex justify-between hidden ">
          <ul className='flex gap-3 items-center'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/'>Contact Us</Link></li>
              <li><Link href='/'>Accomodation</Link></li>
              <li><Link href='/'>Home</Link></li>
          
          </ul>

          <p type='' className='bg-red-500 p-3 rounded'><Link href='register'>Register</Link></p>
       
       </div>
    

    <button onClick={() => setClose(true)} className=" block md:hidden">
        <img src='/menu.svg' alt='' 

          className='w-[24px] h-[24px] object-contain'/>
    </button>

  {close && (
    <motion.div
    variants={fadeIn('up', 'spring', 0.5, 1)}    
    className=" absolute flex justify-center top-0 flex-col items-center z-50 right-0 w-[100%] p-10 bg-yellow-400">

    <button className=' absolute right-3 top-3' onClick={() => setClose(false)}>close</button>
    
    
    
    <ul className='flex flex-col font-semibold uppercase gap-5'>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/'>Contact Us</Link></li>
      <li><Link href='/'>Accomodation</Link></li>
      <li><Link href='/register'>Register</Link></li>

      </ul>
    
    
    
    </motion.div>
  )}     
    
       
  </motion.nav>
)};

export default Navbar;
