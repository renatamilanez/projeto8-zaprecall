import "./assets/css/reset.css";
import "./assets/css/style.css";
import FirstPage from "./FirstPage";
import React from "react";
import logo from './assets/images/logo.png';

export default function App() {
    const [logged, setLogged] = React.useState(true);

    return (
        <div>
            {logged ? (
                <div className='open-page'>
                    <img src={logo} alt=""/>
                    <h1>ZapRecall</h1>
                    <button onClick={() => setLogged(!logged)}>Iniciar Recall!</button>
                </div>
            ): <FirstPage />}
        </div>
    )
};