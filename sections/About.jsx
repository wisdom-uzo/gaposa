'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components'
import { fadeIn, staggerContainer } from '../utils/motion';  


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="  gradient-02 z-0" />

    <motion.div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0.25}}>
        <TypingText title='| About Metaversus' textStyles='text-center' />

        <motion.p 
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse rerum iure ab laborum quas ullam asperiores est consectetur doloremque eligendi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat earum laudantium suscipit fugiat consequuntur deleniti quisquam ea optio delectus!
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
