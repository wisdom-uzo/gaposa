/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';



const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView="show"
    className={`bg-[url('/banner.png')]  bg-no-repeat bg-cover px-10 py-10`}>
    
      <div className="md:flex justify-between space-y-8">
          <div className="">
              
              <img src='logo.png' alt="" className='bg-white rounded-md' />
              <p className='text-white'>School of science</p>
          </div>

          <div className="text-white ">
              <h3>QUICK LINK</h3>
              <p><Link href="#">Home</Link></p>
              <p><Link href="#">Abstract Submission</Link></p>
              <p><Link href="#">Home</Link></p>
          </div>

          <div className="text-white ">
              <h3>QUICK LINK</h3>
              <p><Link href="#">Home</Link></p>
              <p><Link href="#">Abstract Submission</Link></p>
              <p><Link href="#">Home</Link></p>
          </div>


          <div className="text-white space-y-6">
              <h3>SOCIAL</h3>
              <div className="flex gap-4">
              {socials.map((item, index) => (
                <p key={index}>  <Link href="#"> <img src={item.url} alt="" /> </Link></p>
              ))}
              </div>
              <p>Visits: 2925</p>
              
          </div>
      </div>

      <p className='my-[30px] text-center text-white'>Copyright © 2023 - GcrownITsolution</p>
  </motion.footer>
);

export default Footer;
