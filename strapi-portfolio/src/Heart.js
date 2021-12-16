import React from 'react'
import { motion } from 'framer-motion'
import { TiHeartFullOutline } from "react-icons/ti";
const Heart = () => {
  //heart bounce transition
  const bounceTransition = {
    y: {
      duration: 1.5,
      yoyo: Infinity,
      ease: "easeOut",
    },
   
  };
  //for heart animation
  const ballStyle = {
    display: "inline-block",

    height: "1rem",
  };

  return (
 
      <motion.span
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["20%", "-60%"],
         
        }}
        className="mainpara-icon"
      >
   
        <TiHeartFullOutline />
      </motion.span>

  );
}

export default Heart
