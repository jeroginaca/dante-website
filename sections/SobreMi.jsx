'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, textVariant } from '../utils/motion';
import Link from 'next/link';

import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const SobreMi = () => (
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
       { /*<TypingText title="AHORA TE CUENTO" />*/}
        <TitleText title={<>SOBRE MI</>} />
        <div className=" mt-[10px] flex flex-wrap justify-between gap-[24px]">
        <p className="font-gruppo flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32px] ">
        Disfruto el esqui en todas sus facetas, tanto en los centros de esqui como en las montañas solitarias.
Trabajo en la nieve formando futuros esquiadores y perfeccionandome a mi mismo.
Nunca me doy por vencido, bajar los brazos no es una opcion, consigo todos los objetivos que me propongo a su debido tiempo.
        </p>
        </div>
        <Link href="/sobremi">
          <motion.button variants={textVariant(1.1)} className='font-gruppo text-gray-100 tracking-[7px]  pt-6 cursor-pointer hover:tracking-[10px] transition-all relative mt-[10px]  z-10'>
            Ver Más
          </motion.button>
      </Link>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://i.ibb.co/hRrns07/PNG-DANTE-2x-1.png"
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
    

     

      
    </motion.div>
  </section>
  </section>
);

export default SobreMi;
