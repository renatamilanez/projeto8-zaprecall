import React from "react";

export default function FooterButton({icons, logged,setLogged}){
    if(icons.length === 8){
        for(let i=0; i<icons.length; i++){
            if(icons[i] === 'close-circle'){
                return (
                    <div className="footer-button">
                        <button onClick={() => setLogged(!logged)}>REINICIAR RECALL</button>
                    </div>
                )
            }
        } 
        return null
    } else {
        return null
    }
}