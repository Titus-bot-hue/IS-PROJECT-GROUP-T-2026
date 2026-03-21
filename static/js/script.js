'use strict';

// Basic JavaScript code to log the current date and time
const currentDate = new Date();
console.log(`Current Date and Time (UTC): ${currentDate.toISOString().slice(0, 19).replace('T', ' ')} UTC`);