import React from 'react'
import { useSelector } from 'react-redux'

const TransactionTable = () => {
    const transactions = useSelector( state => state.transaction.list )

    if(transactions.length === 0) return <p>No transactions found</p>

    return(
        <table className="table table-sm">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Account</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { transactions.map( (row, i) => <tr key={i}>
                    <td>{ row.getDate() }</td>
                    <td>{ row.getDescription() }</td>
                    <td>{ row.getUser() }</td>
                    <td>{ row.getAmount() }</td>
                    <td>[Actions]</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default TransactionTable