import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const PROJECTS = [
  {
    id: 1,
    name: "Anon Insight",
    description:
      "A platform for receiving anonymous feedback from your friends and family.",
    image: "/assets/images/projects/projects1.webp",
    link: {
      github: "https://github.com/abhi123vj/anon-insight",
      demo: "https://anon-insight.4bh1.xyz",
    },
  },
];
const Projects = () => {
  const projectsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <section className="px-6 py-10 scroll-mt-[80px]" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Work
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {PROJECTS.map(({ name, description, image, link, id }) => {
          return (
            <motion.div
              key={id}
              className="relative rounded-lg overflow-hidden h-[500px] transition transform"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={projectsVariants}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
                <h2 className="text-2xl font-medium mb-4">{name}</h2>
                <div className="flex flex-col justify-between">
                  <p className="mb-4 flex-grow text-2xl">{description}</p>
                  <div className="flex flex-row gap-2">
                    <Link
                      href={link.github}
                      rel="noopener noreferrer"
                      className="bg-white text-stone-900 rounded-full py-2 px-2 w-40 text-sm hover:bg-gray-100 text-center"
                    >
                      Github
                    </Link>
                    <Link
                      href={link.demo}
                      rel="noopener noreferrer"
                      className="bg-white text-stone-900 rounded-full py-2 px-2 w-40 text-sm hover:bg-gray-100 text-center"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
