import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
import { hasFormatter } from './interfaces/hasFormatter.js';

const form = document.querySelector('form') as HTMLFormElement;
const docType = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    type docTypeValues = [string, string, number]
    const values: docTypeValues = [tofrom.value, details.value, amount.valueAsNumber]
    const doc: hasFormatter = docType.value === 'invoice' ? new Invoice(...values) : new Payment(...values);
    list.render({
        item: doc,
        heading: docType.value,
        position: 'end'
    });
})
