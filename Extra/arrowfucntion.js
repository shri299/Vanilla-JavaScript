const calcArea = function(radius){
    return 3.14*radius**2;
};

// const convertToArrow = (radius) => {
//     return 3.14*radius**2;
// };

//simplify more: one parameter take away parenthesis

// const convertToArrow = radius => {
//     return 3.14*radius**2;
// };

//just simple return remove keyword and curly braces

const convertToArrow = radius => 3.14*radius**2;

//exersice

const great = () => "hello world";

console.log(great());

//exersice

const bill = (products,tax) => {
    let total = 0;
    for(let i =0; i<products.length;i++)
    {
        total += products[i] + products[i]*tax;
    }
    return total;
}

console.log(bill([10,15,30],0.2));

console.log(calcArea(5));
console.log(convertToArrow(5));