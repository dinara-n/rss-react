import { createSlice } from '@reduxjs/toolkit';
export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
    },
    reducers: {
        updateSearchQuery(state, action) {
            state.query = action.payload;
        },
    },
});
export const { updateSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
