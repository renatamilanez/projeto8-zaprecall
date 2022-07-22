import React from "react";

const deck = [
    {
        title: 'O que é JSX?',
        answer: 'Uma extensão da linguagem do JavaScript'
    },
    {
        title: 'O React é...',
        answer: 'uma biblioteca de linguagem do JavaScript'
    },
    {
        title: 'Componentes devem iniciar com...',
        answer: 'letra maiúscula'
    },
    {
        title: 'O ReactDOM nos ajuda...',
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        title: 'Podemos colocar...',
        answer: 'expressões'
    },
    {
        title: 'Usamos o npm para...',
        answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        title: 'Usamos props para...',
        answer: 'passar diferentes informações para componentes'
    },
    {
        title: 'Usamos estado (state) para...',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    },
];

let newDeck = [...deck];
function suffledDeck(){
    newDeck.sort(() => Math.random() - 0.5)
    for(let i=0; i < newDeck.length; i++){
        newDeck.pop()
    }
}
suffledDeck();


export default function OpenCard(){
    newDeck.map((question, index) => {
        return (
            <>
                <div className='closed-question'>
                    <p className='title-question'>Pergunta {index+1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </>
        )
    });
}