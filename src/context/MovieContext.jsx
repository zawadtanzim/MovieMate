import { useContext, createContext, useState, useEffect } from "react";


const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect (() => {
        const storedFavorties = localStorage.getItem("favorites");
        if(storedFavorties) setFavorites(JSON.parse(storedFavorties));
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])


    const addToFav = (movie) => {
        setFavorites(prev => [...prev, movie]);

    }
    
    const removeFromFav = (movieId) => {
        setFavorites(prev => prev.filter((movie) => movie.id !== movieId))
    }

    const checkFav = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    }
    
    const value = {
        addToFav,
        removeFromFav,
        checkFav,
        favorites
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}