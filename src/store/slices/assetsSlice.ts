import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'assets',
  initialState: [] as Array<string>,
  reducers: {
    addAsset: (state, action: PayloadAction<string>) => {
      state = [...state, action.payload]
    },
    removeAsset: (state, action: PayloadAction<string>) => {
      state = state.filter(item => item === action.payload)
    },
  },
})

export const { addAsset, removeAsset } = counterSlice.actions

export default counterSlice.reducer
