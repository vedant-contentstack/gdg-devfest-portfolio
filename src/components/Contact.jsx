import { useEffect, useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = ({stack}) => {

  const [contact,setContact] = useState({})

  useEffect(()=>{
    (()=>{
      stack
        .ContentType("contact")
        .Query()
        .only(["address", "email"])
        .toJSON()
        .find()
        .then((result) => {
          setContact(result[0][0]);
        })
    })()
  },[])

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {contact.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {contact.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
