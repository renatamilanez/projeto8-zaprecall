import React from "react";
import Card from "./Card";
import logo from './assets/images/logo.png'

export default function StartDeck(){
    return (
        <div className='main'>
            <div className='logo'>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <h1>ZapRecall</h1>
            </div>
            <Card />
        </div>
    )
}; 