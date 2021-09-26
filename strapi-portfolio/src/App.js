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
      <Section title="Welcome to my portfolio"/>
      <About  Work="I am currently employed by Hungry Jack's as an Assistant Manager and also employed as an part time Front-End Developer at Code Venture.
      The fun fact about me is I spend most of my days coding, debugging and solving challenges that are available in the Internet."/>
     
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