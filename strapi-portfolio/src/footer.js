import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimate } from "framer-motion-hooks";

let Footer = ()=>{
  const { inViewRef, animation } = useInViewAnimate({ animate: "visible" });
  const variants = {
    hidden: {
      x: -200,
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
      <footer className="footer text-center">
        <motion.div
          ref={inViewRef}
          initial="hidden"
          animate={animation}
          variants={variants}
          className="container"
        >
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Address </h4>

              <p className="lead mb-0">14 Curzon st, Ryde, NSW, 2112.</p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Find me around the Web</h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.facebook.com/kripu.khadka/"
              >
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://github.com/Kripu77"
              >
                <i className="fab fa-fw fa-github"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/kripu-khadka-3594a7185/"
              >
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.instagram.com/kripu77/"
              >
                <i className="fab fa-fw fa-instagram"></i>
              </a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Thank you</h4>
              <p className="lead mb-0">
                Thank you for visting my site, Please check out my GitHub
                profile & Let's get connected on linkedIn.
                <br />
              </p>
            </div>
          </div>
        </motion.div>
      </footer>
    );
}

export default Footer;