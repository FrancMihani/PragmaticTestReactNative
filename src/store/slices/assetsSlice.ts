import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Root } from 'store/types'

export const assetsSlice = createSlice({
  name: 'assets',
  initialState: [] as Root['assets'],
  reducers: {
    addAsset: (state, action: PayloadAction<string>) => {
      state.push(action.payload)
    },
    removeAsset: (state, action: PayloadAction<string>) => state.filter(val => val !== action.payload),
  },
})

export const { addAsset, removeAsset } = assetsSlice.actions
export const reducer = assetsSlice.reducer
export default assetsSlice
