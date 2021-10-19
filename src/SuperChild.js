import React,{ useContext } from "react";
import { GlobalInfo } from "./App";

function SuperChild(){
    const{appColor,getDay}=useContext(GlobalInfo);
    const day="sunday";
    return(
        <div>
            <h1 style={{color:appColor}}>SuperChild Component</h1>
            <button onClick={()=>getDay(day)}>Click Me</button>
        </div>
    )
}
export default SuperChild;