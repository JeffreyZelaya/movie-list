import React, {useContext, useState} from "react"
import {MovieContext} from "../contexts/MovieContext"

const MovieForm = () => {
    const {dispatch} = useContext(MovieContext)
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_MOVIE",
            movie: {
                title: title,
                genre:genre
            }
        })
        setTitle("")
        setGenre("")
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Movie Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <input type="submit" value="Add Movie"/>
        </form>
     );
}
 
export default MovieForm;