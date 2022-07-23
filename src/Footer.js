import React from "react";
import FooterIcons from "./FooterIcons";

export default function Footer({counter}){

    return (
        <div className="footer">
            <div>
                <p>{counter}/8 CONCLUÍDOS</p>
                <FooterIcons/>
            </div>
        </div>
    )
}