import React from "react";

import * as motion from "framer-motion/client";
const paragraphs = [
  "I am a software engineer with a strong background in building scalable, high-performance systems using modern technologies. I specialize in architecting robust backend services, optimizing performance, and ensuring reliable software delivery.",
  "With a focus on efficient, maintainable solutions, I collaborate with cross-functional teams to create user-centric software that meets business goals. Let's work together to turn your ideas into impactful products!"
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
