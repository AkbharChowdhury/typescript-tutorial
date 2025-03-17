"use strict";
const formatCurrency2 = (amount) => Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
}).format(amount);
