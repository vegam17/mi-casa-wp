import { createSlice } from '@reduxjs/toolkit'
import { apiCall } from './actions/api'
import { createTransaction } from '../factories/createTransaction'

const endpoint = '/transactions'

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        list: [],
        summaries: [],
        loading: true
    },
    reducers: {
        setTransactions: (state, action) => {
            const transactions = action.payload
            const transactionObjects = transactions.map(transaction => createTransaction(transaction))
            state.list = transactionObjects
            state.loading = false
        },
        setSummaries: (state, action) => {
            state.summaries = action.payload
        }
    },
})

export default transactionSlice.reducer

export const { setTransactions, setSummaries } = transactionSlice.actions

export const loadTransactions = () => apiCall({
    url: endpoint,
    onSuccess: setTransactions.type
})