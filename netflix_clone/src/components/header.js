import React from "react";
import "./header.css"

export default ({black})=>{
        return(
            <header  className= {black ? 'black' : ''}>
               
                    <img className="logo--netflix" src='/image/logo.png'></img>
                    <img className="logo--user" src='/image/user.png'></img>
                
            </header>
        )
}