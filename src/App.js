import FirstPage from "./FirstPage";
import React from "react";

export default function App() {
    const [logged, setLogged] = React.useState(true);

    return (
        <div>
            {logged ? (
                <div className='open-page'>
                    <img src='./assets/images/image 2.png' alt=""/>
                    <h1>ZapRecall</h1>
                    <button onClick={() => setLogged(!logged)}>Iniciar Recall!</button>
                </div>
            ): <FirstPage />}
        </div>
    )
};