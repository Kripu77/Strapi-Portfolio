import React, {useEffect, useRef} from "react";
import avatar from "./images/Profile.jpg"
import plane from "./images/plane.gif"
import {TiHeartFullOutline} from "react-icons/ti";
import { init } from 'ityped';
import {motion} from "framer-motion";
import { useInViewAnimate } from "framer-motion-hooks";

let MastHead = ()=>{

//for fade in typing effect using the ityped npm package
const textRef = useRef();
useEffect(()=>{
init(textRef.current,{ showCursor: false, backDelay:2000, backSpeed:80, strings:["Front-End Web Developer", "Web Designer", "Blogger", "Content Creator"]})
    console.log(textRef)
}, [])

//for observer
  const { inViewRef, animation } = useInViewAnimate({ animate: "visible" });
  
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration:3, delay:1
    },
  },
};
//framer components
console.log(window.innerWidth)
const imageAnimation ={
    hidden:{opacity:0, y:-200},
    show:{opacity:1, y:0, transition:{default:{duration:3}, delay:0.3, type:"spring", stifness:20}}
}

const textAnimation ={
    hidden:{
        opacity: 0
    }, 
    show:{
        opacity:1, transition: {default:{duration:4}, delay:4, type:"spring", stifness:1}
    }
}

const textBubble={

   animate:{scale:1.1,  transition:{duration:0.8,repeat: Infinity, repeatDelay:0.1}}
   
}


    return (
      <motion.header
        variants={imageAnimation}
        initial="hidden"
        animate="show"
        className="masthead  text-white text-center main-background"
        style={{ backgroundColor: "#41b0bf" }}
      >
        <div className="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Avatar Image--> */}
          <motion.img
            variants={imageAnimation}
            initial="hidden"
            animate="show"
            className="masthead-avatar mb-5 bg-primary"
            src={plane}
            alt="..."
          />
          <motion.img
            variants={imageAnimation}
            initial="hidden"
            animate="show"
            className="masthead-avatar mb-5"
            src={
              "https://avatars.githubusercontent.com/u/84505567?s…00&u=56a554a8c69b4d34dce81b9170f89d44ac881906&v=4"
            }
            alt="..."
            style={{ height: "300px", width: "300px", borderRadius: "100%" }}
          />
          {/* <!-- Masthead Heading--> */}
          <motion.img
            variants={imageAnimation}
            initial="hidden"
            animate="show"
            className="masthead-avatar mb-5 bg-primary"
            src={plane}
            alt="..."
          />
          <motion.h1
            ref={inViewRef}
            initial="hidden"
            animate={animation}
            variants={variants}
            className="masthead-heading text-uppercase mb-0"
          >
            Kripu Khadka
          </motion.h1>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Masthead Subheading--> */}
          <p
            className="masthead-subheading font-weight-light mb-0"
            ref={textRef}
          >
            {" "}
          </p>
          <motion.p
            variants={textAnimation}
            initial="hidden"
            animate="show"
            className="main-detail"
          >
            {" "}
            Made with{" "}
            <motion.span
              variants={textBubble}
              initial="initial"
              animate="animate"
              className="mainpara-icon"
            >
              {" "}
              <TiHeartFullOutline />{" "}
            </motion.span>{" "}
            by Kripu Khadka{" "}
          </motion.p>
        </div>
      </motion.header>
    );
}

export default MastHead;