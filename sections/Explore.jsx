'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, textVariant } from '../utils/motion';


import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Mi Mundo" textStyles="text-center" />
        <TitleText
          title={
            <>
              DESCUBRi
            </>
          }
          textStyles="text-center"
        />
        <div
          className="mt-[50px] flex lg:flex-row
            flex-col min-h-[70vh] gap-5"
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        
      </motion.div>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[70px] mx-auto"
      />
    </section>
  );
};

export default Explore;
