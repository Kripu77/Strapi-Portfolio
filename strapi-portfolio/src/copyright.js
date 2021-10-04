import React from "react";
import foot from "./images/foot.jpg";
import {TiHeartFullOutline} from "react-icons/ti";
let Copyright = ()=>{

    return(
    <div>
         
        <div className="text-center text-black">
 
            <div className="container" style={{fontSize:"2rem"}}><small>Copyright &copy; Kripu Khadka 2021</small>
                  </div>

                <p className="main-detail"> Made with <span className="mainpara-icon"> <TiHeartFullOutline/>  </span> by Kripu Khadka </p>
        </div>
         <img className="footer-image" src={foot} alt="..."  />
        </div> )
}
export default Copyright;