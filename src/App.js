import React, { useEffect } from 'react'
import { loadTransactions } from './store/transactionSlice'
import { useDispatch } from 'react-redux'
import TransactionTable from './components/TransactionTable'
import TransactionSummary from './components/TransactionSummary'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => dispatch(loadTransactions()), [])

    return (
        <>
            <TransactionSummary />
            <TransactionTable />
        </>
    )
}

export default App