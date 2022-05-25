import React from 'react';
import './App.css';
import {Button} from "./Component/Button";


function App() {

    const Callback1 = (name: string) => {
        console.log(name)
    }

    const Callback2 = (name: string) => {
        console.log(name)
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChannel-1'} Callback={() => Callback1('Hello')}/>
            <Button name={'MyYouTubeChannel-2'} Callback={() => Callback2('Bye')}/>
        </div>
    );
}

export default App;
