import { LocalOffer, Public, School } from '@mui/icons-material';
import React from 'react';
import { TitleText } from './CustomTexts';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Link from 'next/link';


function Pricing() {
  return (
    <section className="bg-gray-100 px-5 py-12">
    <motion.div
    className={`${styles.innerWidth} ${styles.flexCenter} flex-col`}
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount:0.25}}> 

    <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="container mx-auto flex flex-col justify-center items-center">
        <TitleText title={<>REGISTRATION FEE</>} textStyles='text-center' />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                    <LocalOffer fontSize="large" />
                    <h3 className="text-lg font-bold ml-4">Local</h3>
                </div>
                <div className="text-4xl font-bold mb-4">N15,000</div>
                <p>Access to local events</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                    <Public fontSize="large" />
                    <h3 className="text-lg font-bold ml-4">Virtual</h3>
                </div>
                <div className="text-4xl font-bold mb-4">N10,000</div>
                <p>Access to virtual events</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                    <Public fontSize="large" />
                    <h3 className="text-lg font-bold ml-4">International</h3>
                </div>
                <div className="text-4xl font-bold mb-4">$100</div>
                <p>Access to international events</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4">
                <div className="flex items-center mb-4">
                    <School fontSize="large" />
                    <h3 className="text-lg font-bold ml-4">Students</h3>
                </div>
                <div className="text-4xl font-bold mb-4">N5,000</div>
                <p>Access to events for students</p>
                </div>
            </div>
            </div>

            <motion.p style={{padding:'8px 0'}} className=" font-bold w-[80%] text-center mt-5 shadow-md rounded-md bg-white "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
                <Link className='px-5' href='/register'>Register Here</Link>
            </motion.p>
        </motion.div>


    </motion.div>
    </section>
  );
}

export default Pricing;
