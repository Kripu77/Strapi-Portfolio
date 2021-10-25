import React from "react";
import Circus from "./images/circus.png"
let Three = ()=>{
return (
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal3"
    tabindex="-1"
    aria-labelledby="portfolioModal3"
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
                <h2 className="portfolio-modal-title text-success text-uppercase mb-0">
                  Daily Reminder/ TO DO App
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
                <a href="https://kripus-reminder.netlify.app/">
                  <img
                    className="img-fluid rounded mb-5"
                    src={Circus}
                    alt="..."
                  />
                </a>

                {/* <!-- Portfolio Modal - Text--> */}
                <p className="mb-4"> A general todo/ reminder web app. User has the flexibility edit and delete after submission of any data as their preference. The data that is obtained from the user is directly stored in the localstorage of the browser and accessed back when user logs back to the site.
                if you would like to visit the site, then please click on the image above. For source code you can click on the button available below.</p>
                <button
                  className="btn btn-primary"
                  href="#!"
                  data-bs-dismiss="modal"
                >
                  <a
                    className="modal-link"
                    href="https://github.com/Kripu77/Reminder-To-do"
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
};

export default Three;