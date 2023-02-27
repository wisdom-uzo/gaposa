/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles';
import { fadeIn, navVariants } from '../utils/motion';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
 
const Navbar = () => {

  const [close, setClose] = useState(false)

  return (
  <motion.nav 
    className={`${styles.xPaddings} bg-black flex justify-between relative items-center`} >

       <img src="/logo.png"  alt="" className='bg-white rounded w-[80px] mr-10' />

       <div className="text-white flex-1 md:flex justify-between hidden ">
          <ul className='flex gap-3 items-center'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/contact'>Contact Us</Link></li>
              <li><Link href='/accomodation'>Accomodation</Link></li>
              <li><Link href='/register'>Register</Link></li>
              <li>
                <Link href='clearance'>Clearance</Link>
              </li>
          
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
    className=" absolute flex justify-center  top-0 flex-col items-center z-50 right-0 w-[100%] p-10 bg-black text-white text-center ">

    <button className=' absolute right-3 top-3' onClick={() => setClose(false)}><HighlightOffIcon /> </button>
    
    
    
    <ul className='flex flex-col font-semibold uppercase gap-5 w-full'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/contact'>Contact Us</Link></li>
        <li><Link href='/accomodation'>Accomodation</Link></li>
       
        <li>
          <Link href='clearance'>Clearance</Link>
        </li>

        <li className='bg-red-600 py-2 rounded '><Link href='/register'>Register</Link></li>
      </ul>
    
    
    
    </motion.div>
  )}     
    
       
  </motion.nav>
)};

export default Navbar;
