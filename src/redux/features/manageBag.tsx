import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BagItem {
  id: string;
  name: string;
  price: number;
}

interface BagState {
  bag: BagItem[];
  totalAmount: number;
}

const initialState: BagState = {
  bag: [],
  totalAmount: 0,
};

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    emptyBag: () => initialState,
    addToBag: (state, action: PayloadAction<BagItem>) => {
      state.bag.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeFromBag: (state, action: PayloadAction<string>) => {
      const index = state.bag.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalAmount -= state.bag[index].price;
        state.bag.splice(index, 1);
      }
    },
    addPrice: (state, action: PayloadAction<number>) => {
      state.totalAmount += action.payload;
    },
    removePrice: (state, action: PayloadAction<number>) => {
      state.totalAmount -= action.payload;
    },
  },
});

export const { addToBag, removeFromBag, addPrice, removePrice, emptyBag } = bagSlice.actions;
export default bagSlice.reducer;
