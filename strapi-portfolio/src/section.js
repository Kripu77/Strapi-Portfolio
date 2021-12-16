import React from "react";
import safe from "./images/safe.png"
import cake from "./images/cake.png"
import circus from "./images/circus.png"
import games from "./images/game.png";
import submarine from "./images/submarine.png"
import safetwo from "./images/safetwo.PNG";
import {motion} from "framer-motion";
import { useInViewAnimate } from "framer-motion-hooks";
let Section = ()=>{

//intersection observer hoook
 const { inViewRef, animation } = useInViewAnimate(
   { animate: "visible" },
   {
     threshold: 0.2,
     triggerOnce: false, // set it explicitly to false to get the expected result
   }
 );

 //animation pattern
 const variants = {
   hidden: {y:-50,
     opacity: 0,
   },
   visible: {
     y:0,
     opacity: 1,
     transition: {
       duration: 7, type:"spring"
     },
   },
 };
    return (
      <motion.section
        ref={inViewRef}
        initial="hidden"
        animate={animation}
        variants={variants}
        className="page-section portfolio"
        id="portfolio"
      >
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        My Projects
          </h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            {/* <!-- Portfolio Item 1--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <div className="parent-image">
                  <img className="img-fluid image-comp" src={safe} alt="..." />
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item 2--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={cake} alt="..." />
              </div>
            </div>
            {/* <!-- Portfolio Item 3--> */}
            {/* <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={circus} alt="..." />
              </div>
            </div> */}
            {/* <!-- Portfolio Item 4--> */}
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal4"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={games} alt="..." />
              </div>
            </div>
            {/* <!-- Portfolio Item 5--> */}
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal5"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={safetwo} alt="..." />
              </div>
            </div>
            {/* <!-- Portfolio Item 6--> */}
            <div className="col-md-6 col-lg-4">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal6"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={submarine} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    );
}

export default Section;