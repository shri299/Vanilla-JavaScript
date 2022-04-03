const myfunc = (callback) => {
    let val = 50;
    callback(val);
};

// myfunc(function(val){
//     console.log(val);
// });

myfunc(val => console.log(val) );

//foreach method

let ppl = [1,2,3,4,5,6,7];

// ppl.forEach(function(peep,index){
//     //console.log("Something");
//     console.log(peep,index);
// })

const func = peep => console.log(peep);

ppl.forEach(func);

//ppl.forEach(peep => console.log(peep));


