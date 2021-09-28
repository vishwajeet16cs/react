import React from "react";
import Component1 from "./Component1";

class Header extends React.Component{
    render (){
       
        return  <>
            
            <nav className="nav nav-pills nav-justified">
                <a className="nav-link active" aria-current="page" href="http://sit.ac.in/html/home.html">My College</a>
                <a className="nav-link" href="#">Much longer nav link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link disabled">Disabled</a>
               
                
            </nav>
        </>
    }

}
export default Header;
