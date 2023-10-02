'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, textVariant } from '../utils/motion';
import Link from 'next/link';

import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const SobreMi2 = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center  gap-8`}
    >
        <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://i.ibb.co/hRrns07/PNG-DANTE-2x-1.png"
          alt="whats-new"
          className="md:w-[50%] md:h-[50%] w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col justify-center items-center"
      >
        
       { /*<TypingText title="AHORA TE CUENTO" />*/}
        <TitleText title={<>SOBRE MI</>} />
        <div className=" mt-[10px] flex flex-wrap justify-between gap-[24px]">
        <p className="font-gruppo lg:w-[37rem] flex-1 font-normal text-[18px] text-[#B0B0B0] text-center leading-[32px] ">
        Me dedico a trabajar y hacer lo que me gusta todos los días, esquiar y compartir la montaña con amigos.
 Generando contenido para compartir e inmortalizar esos momentos tan especiales que nos regala la naturaleza.
        </p>
        </div>
       
      </motion.div>

      <div className={`flex-1 ${styles.flexCenter}`} >
        <img
          src="https://i.ibb.co/mDMzLNg/dante-sobre-mi-1.png"
          alt="whats-new"
          className=" md:w-[50%] md:h-[50%] w-[90%] h-[90%] object-contain"
        />
      </div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col justify-center items-center"
      >
        
       { /*<TypingText title="AHORA TE CUENTO" />*/}
       
        <div className=" mt-[10px] flex flex-wrap justify-between gap-[24px]">
        <p className="font-gruppo lg:w-[37rem] flex-1 font-normal text-[18px] text-[#B0B0B0] text-center leading-[32px] ">
        Me dedico a trabajar y hacer lo que me gusta todos los días, esquiar y compartir la montaña con amigos.
 Generando contenido para compartir e inmortalizar esos momentos tan especiales que nos regala la naturaleza.
        </p>
        </div>
       
      </motion.div>
        <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
            <div className="flex justify-end">
                <img
                src="https://i.ibb.co/T2pKtL5/Mask-group.png"
                alt="whats-new"
                className=" w-[80%] h-[80%] md:w-[60%] md:h-[60%] object-contain"
                />
            </div>
            <div className="flex justify-start">
                <img
                src="https://i.ibb.co/LdDxJ4Y/Mask-group-1.png"
                alt="whats-new"
                className=" w-[80%] h-[80%] md:w-[60%] md:h-[60%] object-contain"
                />
            </div>
      </div>
     
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center justify-center items-center"
      >
        
       { /*<TypingText title="AHORA TE CUENTO" />*/}
        <TitleText title={<>carrera profesional</>} />
       
        <p className="mt-[10px] font-gruppo lg:w-[37rem] flex-1 font-normal text-[18px] text-[#B0B0B0] text-center leading-[32px] ">
        “Actualmente soy Director Tecnico del
Club Andino Villa La Angostura”
        </p>
        <p className="mt-[3rem] font-gruppo lg:w-[55rem] flex-1 font-normal text-[18px] text-[#B0B0B0] text-center leading-[32px] ">
        Para poder estar todo el tiempo posible cerca de la montaña y el invierno me dedico a trabajar en la misma.
Comencé a capacitarme de manera profesional a los 17 años haciendo el nivel 1 de Instructor de Esquí de AADIDESS (Asociación Argentina de Instructores de Esquí, Snowboard y Pisteros Socorristas) en 2016.
En 2017 realize el Nivel 2 del instructorado y en 2018 el Nivel 3 + ISIA Test.
Luego en el 2021 realice el curso de Pistero Socorrista de Primer Grado también dictado por AADIDESS.
Y finalmente en 2022 el curso de Entrenador de Club de esquí de competición y el ingreso al nivel 4 de instructor (Demostrador).
        </p>
       
       
      </motion.div>

      <img
          src="https://i.ibb.co/6J76ZQb/IMG-8759-1.png"
          alt="whats-new"
          className="mt-10 md:w-[50%] md:h-[50%] w-[90%] h-[90%] object-contain"
        />
        <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center text-center flex-col justify-center items-center"
      >
        
       { /*<TypingText title="AHORA TE CUENTO" />*/}
        <TitleText title={<>Freeride
world <br/> qualifier</>} />
       
        <p className="mt-[3rem] font-gruppo lg:w-[55rem] flex-1 font-normal text-[18px] text-[#B0B0B0] text-center leading-[32px] ">
        Mi carrera competitiva comenzó en el esquí alpino durante mi infancia y mi etapa de infantiles y cadetes.
Luego a los 17 años tuve la suerte de correr 2 eventos de Freeride Qualifier Junior. Uno en Baqueira Beret FWQJ 2* donde lamentablemente una caída en un salto complicado me dejó fuera de la competencia, pero un mes después me pude recomponer con un 4to puesto en Ordino Arcalís FWQJ 2* y sumar algunos puntos de competencia.
<br/>
<br/>

Lamentablemente por cuestiones económicas y de recursos me vi alejado de las competencias hasta el 2020 donde iba a correr en Ordino Arcalís nuevamente pero el Covid-19 lo impidió, pausando mi sueño hasta el invierno de 2020 en Cerro Bayo donde se realizó el Abierto de Freeride del CAVLA en el cual obtuve el primer puesto obteniendo mi primer victoria en un Freeride.
<br/>
<br/>

En 2022 el Freeride volvió al Cerro Bayo con un FWQ 2* el cual tuve el honor de formar parte de la organización del evento con el club andino, correr con la wild card que me entregó el CAVLA y defender el campeonato del 2020 obteniendo nuevamente el primer puesto!
<br/>
<br/>

Ese mismo día se confirmó que Cerro Catedral cancelaba la final del circuito sudamericano y Cerro Bayo y CAVLA se ofrecieron para organizar un segundo evento y albergar una segunda fecha y realizar la tan ansiada final sudamericana de freeride, en la cual lamentablemente un backslap me dejó en el puesto número 11 pero con una gran lección aprendida y experiencia ganada.
        </p>
       
       
      </motion.div>

      <div className="flex flex-col md:flex-row gap-16 justify-center items-center mt-10">
            <div className="flex justify-end">
                <img
                src="https://i.ibb.co/dmpsrpg/IMG-4321-1.png"
                alt="whats-new"
                className=" w-[80%] h-[80%] md:w-[60%] md:h-[60%] object-contain"
                />
            </div>
            <div className="flex justify-center">
                <img
                src="https://i.ibb.co/vXM0dv8/GOPR2321-1.png"
                alt="whats-new"
                className=" w-[80%] h-[80%] md:w-[60%] md:h-[60%] object-contain"
                />
            </div>
            <div className="flex justify-start">
                <img
                src="https://i.ibb.co/zf8KtLh/IMG-9072.png"
                alt="whats-new"
                className=" w-[80%] h-[80%] md:w-[60%] md:h-[60%] object-contain"
                />
            </div>
      </div>

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

export default SobreMi2;
