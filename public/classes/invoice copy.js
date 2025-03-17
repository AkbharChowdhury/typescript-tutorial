import { formatCurrency } from '../utils/currency.js';
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
