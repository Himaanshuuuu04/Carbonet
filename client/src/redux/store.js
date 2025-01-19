import { configureStore } from "@reduxjs/toolkit";
// import searchReducer from "./Slice/searchSlice";
// import aiSearchReducer from "./Slice/aiSearchSlice";
import authreducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    // search: searchReducer,
    // aiSearch: aiSearchReducer,
    auth: authreducer,
  },
});