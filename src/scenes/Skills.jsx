import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import sass from "../assets/sass.png";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:900px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">Skills</p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-gradient-rainblue font-playfair">
            FRONT END MAIN SKILLS
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            //SKILLS
            <div className="md:flex md:justify-between mt-16 gap-32">
              <motion.div
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, y: 70 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div
                  className="  flex relative z-0 ml-20
                            cursor-pointer border-purple before:z-[-1]"
                >
                  <img
                    src={html}
                    alt="html-logo"
                    className="z-10 pr-5 max-w-[100px] cursor-pointer max-h-[100px] hover:scale-125 transition ease-in-out duration-300"
                  />
                  <img
                    src={css}
                    alt="css-logo"
                    className="z-10 max-w-[100px] pr-5 max-h-[100px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                  />
                  <img
                    src={js}
                    alt="javascript-logo"
                    className="z-10 max-w-[100px] pr-5 max-h-[100px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                  />

                  <img
                    src={react}
                    alt="react-logo"
                    className="z-10 max-w-[100px] pr-5 max-h-[100px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                  />

                  <img
                    src={github}
                    alt="github-logo"
                    className="z-10 max-w-[100px] pr-5 max-h-[100px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                  />

                  <img
                    src={sass}
                    alt="sass-logo"
                    className="z-10 max-w-[100px] pr-5 max-h-[100px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                  />
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="flex mx-auto relative z-0 cursor-pointer border-purple before:z-[-1]">
              <div className=" flex max-w-1 md:max-w-1/6 ">
                <img
                  src={html}
                  alt="html-logo"
                  className="z-10  max-w-1 md:w-1/6 max-h-[85px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                />
              </div>
              <div className=" flex max-w-1 md:max-w-1/6 ">
                <img
                  src={css}
                  alt="css-logo"
                  className="z-10  max-w-1 md:max-w-1/6  max-h-[85px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                />
              </div>
              <div className="max-w-1 md:max-w-1/6 ">
                <img
                  src={js}
                  alt="javascript-logo"
                  className="z-10  max-w-1 md:max-w-1/6 ml-3 max-h-[85px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                />
              </div>

              <div className="max-w-1 md:max-w-1/6 ">
                <img
                  src={react}
                  alt="react-logo"
                  className="z-10  max-w-1 md:max-w-1/6 ml-3 max-h-[85px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                />
              </div>
              <div className="max-w-1 md:max-w-1/6 ">
                <img
                  src={github}
                  alt="github-logo"
                  className="z-10  max-w-1 md:max-w-1/6 ml-3 max-h-[85px] hover:scale-125 transition ease-in-out delay-150 duration-300"
                />
              </div>
            </div>
          )}
        </div>
        {/* <div className="md:flex md:justify-between mt-16 gap-32">
            <motion.div
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.9 }}
                variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative h-32">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]"></div>
            </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
