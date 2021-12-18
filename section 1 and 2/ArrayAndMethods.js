//create some arrays

    const numbers = [1,2,3,4,5,6];
    const number2 = new Array(2,6,7,9,4,1);
    const fruit = ['apple','banana','orange','pear'];
    const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];


    let val;

//get array lenght

    val = numbers.length;

//check if is array
    val = Array.isArray(numbers);//to check if something is array returns true or false

//get single value
    val = numbers[3];
    val = numbers[0];

//insert into array
    numbers[2] = 100;

//finding index of a value
    val = numbers.indexOf(100);
    val = fruit.indexOf('apple');

//adding extra elemnt to array
    //add on end
     numbers.push(250);
    //add on front
     numbers.unshift(90);

//removing any elemnt from array
    //removing from end
     numbers.pop();
    //remove from front
     numbers.shift();

//splice values
    numbers.splice(1,1); //start and end position is passed

//reverse the array
    numbers.reverse();

//concatenate arrays
    val = numbers.concat(number2); //joins two arrays together

//sorting arrays
    val = fruit.sort(); //arrange in alphabetical order
    //val = numbers.sort(); wrong way to sort number array,sorts by the first number

    //use the compare function
    val = numbers.sort(function(x,y){
        return x-y;
    })
    //reverse sort
    val = numbers.sort(function(x,y){
        return y-x;
    })

//find
    function under50(num){
        return num>50;
    }
    val = numbers.find(under50);

//join
    numbers.join(','); //joins them into one complete string based on the ',' charecter(we get this string 1,2,3,4,5,6 as output)
    numbers.join('-'); //we get the string 1-2-3-4-5-6 as output

//include

    val = numbers.includes(100);//returns either true or false




    //console.log(mixed);
    console.log(numbers);
    console.log(val);
