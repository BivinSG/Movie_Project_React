import { useState } from "react"
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

export const MovieInput = () => {
    const [newMovie,setNewMovie] = useState("");
    const dispatch = useDispatch("");
    
    const handleAddMovie = () => {
        if(newMovie){
            dispatch(addMovie({
                id : Date.now().toString(),
                name : newMovie
            }))
        }
    }
    return (
        <>
            <input onChange={(e)=>setNewMovie(e.target.value)} value={newMovie} />
            <button onClick={handleAddMovie}>Add Movie</button>
        </>
    )
}