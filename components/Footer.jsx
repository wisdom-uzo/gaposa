/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';



const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}>
    
    <div className="footer-gradient"/>

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-4`}>
        <div className="flex items-center justify-between flex-wrap gap-5 ">
          <h4 className='text-white font-bold text-[35px] md:text-[54px]'>Enter the Metaverse</h4>
          <button type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#25618b] hover:bg-[#173c57] rounded-[32px] gap-[12px]'>
              <img src="/headset.svg" alt="" className="w-[24px] h-[24px] object-contain " />

              <span className="font-normal text-[16px] text-white ">Enter The Metaverse </span>
          </button> 
        </div>

        <div className="flex flex-col"></div>
        <div className='mb-[50px] h-[2px] bg-white opacity-10'/>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white ">Metavarsus</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright @ 2022 - 2023 Metavwesus. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social, index) => (
              <img src={social.url} key='index' alt=""
              className='w-[24px] h-[24px] object-contain cursor-pointer ' />
            ))}
          </div>
        </div>
    </div>
  </motion.footer>
);

export default Footer;
