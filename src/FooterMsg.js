import React from "react";

export default function FooterMsg({icons}){
    const msgSucess = (                
        <div className='final-msg'>
        <p>🥳 Parabéns!</p>
        <p>Você não esqueceu nenhum flashcard!</p>
        </div>);

    
    if(icons.length === 8){
        for(let i=0; i<icons.length; i++){
            if(icons[i] === 'close-circle'){
                return (
                    <>
                        <div className='final-msg'>
                            <p>🥺 Putz...</p>
                            <p>Ainda faltam alguns...<br/>Mas não desanime!</p>
                        </div>
                    </>
                )
            }
        } return msgSucess;
    } else {
        return null
    }
}