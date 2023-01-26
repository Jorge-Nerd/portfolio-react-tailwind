import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import jailson from "../assets/jailson-pro.png";
import SocialMedia from "../components/SocialMedia";

// import profile from "../assets/jail.jpg";

const Landing = ({ selectedPage, setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/** IMAGE SECTION APRESENTATION */}
      <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-full
          before:w-full before:max-w-full md:before:max-w-full before:h-full before:border-2 before:border-purple before:z-[-1]"
            >
              <img
                src={jailson}
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[220px] xs:max-w-[350px] md:max-w-[450px]"
              />
            </div>
          </motion.div>
        ) : (
          <img
            src={jailson}
            alt="profile"
            className="z-10 w-full max-w-[220px] xs:max-w-[350px] md:max-w-[450px]"
          />
        )}
      </div>
      {/** MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Jailson {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[30px] before:-top-[85px] before:z-[-1]"
            >
              Sanches
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            I am a front-end developer with skills in
            responsive design, ability to work teamwork. Always looking to learn
            and keep up to date up-to-date with the latest front-end
            technologies.
          </p>
        </motion.div>

        {/** CALL TO ACTIONS */}

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue font-playfair text-deep-blue rounded-sm py-3 px-7 font-semibold hover:purple hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
        </motion.div>
      </div>
      <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <SocialMedia />
      </motion.div>
    </section>
  );
};

export default Landing;
