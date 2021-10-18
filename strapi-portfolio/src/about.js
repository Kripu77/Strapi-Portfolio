import React from "react";


let About = ({About="About Me", Description="I am a passionate individual looking to explore the field of Web Development. I have knowledge of HTML, CSS Pre-processor(SASS), JavaScript(ES5/ES6), React.js, Gatsby.js, PHP, MySQL alongside Google FireBase. Tools: NPM, GIT/GITHUB, JIRA", Work})=>{
    return (
        <section className="page-section  text-white mb-0" id="about" style={{backgroundColor:"#41b0bf"}} >
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
                    <div className="lead col-lg-4 ms-auto"><p className="leader">{Description}</p></div>
                    <div className="lead col-lg-4 me-auto"><p className="leader">{Work}</p></div>
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