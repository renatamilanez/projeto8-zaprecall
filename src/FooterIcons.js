import React from "react";

 export default function FooterIcons({iconAnswer, icons}){
    
    if(iconAnswer === true){
        return(
            <div className="footer-icon">
                {icons.map((icon, index) => {
                    return(
                        <ion-icon key={index} name={icon}></ion-icon>
                    )
                })}
            </div>
            )
    } else {
        return null
    }
}