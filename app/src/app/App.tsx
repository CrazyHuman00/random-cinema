import React, {useEffect, useState} from 'react';
import './App.css';
import { fetchAPI } from './Api';

function App() {
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        fetchAPI().then(r => console.log(r))
    }, [])

    const handleClick = () => {
        setMessage('ボタンが押されました！');
    };

    return (
        <div className="App">

            <a className="App-header">
                <h1>Movie</h1>
            </a>
            <a className="btn-emergency" onClick={handleClick}>
                <span className="btn-emergency-bottom"></span>
                <span className="btn-emergency-top"><span>ガチャ</span></span>
            </a>
            {message && <p>{message}</p>}
        </div>

    );
}

export default App;
