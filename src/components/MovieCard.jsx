
import "../CSS/movieCard.css"

import { useMovieContext } from "../context/MovieContext";


function MovieCard({movie}) {

    const {addToFav, removeFromFav, checkFav} = useMovieContext();
    // console.log({ addToFav, removeFromFav, checkFav });
    
    const favorite = checkFav(movie.id)

    function onFavoriteClick(e) {
        if(favorite) removeFromFav(movie.id)
        else addToFav(movie)
    }

    return (

        <div className="movie-card">

            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                {/* <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}> 🤍 </button> */}
                
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}> {favorite ? "❤️" : "🤍"} </button>
            </div>

            <div className="movie-info">
                <h3> {movie.title} </h3>
                <p> {movie.release_date.slice(0, 4)} </p>
            </div>

        </div>
    )
}


export default MovieCard;