import "../CSS/favorites.css"

import MovieCard from "../components/MovieCard";
import {useMovieContext} from "../context/MovieContext";


function Favorites() {

    const {favorites} = useMovieContext();

    if(!favorites || favorites.length === 0) {
        return (
            <div className="favorites-container">
                <div className="favorites-empty">
                    <h2> No Favorite Movies Yet</h2>
                    <p>Start adding movies to your favorites</p>
                </div>
            </div>

        )
    } else {
        return (
            <div className="favorites-container">
                <h3 className="favorites-title"> Your Favorites </h3>
                <div className="favorites-grid">
                    {favorites.map((movie) =>(
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

}

export default Favorites;