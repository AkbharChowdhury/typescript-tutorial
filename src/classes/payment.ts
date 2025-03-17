
import { formatCurrency } from '../utils/currency.js';
import { hasFormatter } from '../interfaces/hasFormatter.js';

export class Payment implements hasFormatter { 
    constructor(
        private readonly recipient: string,
        private readonly details: string,
        private readonly amount: number
    ){}
    
    format(){
        return `${this.recipient} is owed ${formatCurrency(this.amount)} for ${this.details}`;
    }
}