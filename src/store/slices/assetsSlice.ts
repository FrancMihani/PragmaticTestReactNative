import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Root } from 'store/types'

export const counterSlice = createSlice({
  name: 'assets',
  initialState: '' as Root['assets'],
  reducers: {
    addAsset: (state, action: PayloadAction<string>) => {
      state += action.payload
    },
    removeAsset: (state, action: PayloadAction<string>) => {
      state = state.replace(action.payload, '')
    },
  },
})

export const { addAsset, removeAsset } = counterSlice.actions

export default counterSlice.reducer
