'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import Link from 'next/link';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';


const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
        <TypingText title="" textStyles="text-center" />
        <TitleText
          title={
            <>
              Contacto
            </>
          }
          textStyles="text-center"
        />
        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="font-gruppo mt-[8px] font-normal sm:text-[32px] 
        text-[20px] text-center text-secondary-white lg:w-[70%]"
      >
        <span className="font-gruppo font-extrabold text-white">Busco crecer</span> en la industria del esquí y los deportes de invierno, ¡Comunicate conmigo para cualquier ayuda, idea, proyecto o lo que sea que creas que puedas<span className="font-gruppo font-extrabold text-white"> sumar</span> a esta interminable aventura!
      </motion.p>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 mt-10`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end 
      flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] 
      border-[#6a6a6a] relative "
      >
        <div className="feedback-gradient " />
        <div className='z-10 '>
          <h4
            className="font-audio tracking-[6px] font-bold sm:text-[32px]
          text-[26px] sm:leading-[40px] leading-[36px] text-white"
          >
            Mail
          </h4>
          <Link href="mailto:danteginaca@gmail.com">          <p
            className="font-gruppo mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px]
          leading-[16px] text-white hover:tracking-[2px] transition-all"
          >
            danteginaca@gmail.com
          </p>
          </Link>

        </div>
        <div className='mt-6 z-10'>
          <h4
            className="font-audio tracking-[6px] font-bold sm:text-[32px]
          text-[26px] sm:leading-[40px] leading-[36px] text-white"
          >
            Tel
          </h4>
          <Link href="https://wa.link/jxo54g" target="_blank">          <p
            className="font-gruppo mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px]
          leading-[16px] text-white hover:tracking-[2px] transition-all"
          >
           +5492944642310
          </p>
          </Link>

        </div>
        <div className='mt-6 z-10'>
          <h4
            className="font-audio tracking-[6px] font-bold sm:text-[32px]
          text-[26px] sm:leading-[40px] leading-[36px] text-white"
          >
            Instagram
          </h4>
          <Link href="https://instagram.com/danteginaca" target="_blank">          <p
            className="font-gruppo mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px]
          leading-[16px] text-white hover:tracking-[2px] transition-all"
          >
           Danteginaca
          </p>
          </Link>

        </div>
        <div className='mt-6 z-10'>
          <h4
            className="font-audio tracking-[6px] font-bold sm:text-[32px]
          text-[26px] sm:leading-[40px] leading-[36px] text-white"
          >
            Videos
          </h4>
          <Link href="https://youtube.com/gorelaxproductions" target="_blank">          <p
            className="font-gruppo mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px]
          leading-[16px] text-white hover:tracking-[2px] transition-all"
          >
           Go Relax Productions
          </p>
          </Link>

        </div>

       {/* <p
          className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px]
          leading-[39px] text-white"
        >
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>*/}
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex
      justify-center items-center"
      >
        <img
          src="https://i.ibb.co/FWG0wcQ/Mask-group.png"
          alt="planet-09"
          className="w-full lg:h-[610px] 
        h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        {/* <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px]
          object-contain"
          />
        </motion.div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
