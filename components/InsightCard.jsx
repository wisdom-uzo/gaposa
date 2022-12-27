/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({imgUrl, index, title, subtitle}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-4'>
      <img src={imgUrl} alt={title} 
      className='md:w-[250px] w-full h-[250px] rounded-[40px] object-contain' />
  
      <div className="w-full flex justify-between items-center">
          <div className="flex-1 md:ml-[52px] flex flex-col max-w-[650px]">
              <h4 className='font-normal lg:text-[35px] text-[26px] text-white '>{title}</h4>
              <p className='mt-[16px] font-normal lg:text-[18px] text-[14px] text-secondary-white '>{subtitle}</p>
          </div>

          <div className=" border rounded-full lg:flex items-center w-[70px] h-[70px] justify-center hidden bg-transparent border-white">
              <img src="arrow.svg" alt="arrow" 
                className="w-[40px] h-[40px] object-contain" />
          </div>
      
      </div>
  </motion.div>
);

export default InsightCard;
