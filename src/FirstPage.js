import React from "react";
import Footer from "./Footer";
import StartDeck from "./StartDeck";

export default function FirstPage(){
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <StartDeck counter={counter} setCounter={setCounter}/>
            <Footer counter={counter}/>
        </div>
    )
};