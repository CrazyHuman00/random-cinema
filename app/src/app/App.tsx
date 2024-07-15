import React, {useState} from 'react';
import './App.css';
import { fetchAPI } from './Api';

function App() {
    const [movie, setMovie] = useState<{ title: string; poster_path: string } | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    // ボタンを押した時の処理
    const handleClick = () => {
        fetchAPI().then(movie => {
            if (movie) {
                setMovie(movie);
            } else {
                setMessage('映画の取得に失敗しました。');
            }
        });
    };

    return (
        <div className="App">
            <a className="App-header">
                <h1>MOVIE GACHA</h1>
            </a>
            <a className="btn-emergency" onClick={handleClick}>
                <span className="btn-emergency-bottom"></span>
                <span className="btn-emergency-top"><span>ガチャ</span></span>
            </a>
            {message && <p>{message}</p>}
            {movie && (
                <div className="movie">
                    <h3>今日見る映画は...</h3>
                    <h2>{movie.title}</h2>
                    <img
                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
            )}
        </div>

    );
}

export default App;
