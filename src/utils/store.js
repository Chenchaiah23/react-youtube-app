import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        allVideos: videosSlice,
    }
});

export default store;