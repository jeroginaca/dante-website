'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://i.ibb.co/k5Wfvqf/Capa-8-copia-1.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="CARRERA PROFESIONAL" />
        <TitleText title={<>titulaciones</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
      
    </motion.div>
      <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
      

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="font-gruppo mt-[8px] font-normal sm:text-[32px] 
          text-[20px] text-center text-secondary-white lg:w-[70%]"
        >
          “Actualmente soy <span className="font-gruppo font-extrabold text-white">Director Tecnico</span> del <br/>
  Club Andino Villa La Angostura”
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  </section>
);

export default GetStarted;
