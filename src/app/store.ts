import { configureStore } from "@reduxjs/toolkit";
import selectedTabReducer from "src/reducers/selectedTabReducer"

export const store = configureStore({
    reducer: {
        tabName: selectedTabReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
