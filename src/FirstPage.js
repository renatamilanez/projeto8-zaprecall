import React from "react";
import Footer from "./Footer";
import StartDeck from "./StartDeck";

export default function FirstPage(){
    const [counter, setCounter] = React.useState(0);
    const [iconAnswer, setIconAnswer] = React.useState(false);

    const deck = [
        {
            title: 'O que é JSX?',
            answer: 'Uma extensão da linguagem do JavaScript',
            isAnswered: false,
            icon: null
        },
        {
            title: 'O React é...',
            answer: 'uma biblioteca de linguagem do JavaScript',
            isAnswered: false,
            icon: null
        },
        {
            title: 'Componentes devem iniciar com...',
            answer: 'letra maiúscula',
            isAnswered: false,
            icon: null
        },
        {
            title: 'O ReactDOM nos ajuda...',
            answer: 'interagindo com a DOM para colocar componentes React na mesma',
            isAnswered: false,
            icon: null
        },
        {
            title: 'Podemos colocar ______ dentro do JSX',
            answer: 'expressões',
            isAnswered: false,
            icon: null
            
        },
        {
            title: 'Usamos o npm para...',
            answer: 'gerenciar os pacotes necessários e suas dependências',
            isAnswered: false,
            icon: null
        },
        {
            title: 'Usamos props para...',
            answer: 'passar diferentes informações para componentes',
            isAnswered: false,
            icon: null
        },
        {
            title: 'Usamos estado (state) para...',
            answer: 'dizer para o React quais informações, quando atualizadas, devem renderizar a tela novamente',
            isAnswered: false,
            icon: null
        },
    ];
    
    let questions = [...deck];
    function suffledDeck(){
        questions.sort(() => Math.random() - 0.5)
        for(let i=0; i < questions.length; i++){
        }
    }
    suffledDeck();

    const listIcons = [];

    return (
        <div>
            <StartDeck listIcons={listIcons} counter={counter} setCounter={setCounter} iconAnswer={iconAnswer} setIconAnswer={setIconAnswer} questions={questions}/>
            <Footer listIcons={listIcons} counter={counter} setCounter={setCounter} iconAnswer={iconAnswer} setIconAnswer={setIconAnswer} questions={questions}/>
        </div>
    )
};