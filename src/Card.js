import React from "react";
import OpenCard from "./OpenCard";

export default function Card({counter, setCounter, iconAnswer, setIconAnswer, questions, listIcons}){
    return(
        <div className='questions'>
            {questions.map((question, index) => {
                return (
                    <OpenCard listIcons={listIcons} counter={counter} setCounter={setCounter} key={index} question={question} index={index} iconAnswer={iconAnswer} setIconAnswer={setIconAnswer}/>
                )})}
        </div>
    )
}