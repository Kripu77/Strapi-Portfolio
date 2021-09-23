import React from "react";
import foot from "./images/foot.jpg";
let Copyright = ()=>{

    return(
    <div>
         
        <div className="text-center text-black">
 
            <div className="container" style={{fontSize:"2rem"}}><small>Copyright &copy; Kripu Khadka 2021</small>
                  </div>

        </div>
         <img className="masthead-avatar mb-5 bg-primary" src={foot} alt="..." style={{width:"100%" }} />
        </div> )
}
export default Copyright;