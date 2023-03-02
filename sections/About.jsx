'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components'
import { fadeIn, staggerContainer } from '../utils/motion';  
import { data } from '../constants'
import { Paper } from '@mui/material';



const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    
    <motion.div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0.25}}>


      <TitleText title={<>Announcement </>} textStyles='text-center' />
        

      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal text-[20px] text-justify md:leading-[40px] leading-[30px]  space-y-5'>
        <p className="text-gray-700 leading-relaxed mb-8">
        The School of Science and Technology, Gateway (ICT) Polytechnic Saapade, Ogun state, Nigeria is excited to announce the maiden edition of her <strong>International Conference on Science and Technology</strong> . The Conference presents a unique opportunity to everyone concerned with the Sustainability of the National growth of Nigeria and other nationals who can get ideas and information for growth and sustainable development of their own nations. Hence, this maiden edition holding between the 18th – 21st April, 2023 at the Leadership Development Centre, Gateway Polytechnic Saapade, Ogun state, Nigeria shall revolve around the theme: <strong>“Attaining National Sustainability Through Science and Technology.”</strong> 
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Researchers, Science and Technology experts, players in different fields of Science and Technology, policymakers, and individuals are therefore invited to come together and share their insights, works, findings, interests and experiences with one another at the upcoming Conference. The Conference will feature Keynote, presentations, panel discussions, and workshops on latest research, policy, and practice revolving around the theme as here highlighted.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        We sincerely hope that Nigeria and other nations of the world would find helpful ideas on Sustainable National Development from ideas to be shared at this conference.
      </p>
      <p className="text-gray-700 font-bold">
        Sincerely,
      </p>
      <p className="text-gray-700">
        Organizing Committee
      </p>
       </motion.div>

        <motion.img 
          variants={fadeIn('up', 'tween', 0.5, 1)}
          src="/arrow-down.svg"
          alt='arrow down'
          className='w-[18px] h-[28px object-contain mt-[28px]'/>
        
    </motion.div>


    

  </section>
);

export default About;
