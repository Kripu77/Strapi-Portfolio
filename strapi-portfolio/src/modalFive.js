import React from "react";
import safetwo from "./images/safetwo.PNG"
let Five = ()=>{


    return (
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5"
        tabindex="-1"
        aria-labelledby="portfolioModal5"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-primary text-uppercase mb-0">
                     cocktails
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}

                    <a href="https://kkcovidtracker.netlify.app/" title="click me to see demo">
                      <img
                        className="img-fluid rounded mb-5"
                        src={safetwo}
                        alt="..."
                      />
                    </a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4"> A project done using React JS as the core Library. In this project I have utilised an open source API to fetch data and display it to the user. In addition, this site is packed with react-router which gives the user an app like feel, React-Helemt, Framer-Motion and Lazy-Loading to optimize the performance. Please visit the link if you would like to have a look on to the source code.</p>
                    <button
                      className="btn btn-primary"
                      href="#!"
                      data-bs-dismiss="modal"
                    >
                      <a
                        className="modal-link"
                        href="https://github.com/Kripu77/cocktails"
                      >
                        {" "}
                        Visit GitHub Repository
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Five;