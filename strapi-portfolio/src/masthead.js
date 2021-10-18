import React, {useEffect, useRef} from "react";
import avatar from "./images/Profile.jpg"
import plane from "./images/plane.gif"
import {TiHeartFullOutline} from "react-icons/ti";
import { init } from 'ityped'
let MastHead = ()=>{

//for fade in typing effect using the ityped npm package
const textRef = useRef();
useEffect(()=>{
init(textRef.current,{ showCursor: false, strings:["Front-End Developer", "Web Designer", "Blogger", "Content Creator"]})
    console.log(textRef)
}, {})

    return(<header className="masthead  text-white text-center main-background" style={{backgroundColor:"#41b0bf"}}>
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img className="masthead-avatar mb-5 bg-primary" src={plane} alt="..." />
                <img className="masthead-avatar mb-5" src={avatar} alt="..." style={{height:"300px", width:"300px", borderRadius:"100%"}} />
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
                <p className="masthead-subheading font-weight-light mb-0"
                 ref={textRef}> </p>
                <p className="main-detail"> Made with <span className="mainpara-icon"> <TiHeartFullOutline/>  </span> by Kripu Khadka </p>
            </div>
        </header>)
}

export default MastHead;