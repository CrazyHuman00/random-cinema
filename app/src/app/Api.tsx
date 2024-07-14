import key from './key.json';

export function fetchAPI() {
    const apiKey = key.APIKey;
    let randomPage = Math.floor(Math.random() * 30) + 1;
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ja&region=JP&page=${randomPage}`;

    return (
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let randomMovie = Math.floor(Math.random() * data.results.length);
                const movie = data.results[randomMovie];

                // デバッグ
                console.log(data);

                return {
                    title: movie.title,
                    poster_path: movie.poster_path,
                };
            })
            .catch((error) => {
                console.log("error", error);
                return null;
            })
    )
}