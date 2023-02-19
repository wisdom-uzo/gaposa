'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText } from '../components'
import { fadeIn, staggerContainer } from '../utils/motion';  
import { insights } from '../constants'
import { useState } from 'react';

const Explore = () => {

   const [active, setActive] = useState("world-2")

  return (
  <section className={`${styles.paddings} `} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView='show'
        viewport={{once: false, amount:0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col w-full`}>

            
            <TitleText title={<>Choose the world you want <br className='md:block hidden' /> to explore </>}
              textStyles='text-center' />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {insights.map((world, index) => (
                  <div className="text-center shadow-lg" key={index} >
                    <img alt={world.title} src={world.imgUrl} className='w-full h-[20rem]' />
                    <p className='my-3 font-semibold text'>{world.title}</p>
                  </div>
                ))}
            </div>
      </motion.div>
  </section>
)
};

export default Explore;
