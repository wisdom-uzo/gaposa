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
          <p className=""> <span className='text-[30px] '>The</span> School of Science and Technology, Gateway (ICT) Polytechnic Saapade, Ogun state, Nigeria is excited to announce the maiden edition of her <strong> Conference on Science and Technology.</strong>   The Conference presents a unique opportunity to everyone concerned with the Sustainability of the National growth of Nigeria and other nationals who can get idea and information for growth and sustainable development of their own nations. </p>
          <p className="">Hence, this maiden edition holding between the 18th – 21st April, 2023 at the Leadership Development Centre, Gateway Polytechnic Saapade, Ogun state, Nigeria shall revolve around the theme: <strong> “Attaining National Sustainability Through Science and Technology.” </strong> . </p>
          <p className="">Researchers, Science and Technology experts, players in different fields of Science and Technology, policymakers, and individuals are here invited to come together and share their insights, works, findings, interest and experiences with one another at the upcoming Conference. The Conference will feature Keynote, presentations, panel discussions, and workshops on latest research, policy, and practice revolving around the theme as here highlighted. </p>
          <p className="">We sincerely hope that Nigeria and other nations of the world would find helpful idea on Sustainable National Development from ideas to be shared at this conference.</p>
          
          <p className='mt-3'>
            <i>Sincerely, </i> <br />
            <strong> Organizing Committee</strong>
          </p>
       </motion.div>

        <motion.img 
          variants={fadeIn('up', 'tween', 0.5, 1)}
          src="/arrow-down.svg"
          alt='arrow down'
          className='w-[18px] h-[28px object-contain mt-[28px]'/>
        
    </motion.div>


    <div className="">
     <TitleText title={<>REGISTRATION FEE</>} textStyles='text-center' />

     <Paper elevation={3} className="p-2 grid gap-3 text-center mt-5 md:grid-cols-4">

        <Paper elevation={3} className="p-2">
            <p className="">LOCAL</p>
            <p className="">N15,000</p>
        </Paper>

        <Paper elevation={3} className="p-2">
        <p className="">Virtual</p>
        <p className="">N10,000</p>
        </Paper>

        <Paper elevation={3} className="p-2">
        <p className="">international</p>
        <p className="">$100</p>
        </Paper>

        <Paper elevation={3} className="p-2">
        <p className="">Students</p>
        <p className="">N5,000</p>
        </Paper>

     </Paper>
     
    
    </div>

  </section>
);

export default About;
