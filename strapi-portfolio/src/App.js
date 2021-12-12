import React from "react";
import "./styles.css"
import Nav from "./nav";
import MastHead from "./masthead";
import Section from "./section";
import About from "./about";
import Contact from "./contactMain";
import Footer from "./footer";
import One from "./modalOne";
import Two from "./modalTwo";
import Three from "./modalThree";
import Four from "./modalFour";
import Five from "./modalFive";
import Six from "./modalSix";
import Copyright from "./copyright";

let App = ()=>{
    return(
        <div>
      <Nav/>
      <MastHead/>
      <Section title="My Projects"/>
      <About/>
     
     <Contact/>
     <Footer/>
     <One/>
     <Two/>
     <Three/>
     <Four/>
     <Five/>
     <Six/>
     <Copyright/>
     </div>
    )
}
export default App;