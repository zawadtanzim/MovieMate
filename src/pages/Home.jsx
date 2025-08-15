import "../CSS/home.css";


import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";



function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
                setError(false)
            } catch (err) {
                console.log(err);
                setError("failed to load movies");
            } finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();

        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults)
            setError(false)
        } catch(err) {
            console.log(err)
            setError("failed to load movies")
        } finally {
            setLoading(false);
        }
    };

    return (
    
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                className="search-input"
                type="text"
                placeholder="search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button"> Search</button>
            </form>
            
            {error &&
                <div className="error-message"> {error} </div>
            }

            {loading ? ( 
                <div className="loading"> Loading...</div>
                ) : (
                <div className="movies-grid">
                    {movies.map(movie =>
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                        (<MovieCard movie={movie} key={movie.id} />)
                    )}
                </div>
            )}

        </div>
    )

}

export default Home;