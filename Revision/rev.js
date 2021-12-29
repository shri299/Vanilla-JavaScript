//Event Listners

// document.querySelector('.clear-tasks').addEventListener('click',function (e) {
// console.log("hello world");    
// e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click',onclick);

function onclick(e) {
    // console.log("hello world");    
    let val;
    // val = e;
    
    val = e.target;
    val = e.timeStamp;
    val = e.clientY;
    val = e.clientX;
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
    e.preventDefault();
    }