import React from "react";

import * as motion from "framer-motion/client";
const paragraphs = [
  "I am a full-stack developer with expertise in React, Next.js, Tailwind CSS, Node.js, and AWS. I build scalable, high-performance web applications tailored to deliver exceptional user experiences.",
  "With a focus on clean, maintainable code, I help businesses thrive by creating modern, efficient solutions that drive growth and innovation. Let's bring your vision to life!",
];
const About = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="px-6 py-10 scroll-mt-[80px]" id="about">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 ">
        About Me
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <div className="max-w-4xl mx-auto ">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
