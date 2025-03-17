const formatCurrency = (amount) => Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
}).format(amount);
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${formatCurrency(this.amount)} for ${this.details}`;
    }
}
