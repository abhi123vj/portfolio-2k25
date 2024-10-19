"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "@remixicon/react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
const divVariants = {
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
  const [userData, setUserData] = useState<{
    email: string;
    username: string;
    message: string;
    subject: string;
  }>({
    username: "",
    email: "",
    message: "",
    subject: "",
  });
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false);

  const callContactApi = async () => {
    try {
      await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      // const data = await res.json();
      notifySuccess();
    } catch (err) {
      notifyFailed();
      console.log(err);
    } finally {
    }
    setUserData({
      username: "",
      email: "",
      message: "",
      subject: "",
    });
    setIsReadOnly(false);
  };

  const notifySuccess = () =>
    toast.success("Will be contacting you soon!", {
      position: "bottom-right",
      autoClose: 4996,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  const notifyFailed = () =>
    toast.warn("Ops! Something went wrong, Try again later.", {
      position: "bottom-right",
      autoClose: 4996,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  return (
    <section
      className="px-4 md:px-10  py-10 scroll-mt-[80px] flex flex-col justify-center "
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

      <div className="flex flex-col md:flex-row justify-between  pt-8">
        <div className="flex flex-col w-full md:w-2/3">
          <motion.p
            className="text-lg md:text-2xl mb-6 max-w-3xl flex-1"
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
          <div className="flex space-x-6 mt-8 pb-8">
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
        </div>
        <div className=" w-full md:w-1/3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0.6}
            variants={divVariants}
          >
            <div className="bg-stone-500/10 p-6 ">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsReadOnly(true);

                  await callContactApi();
                }}
                className="space-y-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Your name
                  </label>
                  <input
                    disabled={isReadOnly}
                    value={userData.username}
                    onChange={(e) => {
                      setUserData({ ...userData, username: e.target.value });
                    }}
                    type="text"
                    id="name"
                    className="shadow-sm bg-stone-500/30 border text-sm   w-full p-2.5 "
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    disabled={isReadOnly}
                    value={userData.email}
                    onChange={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                    }}
                    type="email"
                    id="email"
                    className="shadow-sm bg-stone-500/30 border text-sm   w-full p-2.5 "
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    disabled={isReadOnly}
                    value={userData.subject}
                    onChange={(e) => {
                      setUserData({ ...userData, subject: e.target.value });
                    }}
                    type="text"
                    id="subject"
                    className="shadow-sm bg-stone-500/30 border text-sm   w-full p-2.5"
                    placeholder="Let me know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    disabled={isReadOnly}
                    value={userData.message}
                    onChange={(e) => {
                      setUserData({ ...userData, message: e.target.value });
                    }}
                    id="message"
                    rows={6}
                    className="shadow-sm bg-stone-500/30 border text-sm   w-full p-2.5"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  disabled={isReadOnly}
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.p
        className="text-sm text-stone-400 pt-20"
        initial="hidden"
        whileInView="visible"
        custom={1.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.footerText}
      </motion.p>
      <ToastContainer />
    </section>
  );
};

export default Contacts;
