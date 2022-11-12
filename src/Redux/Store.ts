import {configureStore} from '@reduxjs/toolkit';
import MoneySlice from "./Slice/MoneySlice";


export const store = configureStore({
    reducer: {
        money: MoneySlice
    }
})