import React from "react";

import Submarine from "./images/submarine.png"

let Six = ()=>{
    return (
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal6"
        tabindex="-1"
        aria-labelledby="portfolioModal6"
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
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Crypto<span className="text-warning">Info</span>
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
                    <a href="https://cryptoinfor.netlify.app/" target="blank">
                      {" "}
                      <img
                        className="img-fluid rounded mb-5"
                        src={Submarine}
                        alt="..."
                      />
                    </a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p classNameName="mb-4">
                      A dynamic Crypto Currency Record Displaying Site. In this
                      project, I have utilised:
                      <ul>
                        <li>API from CoinGecko</li>
                        <li> Tailwind CSS</li>
                        <li>React Js</li>
                        <li>Firebase for userAuthentication</li>
                        <li> React Router v6</li>
                        <li>Framer Motion</li>
                        <li> React Helmet</li>
                        <li> Additional NPM packages</li>
                      </ul>{" "}
                      To improve the site Performance and optimise the size of
                      CSS file, the site is fully optimised with Purge amd JIT
                      mode available in Tailwind CSS.{" "}
                      <strong>
                        If you would like to check the site please tap on the
                        image above
                      </strong>
                      , else if you would like to check the source code, Please
                      click on the button below.
                    </p>
                    <button
                      className="btn btn-primary"
                      href="#!"
                      data-bs-dismiss="modal"
                    >
                      <a
                        className="modal-link"
                        href="https://github.com/Kripu77/Crypto-Info/tree/main/coin-cap"
                      >
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

export default Six;