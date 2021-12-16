import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimate } from "framer-motion-hooks";


let About = ({
  About = "About Me",
  Description = "A self taught techie who’s eager to learn and stay updated with the latest tech stacks and the dev ecosystem. I have the knowledge of HTML5, CSS3 Pre-processor(SASS), JavaScript(ES5/ES6+), React.js, Next.js, Strapi.js, Puppeteer.js, Framer Motion, Node.js, PHP, MySQL, Google FireBase, Firestore. Tools: NPM, GIT/GITHUB, JIRA, nextAuth, FirebaseAuth, auth0.",
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
              I am currently employed as a Assistant Manager at Hungry Jack's
              and working as a part-time Developer at Code
              Venture, Sydney, NSW on the side. The fun fact about me is I spend most of my days coding,
              debugging, reading documentation and solving the challenges that are available on the
              Internet.
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