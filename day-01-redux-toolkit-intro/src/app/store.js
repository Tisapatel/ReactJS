import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice.js";

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
    
});
export { store };