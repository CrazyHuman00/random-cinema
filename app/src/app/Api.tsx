

export function fetchAPI() {
    let apiKey = "aa2716f65d229e2f8a6f7bf683b074d0"
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ja-JA&region=JA&page=1`
    return (
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log("error", error);
            })
    )
}