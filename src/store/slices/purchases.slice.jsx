import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { useSelector } from "react-redux";

export const purchases = createSlice({
    name: 'purchases',
    initialStatement: [],
    reducers: {
        serPurchases: (state, Action) => {
            const purchases = useSelector(state => state.purchases);
            const dispatch
        }
    }
})