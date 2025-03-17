
import { formatCurrency } from '../utils/currency.js';
import { hasFormatter } from '../interfaces/hasFormatter.js';

export class Invoice implements hasFormatter{
    constructor(
        private readonly client: string,
        private readonly details: string,
        private readonly amount: number
    ){}
    
    public format(){
        return `${this.client} owes ${formatCurrency(this.amount)} for ${this.details}`;
    }
}