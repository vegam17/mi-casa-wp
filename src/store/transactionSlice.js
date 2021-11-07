import { createSlice } from '@reduxjs/toolkit'

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: [],
    reducers: {
        update: (state, action) => state = action.payload
    },
})

export const { update } = transactionSlice.actions

export default transactionSlice.reducer