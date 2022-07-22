import React from "react";

const deck = [
    {
        question: 'O que é JSX?',
        answer: 'Uma extensão da linguagem do JavaScript'
    },
    {
        question: 'O React é...',
        answer: 'uma biblioteca de linguagem do JavaScript'
    },
    {
        question: 'Componentes devem iniciar com...',
        answer: 'letra maiúscula'
    },
    {
        question: 'O ReactDOM nos ajuda...',
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        question: 'Podemos colocar...',
        answer: 'expressões'
    },
    {
        question: 'Usamos o npm para...',
        answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        question: 'Usamos props para...',
        answer: 'passar diferentes informações para componentes'
    },
    {
        question: 'Usamos estado (state) para...',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    },
];

let questions = [...deck];
function suffledDeck(){
    questions.sort(() => Math.random() - 0.5)
    for(let i=0; i < questions.length; i++){
        questions.pop()
    }
}
suffledDeck();

console.log(questions); 

const renderQuestions = questions.map((question, index) => {
    return (
        <div className='closed-question'>
                    <p className='title-question'>Pergunta {index+1}</p>
                    <ion-icon name="play-outline"></ion-icon>
        </div>
    )
});


export default function ListCards(){
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