import React from "react";
import avatar from "./images/Profile.jpg"
import plane from "./images/plane.gif"
import {TiHeartFullOutline} from "react-icons/ti";
let MastHead = ()=>{
    return(<header className="masthead  text-white text-center main-background" style={{backgroundColor:"#41b0bf"}}>
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img className="masthead-avatar mb-5 bg-primary" src={plane} alt="..." />
                <img className="masthead-avatar mb-5" src={avatar} alt="..." style={{height:"300px", width:"300px", borderRadius:"250px"}} />
                {/* <!-- Masthead Heading--> */}
                <img className="masthead-avatar mb-5 bg-primary" src={plane} alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">Kripu Khadka</h1>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-0">Front-End Web Developer- Web Designer - Illustrator - Blogger</p>
                <p className="main-detail"> Made with <span className="mainpara-icon"> <TiHeartFullOutline/>  </span> In Nepal </p>
            </div>
        </header>)
}

export default MastHead;