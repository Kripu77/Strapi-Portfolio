import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimate } from "framer-motion-hooks";


let About = ({
  About = "About Me",
  Description = " I am currently serving Hungry Jacks as a Master Data Analyst.  I love catching up with all the new patterns coming out in        everchanging tech related feild. Reading documentation, tech    influencing and implementing tiny building blocks together to proudce a functional outcome is my main motivation. "
}) => {
  //framer component animation
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
        type: "spring",
      },
    },
  };
  return (
    <section
      className="page-section  text-white mb-0"
      id="about"
      style={{ backgroundColor: "#41b0bf" }}
    >
      <motion.div
        ref={inViewRef}
        initial="hidden"
        animate={animation}
        variants={variants}
        className="container"
      >
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">
          {About}
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row">
          <div className="lead col-lg-6 ms-auto">
            <p className="leader">{Description}</p>
          </div>
          <div className="lead col-lg-6 me-auto">
            <p className="leader">
             Despite being a Data
              Analyst by profession, I have a equal amount of hunger to keep
              myself in shape with the latest tech stacks and the fundamentals
              of Automation along with the vast Dev Stacks. My favorite technologies right now are:
              Microsoft Excel, Docker, Tailwind CSS, React.js, Node.js, Framer Motion, Next.js, Strapi.js, 
  Puppeteer.js, Webpack.js, and so on.
            </p>
          </div>
        </div>
        {/* <!-- About Section Button--> */}
        <div className="text-center mt-4">
          <a className="btn btn-xl btn-outline-light" href="">
            <i className="fas fa-download me-2"></i>
            Download my resume!!
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;