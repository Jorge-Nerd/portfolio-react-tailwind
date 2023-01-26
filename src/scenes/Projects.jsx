import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,text,link,src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`;


  return (
    <motion.div variants={projectVariant} className="relative">
        <a href={link} target='_blank' rel="noreferrer">
            <div className={overlayStyles}>
            <p className="text-2xl font-playfair">{title}</p>
            <p className="mt-7">
                {text}
            </p>
             </div>
            <img src={src} alt='src'/>
        </a>

    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-purple">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-playfair font-semibold">
        Here are some personal projects
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-pubg
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" src={project1} text='A video share aplication made with Youtube API React JS' link='https://techsanches.netlify.app/' />
          <Project title="Project 2" src={project2} text='A Food Order Aplication ' link='https://sanches-ordering.netlify.app' />

         
        

          <div
            className="flex justify-center text-center items-center p-10 bg-purple
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
