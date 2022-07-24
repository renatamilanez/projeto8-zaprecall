import React from "react";
import Card from "./Card";
import logo from './assets/images/logo.png';

export default function StartDeck({counter, setCounter, iconAnswer, setIconAnswer, questions, listIcons}){

    return (
        <div className='main'>
            <div className='logo'>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <h1>ZapRecall</h1>
            </div>
            <Card listIcons={listIcons} counter={counter} setCounter={setCounter} iconAnswer={iconAnswer} setIconAnswer={setIconAnswer} questions={questions}/>
        </div>
    )
}; 