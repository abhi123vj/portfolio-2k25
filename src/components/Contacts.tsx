"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "@remixicon/react";
const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "4bh1ram@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://x.com/4bh1ram",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/abhi123vj",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/abhiram-s-01479616a/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} S Abhiram. All rights reserved.`,
};
const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};
const iconVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  }),
};
const Contacts = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-10 scroll-mt-[80px] overflow-hidden "
      id="contact"
    >
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Contact
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <motion.h3
        className="text-6xl md:text-8xl leading-none"
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>
      <motion.p
        className="text-lg md:text-2xl mb-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.description}
      </motion.p>
      <motion.a
        href={`mailto:${CONTACT_CONTENT.email}`}
        className="text-2xl md:text-3xl font-medium mt-8"
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        variants={textVariants}
      >
        {CONTACT_CONTENT.email}
      </motion.a>
      <div className="flex space-x-6 mt-8 ">
        {CONTACT_CONTENT.socialLinks.map(
          ({ platform, url, ariaLabel, icon }, index) => {
            const Icon =
              icon === "RiTwitterXFill"
                ? RiTwitterXFill
                : icon === "RiGithubFill"
                ? RiGithubFill
                : RiLinkedinFill;
            return (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                // className="text-2xl md:text-3xl"
                initial="hidden"
                whileInView="visible"
                custom={1.0 + index * 0.2}
                variants={iconVariants}
              >
                <Icon size={36} />
              </motion.a>
            );
          }
        )}
      </div>
      <motion.p
        className="text-sm text-stone-400 pt-36"
        initial="hidden"
        whileInView="visible"
        custom={1.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
};

export default Contacts;
