/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';  

const Hero = () => (
  <section className={`  bg-[url('/banner.png')]  bg-no-repeat bg-cover text-white h-[40rem] relative flex flex-col justify-center items-center`}>
 
 

    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className=''>
          

      <div className="px-5">
        <h1 className=' font-sans uppercase font-bold text-[25px] md:text-[38px] text-center'>school of science gateway ict polytechnic <br /> INTERNATIONAL CONFERENCE ON</h1>
      
        <h1 className='text-center text-amber-400 font-extrabold text-[35px] md:text-[68px]'>SCIENTIFIC RESEARCH IN NIGERIA</h1>
          
        <h2 className=' font-sans uppercase font-bold text-[20px] mt-5 md:text-[38px] text-center underline'>2 - 5 MAY, 2023.</h2>
        <h2 className=' font-sans uppercase font-bold text-[20px] md:text-[30px] text-center'>THEME: STRENGTHENING SCIENTIFIC RESEARCH FOR NATIONAL DEVELOPMENT        </h2>
     </div>

    </motion.div>
  </section>
);

export default Hero;
