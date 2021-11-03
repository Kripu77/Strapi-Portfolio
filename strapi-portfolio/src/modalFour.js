import React from "react";
import game from "./images/game.png"

let Four = ()=>{


return (
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal4"
    tabindex="-1"
    aria-labelledby="portfolioModal4"
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
                  GLOBAL COVID TRACKER
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
                <a
                  href="https://kkcovidtracker.netlify.app/"
                  alt="Click me to visit site"
                >
                  <img
                    className="img-fluid rounded mb-5"
                    src={game}
                    alt="..."
                  />
                </a>
                {/* <!-- Portfolio Modal - Text--> */}
                <p className="mb-4">
                  {" "}
                  A dynamic COVID records fetching site where user has the
                  priveldge to access the data realted to COVID cases coming
                  from the API from Lmao Ninja. If you would like to access the
                  site, then please <strong>click on the image above</strong>.
                  Else if you would like to have a look on the source code,
                  please click on the <strong>button </strong> below
                </p>
                <button
                  className="btn btn-primary"
                  href="#!"
                  data-bs-dismiss="modal"
                >
                  <a
                    href="https://github.com/Kripu77/COVID-TRACKER"
                    className="modal-link"
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


export default Four;