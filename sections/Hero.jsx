'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className="sm:py-16 xs:py-8 py-1">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mx-auto flex flex-col"
    >
      <div className="flex md:justify-center  justify-start items-left flex-col absolute z-10">
        <motion.h1 variants={textVariant(1.1)} className="font-audio lg:text-[100px] md:text-[80px] sm:text-[60px] text-[27px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white lg:pl-16 md:pl-5 pl-5 tracking-[10px] ">
          Bienvenidos
        </motion.h1>
        <motion.p variants={textVariant(1.1)} className='font-gruppo text-gray-300 tracking-[2px] lg:w-[600px] md:w-[350px] w-[80%] pl-7 lg:pl-20  relative  z-10'><span className=" font-gruppo text-white">Mi nombre es Dante Ginaca,</span> soy un esquiador apasionado y manija de la nieve de 23 años.</motion.p>
        {/*<motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>Ness</h1>
</motion.div>*/}
      <Link href="https://www.youtube.com/watch?v=TLH-Mhnu5mY&t=78s&ab_channel=GoRelaxProductions" target="_blanc">
          <motion.button variants={textVariant(1.1)} className='font-gruppo text-gray-100 tracking-[7px] pl-7 lg:pl-20 pt-6 cursor-pointer hover:tracking-[10px] hover:text-white transition-all relative  z-10'>
            Ver Más
          </motion.button>
      </Link>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt- [12px]"
      >
        <div
          className="absolute w-full h-[500px] 
               rounded-tl-[140px] 
              z-[0] -top-[30px]"
        />
      {/* <Image priority src="https://ibb.co/KVhqhGq" layout="fill" objectFit="cover" className="w-full sm:h-[500px] 
               h-[350px] object-cover 
               rounded-tl-[140px] z-10 relative" />*/}
      <img
          src="https://i.ibb.co/gt9T97T/hero.png"
          alt="alt"
          className="w-full h-[300px]  md:h-[500px] lg:h-[730px] 2xl:h-[920px]
                object-cover 
               rounded-tl-[140px] lg:md:mt-[14vh] md:mt-[10vh] z-0 relative mt-[10vh] hidden md:flex "
/>
        <div className=" hero-img z-0 relative mt-[28vh] md:hidden flex"></div>

        {/* <a href="#explore">
          <div
            className="w-full flex justify-end sm:-mt-[70px]
                    -mt-[50px] pr-[40px]
                    relative z-10"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
