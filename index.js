// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


function setBestCustomer() {
  bestCustomer = 'not bob'; // Note: this implicitly creates a global variable
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
                           
const leastFavoriteCustomer = 'Rehema';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; // This will result in an error because you cannot reassign a value to a constant.
}
