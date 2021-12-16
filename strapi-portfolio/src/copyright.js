import React from "react";
import foot from "./images/foot.jpg";
import {SiReact} from "react-icons/si";
import { motion } from "framer-motion";
import { useInViewAnimate } from "framer-motion-hooks";
import Heart from "./Heart";
let Copyright = ()=>{
      const { inViewRef, animation } = useInViewAnimate({ animate: "visible" });

const variants = {
  hidden: {
   
    opacity: 0,
  },
  visible: {
     
    opacity: 1,
    transition: {
      duration: 3,
      type: "spring",
      delay: 1,
    },
  },
};
    return (
      <motion.div
        ref={inViewRef}
        initial="hidden"
        animate={animation}
        variants={variants}
      >
        <div className="text-center text-black">
          <div
            ref={inViewRef}
            initial="hidden"
            animate={animation}
            variants={variants}
            className="container"
            style={{ fontSize: "2rem" }}
          >
            <small>Copyright &copy; Kripu Khadka 2021</small>
          </div>

          <p className="main-detail">
            {" "}
            Made with <Heart /> by Kripu Khadka{" "}
          </p>
          <p className="tech-detail">
            Powered by{" "}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="react-icon"
            >
              <SiReact />
            </motion.span>{" "}
            React.Js
          </p>
        </div>
        <img className="footer-image" src={foot} alt="..." />
      </motion.div>
    );
}
export default Copyright;