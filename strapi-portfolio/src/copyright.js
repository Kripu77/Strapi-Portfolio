import React from "react";
import foot from "./images/foot.jpg";
import {TiHeartFullOutline} from "react-icons/ti";
import {SiReact} from "react-icons/si";
import { motion } from "framer-motion";
import { useInViewAnimate } from "framer-motion-hooks";
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
            Made with{" "}
            <span className="mainpara-icon">
              {" "}
              <TiHeartFullOutline />{" "}
            </span>{" "}
            by Kripu Khadka{" "}
          </p>
          <p className="tech-detail">
            Powered by{" "}
            <span className="react-icon">
              <SiReact />
            </span>{" "}
            React.Js
          </p>
        </div>
        <img className="footer-image" src={foot} alt="..." />
      </motion.div>
    );
}
export default Copyright;