import React from 'react'
import { useSelector } from 'react-redux'

const TransactionSummary = () => {
    const transactions = useSelector( state => state.transaction )

    if(transactions.length === 0) return <p>No transactions found</p>

    return(
        <h1>Summary</h1>
    )
}

export default TransactionSummary