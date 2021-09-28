import React from "react";
import App from "../App";
function Prop1(prop){
    let name="ram";
    return <>
    <App x={name}/>
    <h1>{prop.header}</h1>
    </>


}
export default Prop1;