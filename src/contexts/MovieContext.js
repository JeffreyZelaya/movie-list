import React, {createContext, useState} from "react"
import {v4 as uuidv4} from "uuid"

export const MovieContext = createContext()

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([
        {title: "movie one", genre: "comedy", id: 1},
        {title: "movie two", genre: "romance", id: 2}
    ])

    const addMovie = (title, genre) => {
        setMovies([...movies, {title: title, genre: genre, id: uuidv4()}])
    }

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id))
    }
    return (
        <MovieContext.Provider value={{movies, addMovie: addMovie, removeMovie: removeMovie}}>
            {props.children}
        </MovieContext.Provider>
    )
}


export default MovieContextProvider