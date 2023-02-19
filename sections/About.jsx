'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components'
import { fadeIn, staggerContainer } from '../utils/motion';  
import { data } from '../constants'



const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    
    <motion.div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0.25}}>


      <TitleText title={<>Announcement </>} textStyles='text-center' />
        

      <motion.p 
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal text-[20px] text-justify md:leading-[40px] leading-[30px]  '>
        {data.announcement}
      </motion.p>

        <motion.img 
          variants={fadeIn('up', 'tween', 0.5, 1)}
          src="/arrow-down.svg"
          alt='arrow down'
          className='w-[18px] h-[28px object-contain mt-[28px]'/>
        
    </motion.div>

  </section>
);

export default About;
