import React from "react";
import cake from "./images/cake.png"

let Two = ()=>{
return (
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal2"
    tabindex="-1"
    aria-labelledby="portfolioModal2"
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
                  Color Generator
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
                <a href="https://kripus-color-gen.netlify.app/">
                  <img
                    className="img-fluid rounded mb-5"
                    src={cake}
                    alt="link to the site"
                  />
                </a>
                {/* <img className="img-fluid rounded mb-5" src={cake} alt="..." /> */}
                {/* <!-- Portfolio Modal - Text--> */}
                <p className="mb-4 secondary">
                  {" "}
                  Utilised the Value.Js Library for this project. The site is
                  capable of generating specific colors as you prefer based on the HEX value
                  provided on the input form. I have applied some of the core
                  React Hooks such as UseState, UseEffect and UseRef Hooks to
                  simplify the build process of the site.{" "}

                    <br /> If you would like to check out the site, then please click on the
                    image above. Source code available on my GitHub Repository

                </p>
                <button
                  className="btn btn-primary"
                  href="#!"
                  data-bs-dismiss="modal"
                >
                  <a
                    className="modal-link"
                    href="https://github.com/Kripu77/color-generator"
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

export default Two;