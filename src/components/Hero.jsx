import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import danKanterImg from "../assets/dan-kanter-transparent-bg.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="block">Math & Science Teacher</span>
            <span className="block text-[#B772FF] whitespace-nowrap">Tech &amp; Safety Lecturer</span>
            <span className="block text-[#915EFF]">Bass Musician</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            Reach me out for:
            <Typewriter
              options={{
                strings: ["Science  & Math Teaching", " Tech & Safety Lecturing ", "Pro Bass Playing"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 top-[120px] flex justify-end items-center pointer-events-none pr-10`}>
        <img
          src={danKanterImg}
          alt="Dan Kanter"
          className="w-[58%] h-[58%] xs:w-[66%] xs:h-[66%] sm:w-[76%] sm:h-[76%] lg:w-[80%] lg:h-[80%] object-contain object-right opacity-100 transition-[width,height] duration-300 ease-out"
        />
      </div>



      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
