import React from "react";
import * as motion from "framer-motion/client";

const Experience = () => {
  const EXPERIENCES = [
    {
      id: 1,
      yearRange: "2022 — Now",
      title: "Software Engineer at ZEDI Pvt",
      location: "Thiruvananthapuram, Kerala",
      description: [
        "Architecting robust backend systems and scalable solutions for enterprise applications.",
        "Collaborating with diverse teams to create high-quality, user-focused software.",
        "Fostering innovation through ongoing enhancements in system performance and user experience.",
      ],
    },
  ];

  const containerVariants = {
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
        staggerChildren: 0.3,
      },
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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
    <section className="px-6 py-10 scroll-mt-[80px]" id="experience">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Work Experience
      </h2>
      <div className="h-1 w-20 mb-8 bg-white "></div>
      <motion.div
        className="space-y-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {EXPERIENCES.map(({ id, yearRange, title, location, description }) => (
          <motion.div key={id} variants={childVariants}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-sm md:w-1/4 mb-2 md:mb-0 p-4">
                {yearRange}
              </div>
              <div className="md:w-3/4 mb-10">
                <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                  <h2 className="text-xl mb-2">{title}</h2>
                  <p className="mb-4 text-sm italic">{location}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
