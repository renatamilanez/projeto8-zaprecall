import React from "react";
import Card from "./Card";
import logo from './assets/images/logo.png';

export default function StartDeck({counter, setCounter}){

    return (
        <div className='main'>
            <div className='logo'>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <h1>ZapRecall</h1>
            </div>
            <Card counter={counter} setCounter={setCounter}/>
        </div>
    )
}; 