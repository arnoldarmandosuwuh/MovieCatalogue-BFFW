function main() {
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = "e852848561694f1300e3eac1deb19c49";
    const movieListElement = document.querySelector("movie-list");

    const getMovie = async () => {
        try {
            const response = await fetch(`${baseUrl}/discover/movie?api_key=${apiKey}`);
            const responseJson = await response.json();
            if (responseJson.error){
                showResponseMessage(responseJson.message);
            } else {
                renderAllMovies(responseJson.results);
            }
        } catch(error){
            showResponseMessage(error);
        }
    };

    const getTv = async () => {
        try {
            const response = await fetch(`${baseUrl}/discover/tv?api_key=${apiKey}`);
            const responseJson = await response.json();
            if (responseJson.error){
                showResponseMessage(responseJson.message);
            } else {
                renderAllTv(responseJson.results);
            }
        } catch(error){
            showResponseMessage(error);
        }
    };

    const showMovie = () => {
        const listMovie = document.querySelector("#movie");
        listMovie.style.display = 'block';
    };

    const showTv = () => {
        const listTv = document.querySelector("#tv");
        listTv.style.display = 'block';
    };

    const hideMovie = () => {
        const listMovie = document.querySelector("#movie");
        listMovie.style.display = 'none';
    };

    const hideTv = () => {
        const listTv = document.querySelector("#tv");
        listTv.style.display = 'none';
    };

    const showResponseMessage = (message = "Error") => {
        alert(message);
    };

    const renderAllMovies = (movies) => {
        const listMovieElement = document.querySelector("#listMovie");
        listMovieElement.innerHTML = "";

        movies.forEach(movies => {
            listMovieElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4>${movies.title}</h4>
                        </div>
                        <div class="card-body">
                            <img src=https://image.tmdb.org/t/p/original${movies.backdrop_path} width="100%" height="250"></img>
                            <p>Release Date : ${movies.release_date}</p>
                            <p>${movies.overview}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    const renderAllTv = (tv) => {
        const listTvElement = document.querySelector("#listTv");
        listTvElement.innerHTML = "";

        tv.forEach(tv => {
            listTvElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-header bg-success text-white">
                            <h4>${tv.name}</h4>
                        </div>
                        <div class="card-body">
                            <img src=https://image.tmdb.org/t/p/original${tv.backdrop_path} width="100%" height="250"></img>
                            <p>Release Date : ${tv.first_air_date}</p>
                            <p>${tv.overview}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    document.addEventListener("DOMContentLoaded", () => {

        getMovie();
        getTv();

    });
}

export default main;