class Transaction {
    constructor(transaction){
        this.transaction = transaction
    }

    getId(){
        return parseInt(this.transaction.id)
    }

    getUser(){
        if(this.isShared()){
            return 'Shared'
        } else {
            return parseInt(this.transaction.card) === 1052 ? 'Miguel' : 'Tiffany'
        }
    }

    getDate(){
        return this.transaction.date
    }

    getDescription(){
        return this.transaction.description
    }

    getAmount(){
        return this.transaction.debit ? this.formatCurrency(parseInt(this.transaction.debit), true) : this.formatCurrency(parseInt(this.transaction.credit))
    }

    getAmountRaw(){
        return this.transaction.debit ? parseInt(this.transaction.debit) : parseInt(this.transaction.credit)
    }

    getCard(){
        return parseInt(this.transaction.card)
    }

    getCategory(){
        return this.transaction.category ? this.transaction.category : ''
    }

    formatCurrency(amount = 0, negative = false){
        let roundedAmount = `$${amount.toFixed(2)}`
        if(negative) roundedAmount = `(${roundedAmount})`
        return roundedAmount
    }

    isShared(){
        return this.transaction.account === 'shared'
    }
}

export default Transaction