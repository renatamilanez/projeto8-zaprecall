import React from "react";
import FooterIcons from "./FooterIcons";
import FooterMsg from "./FooterMsg";
import FooterButton from "./FooterButton";

export default function Footer({counter, iconAnswer, listIcons, logged, setLogged}){
    const icons = [...listIcons];

    return (
        <div className="footer">
                <FooterMsg icons={icons}/>
            <div>
                <p>{counter}/8 CONCLUÍDOS</p>
            </div>
                <FooterIcons icons={icons} iconAnswer={iconAnswer} />
                <FooterButton icons={icons} logged={logged} setLogged={setLogged}/>
        </div>
    )
}
