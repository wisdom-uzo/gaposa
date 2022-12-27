/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({id, imgUrl, title, index, active, handleClick}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index*0.5, 0.75)}
    className={`relative ${active==id ? 'lg:flex-[3.5] flex-[8]': 'lg:flex-[0.3] flex-[2]'}
    flex items-center justify-center min-w-[120px] h-[500px] ease-out-flex transition-[flex] duration-[0.7s] cursor-pointer`}
    onClick={() => handleClick(id)}>
  
     <img src={imgUrl} alt={title}
     className='absolute w-full h-full object-cover rounded-[24px]' />
     {active !== id ? (
      <h3 className="z-0 absolute text-white font-semibold sm:text-[26px] text-[18px] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">{title}</h3>
     ) : (
      <div className=" absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[10px]`}>
            <img src='/headset.svg' alt='headset'
              className='w=1/2 h-1/2 object-contain' />
        </div>
        <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
          Enter the metaverse
        </p>
        <h2 className='mt-[14px] font-semibold sm:text-[32px] text-[24px] text-white'>
            {title}
        </h2>

      </div>
     )}
  </motion.div>
);

export default ExploreCard;
