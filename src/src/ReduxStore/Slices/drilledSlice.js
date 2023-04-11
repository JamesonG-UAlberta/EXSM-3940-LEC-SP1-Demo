import {createSlice} from '@reduxjs/toolkit';

export const drilledSlice = createSlice({
    name: 'drilled',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {   
            state.value -= 1;
        },
        modify: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {increment, decrement, modify} = drilledSlice.actions;

export default drilledSlice.reducer;