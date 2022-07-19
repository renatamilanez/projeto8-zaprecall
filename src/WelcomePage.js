import FirstPage from "./FirstPage";


export default function WelcomePage(){
    return(
            <div className='open-page'>
                <img src='./assets/images/image 2.png' alt=""/>
                <h1>ZapRecall</h1>
                <button onClick={FirstPage()}>Iniciar Recall!</button>
            </div>
)
};

