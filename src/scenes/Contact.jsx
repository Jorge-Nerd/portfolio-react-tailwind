import React from "react";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import contact from "../assets/contact-me.jpg";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="py-48">
      {/**HEADINGS */}
      <motion.div
      className="justify-end flex w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="">
          <p className="font-playfair font-semibold text-4xl mx-auto">
            <span className="text-white"> Feel free to email me to get started</span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="mx-auto w-1/2" />
          </div>
        </div>
      </motion.div>
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contact} alt="contact" className="" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/8bb1515acc2e9a8a19140a3e2a44846e" method="POST">
          <input
              className="w-full  text-deep-blue bg-gradient-area font-semibold rounded-[8px] placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="w-full text-deep-blue bg-gradient-area font-semibold rounded-[8px] placeholder-opaque-black p-3 mt-5"
              type="email"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <textarea
              className="w-full bg-gradient-area text-deep-blue font-semibold placeholder-opaque-black rounded-[8px]
              p-3 mt-5"
              placeholder="message"
              row='4'
              col='50'
              {...register("message", {
                required: true,
                maxLength:2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1 ">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "pattern" && "Max length is 2000 char"}
              </p>
            )}
            <button className="p-5 bg-gradient-line font-semibold text-deep-blue rounded-[16px] hover:scale-105 duration-300 ease-in-out hover:text-white">
                    Send me a message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
