import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('form');
const docType = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const values = [tofrom.value, details.value, amount.valueAsNumber];
    const doc = docType.value === 'invoice' ? new Invoice(...values) : new Payment(...values);
    list.render({
        item: doc,
        heading: docType.value,
        position: 'end'
    });
});
