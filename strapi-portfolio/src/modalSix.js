import React from "react";

import Submarine from "./images/submarine.png"

let Six = ()=>{
    return (<div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src={Submarine} alt="..." />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p classNameName="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Six;