import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.css"

const StartPage = () => {
    return ( 
    <div className="s_cont">
    <div className="img-div">
    <img id="c_img" src="/images/ba-ghost2.jpg" alt="baby-ghost-anime" />
    </div>
    <div className="btn-div">
    <h1>10X Team 04</h1>
    <Link to="/post"><button>Enter</button></Link>
    </div>
    </div> 
    );
}
 
export default StartPage;