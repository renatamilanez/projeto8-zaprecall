import React from 'react';
import vector from './assets/images/vector.png'

export default function FlipCard({index, question, setCards}){
    const [flippedCard, setFlippedCard] = React.useState(false);

    function clickedAnswer(buttonName){
        if (buttonName === 'negative'){
            setCards('negative')
        } if (buttonName === 'neutral'){
            setCards('neutral')
        } if (buttonName === 'positive'){
            setCards('positive')
        }
    }

    if(flippedCard === false){
        return (
            <div className="open-question" key={index}>
                <p>{question.title}</p>
                <img src={vector} onClick={() => setFlippedCard(!flippedCard)} alt=''></img>
            </div>
        )
    } if (flippedCard === true) {
        return (
        <div className="open-question">
            <p>{question.answer}</p>
            <div className="options">
                <button className="negative" onClick={() => clickedAnswer('negative')}>Não lembrei</button>
                <button className="neutral" onClick={() => clickedAnswer('neutral')}>Quase não lembrei</button>
                <button className="positive" onClick={() => clickedAnswer('positive')}>Zap!</button>
            </div>
        </div>
        )
    }
}