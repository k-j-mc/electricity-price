import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

import priceService from "../services/price";

const initialState = {
    prices: [],
    loadingPrices: true,
};

const priceSlice = createSlice({
    name: "price",
    initialState: initialState,
    reducers: {
        setPrices(state, action) {
            state.prices = action.payload;
            state.loadingPrices = false;
        },
    },
});

export const { setPrices } = priceSlice.actions;

export const initialiseData = () => {
    return async (dispatch: AppDispatch) => {
        const response = await priceService.getData();

        dispatch(setPrices(response.prices));
    };
};

export default priceSlice.reducer;
