'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="COMPETENCIAS" />
        <TitleText title={<>Freeride
world qualifier</>} />
        <div className=" mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://i.ibb.co/pw4Tpbt/Capa-6-copia-1.png"
          alt="whats-new"
          className=" w-[90%] h-[90%] object-contain"
        />
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
         Hoy en dia me encuentro entrenando para competir en <span className="font-gruppo font-extrabold text-white">The French Freeride Series</span> en La Thuile, Italia FWQ 2* y <span className="font-gruppo font-extrabold text-white">Chamonix Mont BLanc,</span> Francia FWQ 2*. También competire en Ordino Arcalis, Andorra FWQ 3* cerrando así un ciclo de 3 carreras en <span className="font-gruppo font-extrabold text-white">Europa,</span> preparándome para el circuito <span className="font-gruppo font-extrabold text-white">Sudamericano 2023</span> donde quiero ir a pelear por el titulo y dejar todo en cada fecha.
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

export default WhatsNew;
