import React from "react";



let One = ()=>{

return (
  //  <!-- Portfolio Modal 1-->
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal1"
    tabindex="-1"
    aria-labelledby="portfolioModal1"
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
                  Electtion Commission of Australia
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
                <iframe
                  className="img-fluid rounded mb-5 iframe-comp"
                  src="https://www.youtube.com/embed/63UIEr-YZz0"
                  alt="..."
                />
                {/* <!-- Portfolio Modal - Text--> */}
                <p className="mb-4">
                  {" "}
                  This Project was done inorder to showcase my skills for
                  myFinal Year University Project. This project was completed
                  utlising HTML, CSS, Vanlilla JS, PHP as the back end server,
                  and MYSQL as the database. Some of the key features of this
                  project are:
                  <ul className="features">
                    <li>Real time vote capture</li>
                    <li>Login and Registration</li>
                    <li>CRUD operation feasibility</li>
                    <li> Language Translator</li>
                    <li>Intergrated with Google charts</li>
                  </ul>
                  If you would like to have a look on the source code. Please
                  click on the button available below.
                </p>
                <button
                  className="btn btn-primary"
                  href="#!"
                  data-bs-dismiss="modal"
                >
                  <a className="modal-link" href="https://github.com/Capstone-Team-1/Source-code">
              
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

export default One;