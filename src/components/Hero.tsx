import * as motion from "framer-motion/client";
import Image from "next/image";
import React from "react";

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: {
    clipPath: "inset(0 50% 0 50%",
  },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HERO_CONTENTS = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I'm Abhiram, a full-stack developer dedicated to creating captivating web experiences.",
  description:
    "I empower businesses to turn their ideas into impactful digital solutions with innovative web applications",
  resumeLinkText: "Download Resume",
  resumeLink: "/assets/documents/Abhiram-Software_Engineer_Resume.pdf",
};
const Hero = () => {
  return (
    <section>
      <div className="relative z-10 min-h-screen flex fex-wrap flex-col md:flex-row items-center justify-center text-white ">
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}
          >
            {HERO_CONTENTS.greeting}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}
          >
            {HERO_CONTENTS.introduction}
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl"
            variants={textVariants}
          >
            {HERO_CONTENTS.description}
          </motion.p>
          <motion.a
            className="bg-slate-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
            href={HERO_CONTENTS.resumeLink}
            download
            rel="noopener noreferrer"
            target="_blank"
            variants={textVariants}
          >
            {HERO_CONTENTS.resumeLinkText}
          </motion.a>
        </motion.div>
        <motion.div
          className="w-full  md:w-1/2 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <Image
            src="/assets/hero.webp"
            alt="Abhiram S"
            width={650}
            height={650}
            loading="lazy"
            className="rounded-3xl" // Adjust as needed
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
