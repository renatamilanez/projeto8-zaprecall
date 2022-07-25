import React from "react";
import Footer from "./Footer";
import StartDeck from "./StartDeck";

export default function FirstPage({logged, setLogged}){
    const [counter, setCounter] = React.useState(0);
    const [iconAnswer, setIconAnswer] = React.useState(false);

    const deck = [
        {
            title: 'O que é JSX?',
            answer: 'Uma extensão da linguagem do JavaScript',
        },
        {
            title: 'O React é...',
            answer: 'uma biblioteca de linguagem do JavaScript',
        },
        {
            title: 'Componentes devem iniciar com...',
            answer: 'letra maiúscula',
        },
        {
            title: 'O ReactDOM nos ajuda...',
            answer: 'interagindo com a DOM para colocar componentes React na mesma',
        },
        {
            title: 'Podemos colocar ______ dentro do JSX',
            answer: 'expressões',
            
        },
        {
            title: 'Usamos o npm para...',
            answer: 'gerenciar os pacotes necessários e suas dependências',
        },
        {
            title: 'Usamos props para...',
            answer: 'passar diferentes informações para componentes',
        },
        {
            title: 'Usamos estado (state) para...',
            answer: 'dizer para o React quais informações, quando atualizadas, devem renderizar a tela novamente',
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
            <Footer listIcons={listIcons} counter={counter} setCounter={setCounter} iconAnswer={iconAnswer} questions={questions} logged={logged} setLogged={setLogged}/>
        </div>
    )
};