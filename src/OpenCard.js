import React from "react";
import FlipCard from "./FlipCard";

export default function OpenCard({index, question, setLogged, counter, setCounter, iconAnswer, setIconAnswer, listIcons}){
    const [cards, setCards] = React.useState('closed');

    if(cards === 'closed'){
        return (
            <div key={index} className='closed-question'>
                <p className='title-question'>Pergunta {index+1}</p>
                <ion-icon name="play-outline" onClick={() => setCards('open')}></ion-icon>
            </div>
        )
    } if(cards === 'open'){
        return (
            <FlipCard index={index} question={question} setLogged={setLogged} setCards={setCards} counter={counter} setCounter={setCounter} iconAnswer={iconAnswer} setIconAnswer={setIconAnswer}/>
        )
    } if(cards === 'positive'){
        listIcons.push('checkmark-circle');
        setIconAnswer(true);
        return (
            <div key={index} className='closed-question'>
                <p className='title-question positive'>Pergunta {index+1}</p>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        )
    } if(cards === 'negative'){
        listIcons.push('close-circle');
        setIconAnswer(true);
        return (
            <div key={index} className='closed-question'>
                <p className='title-question negative'>Pergunta {index+1}</p>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        )
    } if(cards === 'neutral'){
        listIcons.push('help-circle');
        setIconAnswer(true);
        return (
            <div key={index} className='closed-question'>
                <p className='title-question neutral'>Pergunta {index+1}</p>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        )
    }
}