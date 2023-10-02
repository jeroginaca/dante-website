'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import Link from 'next/link';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className=" footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <Link href="/">
        <h4 className="font-audio font-bold md:text-[54px] text-[44px] tracking-[10px] uppercase text-white hover:tracking-[11px] transition-all">
          Dante Ginaca
        </h4>
        </Link>
        <Link href="https://www.youtube.com/watch?v=TLH-Mhnu5mY&t=78s&ab_channel=GoRelaxProductions" target="_blanc">
        <button
          type="button"
          className="font-gruppo flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          {/* <img
            src="https://i.ibb.co/rvr0CDC/rock.png"
            alt="headset"
            className="font-gruppo w-[24px] h-[24px] object-contain"
          /> */}
          <span
            className="font-gruppo font-normal text-[16px]
          text-white uppercase hover:tracking-[1px] transition-all"
          >
            Entra a mi mundo
          </span>
        </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div
          className="flex items-center justify-center
            flex-wrap gap-4"
        >
          {/* <h4 className="font-gruppo font-extrabold text-[24px] text-white ">AKA "EL PEQUEÑO"</h4> */}
          <p className="font-gruppo text-normal text-[14px] text-white opacity-50">
            Página diseñada y programada por <Link href="https://jeronimoginaca.com" target="_blank" className='underline  hover:tracking-wide transition-all'>Jerónimo Ginaca</Link>
          </p>
          {/* <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
