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
        <h1 className=' font-sans uppercase font-bold text-[25px] md:text-[38px] text-center'>the school of science and technology <br /> gateway (ict) polytechnic saapade</h1>
             
        <h1 className='text-amber-400 text-center font-extrabold text-[30px] md:text-[58px]'>2ND INTERNATIONAL CONFERENCE <br /> ON SCIENCE AND TECHNOLOGY</h1>
       
          
        <h2 className=' font-sans uppercase font-bold text-[20px] mt-5 md:text-[38px] text-center underline'>20th August - 22ND August, 2024.</h2>
        <h2 className=' font-sans uppercase font-bold text-[20px] md:text-[30px] text-center'>THEME: GREEN ECONOMY :A MULTIDIMENSIONAL <br /> APPROACH TO SUSTAINABLE DEVELOPMENT   </h2>
     </div>

    </motion.div>
  </section>
);

export default Hero;
