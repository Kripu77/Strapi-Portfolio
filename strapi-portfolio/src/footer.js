import React from "react";


let Footer = ()=>{

    return(<footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            4/14 Curzon st, Ryde, NSW, 2112
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/kripu.khadka/"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Kripu77"><i className="fab fa-fw fa-github"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/kripu-khadka-3594a7185/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/kripu77/"><i className="fab fa-fw fa-instagram"></i></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Thank you</h4>
                        <p className="lead mb-0">
                           Thank you for visting my site please check out my GitHub profile and Repo. Let's get connected on linkedIn
                           <br/> <a href="https://github.com/Kripu77/">GitHub</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer;