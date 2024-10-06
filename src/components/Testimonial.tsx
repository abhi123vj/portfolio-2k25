"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      name: "Joveal Johnson",
      title: "Product Engineer, UST",
      feedback:
        "Abhiram is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
      image: "/assets/images/persons/person1.webp",
    },
  ];
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.5,
      },
    }),
  };
  return (
    <section
      className="px-6 py-10 min-h-screen scroll-mt-[80px]"
      id="testimonials"
    >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        What people are saying
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {TESTIMONIALS.map(({ name, title, feedback, image, id }, index) => (
          <motion.div
            key={id}
            className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={childVariants}
          >
            <div className="flex items-center mb-4">
              <Image
                src={image}
                alt={name}
                width={48} // Equivalent to 12 * 4
                height={48} // Equivalent to 12 * 4
                className="rounded-full mr-4"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm front-light">{title}</p>
              </div>
            </div>

            <p className="leading-relaxed">{feedback}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
