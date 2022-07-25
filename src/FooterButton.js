import React from "react";

export default function FooterButton({icons, logged,setLogged}){
    if(icons.length === 8){
                return (
                    <div className="footer-button">
                        <button onClick={() => setLogged(!logged)}>REINICIAR RECALL</button>
                    </div>
                )
    } else {
        return null
    }
}