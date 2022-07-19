import React from "react";

const deck = [
    {
        title: 'Pergunta 1',
        question: 'O que é JSX?',
        answer: 'Uma extensão da linguagem do JavaScript'
    },
    {
        title: 'Pergunta 2',
        question: 'O React é...',
        answer: 'uma biblioteca de linguagem do JavaScript'
    },
    {
        title: 'Pergunta 3',
        question: 'Componentes devem iniciar com...',
        answer: 'letra maiúscula'
    },
    {
        title: 'Pergunta 4',
        question: 'O ReactDOM nos ajuda...',
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
];

const renderQuestions = deck.map((question) => {
    return (
        <div className='closed-question'>
                    <p className='title-question'>{question.title}</p>
                    <ion-icon name="play-outline"></ion-icon>
        </div>
    )
});

//const [reply, setReply] = React.useState('play-outline');


/*<div className="open-question">
                    <p>O que é JSX?</p>
                    <img src='./assets/images/Vector.png'></img>
                </div>
                <div className='closed-question'>
                    <p className='title-question negative'>Pergunta 2</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
                <div className='closed-question'>
                    <p className='title-question neutral'>Pergunta 2</p>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
                <div className='closed-question'>
                    <p className='title-question positive'>Pergunta 2</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="open-question">
                    <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                    <div className="options">
                        <button className="negative">Não lembrei</button>
                        <button className="neutral">Quase não lembrei</button>
                        <button className="positive">Zap!</button>
                    </div>
                </div>*/

export default function ClosedCards(){
    return (
        <div className='main'>
            <div className='logo'>
                <div>
                    <img src='./assets/images/image 2.png' alt=""/>
                </div>
                <h1>ZapRecall</h1>
            </div>
            <div className='questions'>
                {renderQuestions}
            </div>
        </div>
    )
}; 