import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    tabName: string
}

const InitialState: IInitialState = {
    tabName: "Home"
}

export const selectedTabSlice = createSlice({
    name: "selectedTab",
    initialState: InitialState,
    reducers: {
        changeTab: (state: IInitialState, action: PayloadAction<string>) => {
            state.tabName = action.payload;
        },
    },
});

export const { changeTab } = selectedTabSlice.actions;

export default selectedTabSlice.reducer;
