'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col justify-center items-center md:justify-between gap-8 uppercase `}
    >
      <Link href="/" className=" font-gruppo text-gray-500 cursor-pointer hover:text-white z-10 hover:tracking-[1px] transition-all">
      DANTE GINACA
      </Link>
      <div className="flex"> <ul className="flex " >
        <Link href="/sobremi">
            <li className="hover:text-white mx-2 font-gruppo text-gray-500 cursor-pointer hover:tracking-[1px] transition-all">Sobre mi</li>
        </Link>
        <Link href="/descubri">
            <li className="hover:text-white mx-2 font-gruppo text-gray-500 cursor-pointer hover:tracking-[1px] transition-all">Descubri</li>
        </Link>
        <Link href="/contacto">
            <li className="hover:text-white ml-2 font-gruppo text-gray-500 cursor-pointer hover:tracking-[1px] transition-all">Contacto</li>
        </Link>

      </ul></div>
      {/* <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain "
      />
      <h2
        className=" font-audio font-extrabold text-[24px] leading-[30px] text-white"
      >
        DANTE GINACA
      </h2>
<img src="/menu.svg" alt="menu" className="w-[24px] object-contain" />*/}
    </div>
  </motion.nav>
);

export default Navbar;
