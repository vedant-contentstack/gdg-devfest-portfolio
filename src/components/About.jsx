import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = ({stack}) => {

  const [aboutSection, setAboutSection] = useState({});

  useEffect(()=>{
    (()=>{
      stack
        .ContentType("about")
        .Query()
        .only(["image", "info"])
        .toJSON()
        .find()
        .then((result) => {
          setAboutSection(result[0][0]);
        })
    })()
  },[])

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutSection?.image?.url} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{aboutSection?.info}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
