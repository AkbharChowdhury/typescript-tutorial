import { formatCurrency } from '../utils/currency.js';
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${formatCurrency(this.amount)} for ${this.details}`;
    }
}
