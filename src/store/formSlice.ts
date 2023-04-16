import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardDataType } from '../types/types';

const cards: CardDataType[] | [] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    cards,
  },
  reducers: {
    addFormCard(state, action: PayloadAction<CardDataType>) {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { addFormCard } = formSlice.actions;

export default formSlice.reducer;
