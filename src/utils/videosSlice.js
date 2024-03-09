import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: "allVideos",
    initialState: {},
    reducers:{
        setAllVideos : (state,action) => {
            state.allVideos = action.payload;
        }
    }
})

export const { setAllVideos } = videosSlice.actions;
export default videosSlice.reducer;