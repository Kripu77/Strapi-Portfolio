import React from "react";
import Form from "./form";
import { motion } from "framer-motion";
import { useInViewAnimate } from "framer-motion-hooks";
let Contact = ()=>{
  //framer component
  const { inViewRef, animation } = useInViewAnimate({ animate: "visible" });
  const variants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 7,
        type: "spring", delay:0.3
      },
    },
  };
  return (
    <motion.section
      ref={inViewRef}
      initial="hidden"
      animate={animation}
      variants={variants}
      className="page-section"
      id="contact"
    >
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <Form />
      </div>
    </motion.section>
  );
}

export default Contact;