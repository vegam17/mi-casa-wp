import { configureStore } from '@reduxjs/toolkit'
import transactionSlice from './transactionSlice'
import api from './middleware/api'

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(api),
    reducer: {
        transaction: transactionSlice
    },
})