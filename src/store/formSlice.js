import { createSlice } from '@reduxjs/toolkit';
const cards = [];
export const formSlice = createSlice({
    name: 'form',
    initialState: {
        cards,
    },
    reducers: {
        addFormCard(state, action) {
            state.cards = [...state.cards, action.payload];
        },
    },
});
export const { addFormCard } = formSlice.actions;
export default formSlice.reducer;
