import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : [
        { id : "1", name : "Instellar"},
        { id : "2", name : "Harry Potter"},
    ]
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        addMovie : (state,action) => {
            state.movies.push(action.payload)
        },
        removeMovie : (state,action) => {
            state.movies = state.movies.filter(movie => movie.id != action.payload)
        }
    }
})

export const {addMovie,removeMovie} = movieSlice.actions;
export default movieSlice.reducer;
