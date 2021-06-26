// Create the function calculateInvoice() in Javascript that returns the invoice for one customer(how much they spent).
// The parameters of the function should be starterPrice, maindishPrice, dessertPrice and beveragePrice.
// The function will return the sum of these four parameters.

// TASK 1 /TASK 2

function calculateInvoice(starter1, maindish1, dessert1, beverage1) {
    var result = starter1 + maindish1 + dessert1 + beverage1;
    return result;
}
var endprice = calculateInvoice(1.99, 4.99, 2.49, 2.99)+ " € ";
console.log(endprice);


//Didn't quite understand what was asked of us in Task 2 but i did it also this way:

function invoice(FoodCanape, RoastedLamb, FruitCake, Fruitcocktail) {
    var FoodCanape = 1.99;
    var RoastedLamb = 4.99;
    var FruitCake = 3.49;
    var Fruitcocktail = 2.99;
    let result = FoodCanape + RoastedLamb + FruitCake + Fruitcocktail;
    return result;
}
var endprice = (invoice()+ " € ");
console.log(endprice);

// Task 3 
// Calculate at least 3 invoices using combinations of different dishes on your menu 
// and print them on the console (using one dish of each category).
// /1

function invoice1(SmokedTrout, PorkBelly, FruitCake, Fruitcocktail) {
    var result = SmokedTrout + PorkBelly + FruitCake + Fruitcocktail;
    return result;
}
var endprice = invoice1(2.99, 5.99, 2.49, 2.99)+ " € ";
console.log(endprice);


// /2
function invoice2(GrilledSalmon, Hamburger, Lemontarte, Cocacola) {
    var result = GrilledSalmon + Hamburger + Lemontarte + Cocacola;
    return result;
}
var endprice = invoice2(2.99, 4.99, 2.99, 1.99)+ " € ";
console.log(endprice);

// /3
function invoice3(SearedScallops, RoastedLamb, ChockoCupcake, PolnischeRakete) {
    var result = SearedScallops + RoastedLamb + ChockoCupcake + PolnischeRakete;
    return result;
}
var endprice = invoice3(3.99, 4.99, 2.49, 3.99)+ " € ";
console.log(endprice);


// TASK 4
// Create a function studentInvoice() that will apply a 10% discount to the final invoice. 
// This function should have the same parameters as the function calculateInvoice(). 
// This discount applies to the dishes but NOT the beverages. 
// Print 3 examples of studentInvoice() on the console.


// Example 1 
function studentinvoice1(FoodCanape, RoastedLamb, FruitCake, Fruitcocktail) {
    let value1 = FoodCanape + RoastedLamb + FruitCake;
    let value2 = (value1 / 100) * 90;
    let value3 = value2 + Fruitcocktail
    return value3
}
console.log(studentinvoice1(1.99, 4.99, 2.49, 2.99)+ " € ")

// Example 2 

function studentinvoice2(SmokedTrout, PorkBelly, ChockoCupcake, PolnischeRakete) {
    let value1 = SmokedTrout + PorkBelly + ChockoCupcake;
    let value2 = (value1 / 100) * 90;
    let value3 = value2 + PolnischeRakete
    return value3;
}
console.log(studentinvoice2(2.99, 5.99, 2.49, 3.99)+ " € ");

// Example 3 

function studentinvoice3(SearedScallops, AngusHamburger, NutellaPeanutCake, BierStaropramen) {
    let value1 = SearedScallops + AngusHamburger + NutellaPeanutCake;
    let value2 = (value1 / 100) * 90;
    let value3 = value2 + BierStaropramen;
    return value3;
}
console.log(studentinvoice3(3.99, 4.99, 3.99, 2.49)+ " € ");
