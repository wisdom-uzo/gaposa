/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText, InsightCard} from '../components'
import { staggerContainer, zoomIn, fadeIn } from '../utils/motion';  
import { insights } from '../constants';



const Feedback = () => (
  <section className={`md:w-[80%] w-full px-5 md:px-1  mx-auto relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}>

        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative '>
            <div className="feedback-gradient"/>      
            
            <div className="">
                <h2 
                  className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white ">
                  Samantha
                </h2>

                <p 
                  className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white ">
                    Founder | Metaversus
                </p>

                <p 
                className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white ">
                  whth the development of today&apos;s technology, metavarse is very usefull for today&apos;s work, or can be called web 3.0 by using metaverse you can use it as anything
                </p>
            </div>

        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='relative flex-1 flex justify-center items-center'>
            <img src="/planet-09.png" alt="" 
              className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] " />
            
              <motion.div 
                variants={zoomIn(0.4, 1)}
                className="lg:block hidden absolute left-[10%] top-[3%] ">
                  <img src="/stamp.png" alt="" 
                     className="w-[155px] h-[155px] object-contain  " />
              </motion.div>
        </motion.div>
      </motion.div>

  </section>
);

export default Feedback;
