import { useDispatch, useSelector } from "react-redux"
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
    const movies = useSelector((state)=>state.movies.movies)

    const dispatch = useDispatch();
    const handleDeleteMovie =(id) =>{
        dispatch(removeMovie(id))
    }
    return (
        <>
            <h1>Movie List</h1>
            {movies.map((movie)=>(
            <div key = {movie.id}>{movie.name}
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete Movie</button></div> 
        ))}
        </>
    )
}