import React from "react";
import FooterIcons from "./FooterIcons";

export default function Footer({counter, iconAnswer, setIconAnswer, questions, listIcons}){

    return (
        <div className="footer">
            <div>
                <p>{counter}/8 CONCLUÍDOS</p>
            </div>
                <FooterIcons questions={questions} iconAnswer={iconAnswer} setIconAnswer={setIconAnswer} listIcons={listIcons}/>
        </div>
    )
}
