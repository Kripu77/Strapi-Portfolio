import React from "react";


let About = ({About="About Me", Description="I am a passionate indvidual looking to explore the feild of Web Devlopment. I have the knowledge of HTML, CSS, SASS, JavaScript, React.js, Gatsby.js, PHP, MySQl along with FireBase", Work})=>{
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">{About}</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">{Description}</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">{Work}</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="">
                        <i className="fas fa-download me-2"></i>
                        Download my resume!!
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;